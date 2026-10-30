import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { vacancies } from "@/data/vacancies";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 4 * 1024 * 1024;
const MAX_BODY_SIZE = MAX_FILE_SIZE + 200 * 1024;
const RATE_WINDOW = 10 * 60 * 1000;
const RATE_LIMIT = 3;
const ATTEMPT_LIMIT = 20;
const MIN_FILL_TIME = 3000;

const FILE_TYPES = {
  pdf: {
    mime: "application/pdf",
    magic: [0x25, 0x50, 0x44, 0x46],
  },
  docx: {
    mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    magic: [0x50, 0x4b, 0x03, 0x04],
  },
};

const hits = new Map();
const attempts = new Map();

async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return process.env.NODE_ENV !== "production";
  if (typeof token !== "string" || !token || token.length > 2048) return false;

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip !== "unknown") body.set("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
      signal: AbortSignal.timeout(8000),
    });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

let transporter;
function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !process.env.HR_EMAIL) {
    throw new Error("SMTP_HOST, SMTP_USER, SMTP_PASS, HR_EMAIL environment variables are missing.");
  }
  if (!transporter) {
    const port = Number(SMTP_PORT) || 465;
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      requireTLS: port !== 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  }
  return transporter;
}

function getIp(req) {
  return (
    req.headers.get("x-real-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "unknown"
  );
}

function recent(map, ip, now) {
  const times = (map.get(ip) || []).filter((t) => now - t < RATE_WINDOW);
  if (times.length) map.set(ip, times);
  else map.delete(ip);
  return times;
}

function prune(map, now) {
  if (map.size <= 5000) return;
  for (const ip of map.keys()) recent(map, ip, now);
}

function isRateLimited(ip) {
  const now = Date.now();
  if (recent(hits, ip, now).length >= RATE_LIMIT) return true;
  const tries = recent(attempts, ip, now);
  if (tries.length >= ATTEMPT_LIMIT) return true;
  attempts.set(ip, [...tries, now]);
  prune(attempts, now);
  return false;
}

function recordHit(ip) {
  const now = Date.now();
  hits.set(ip, [...recent(hits, ip, now), now]);
  prune(hits, now);
}

function isValidFile(ext, buffer) {
  const head = buffer.toString("latin1");
  if (ext === "pdf") {
    return !/\/(JavaScript|JS|Launch|EmbeddedFile|RichMedia|XFA)\b/.test(head);
  }
  return (
    head.includes("[Content_Types].xml") &&
    head.includes("word/document.xml") &&
    !head.includes("vbaProject.bin")
  );
}

function isSameOrigin(req) {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

function clean(value, max) {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n\t\0]+/g, " ").replace(/\s{2,}/g, " ").trim().slice(0, max);
}

function cleanText(value, max) {
  if (typeof value !== "string") return "";
  return value.replace(/\0/g, "").replace(/\r\n?/g, "\n").trim().slice(0, max);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fail(message, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

export async function POST(req) {
  if (!isSameOrigin(req)) return fail("İcazəsiz sorğu.", 403);

  const length = Number(req.headers.get("content-length"));
  if (!length) return fail("Sorğu düzgün deyil.", 411);
  if (length > MAX_BODY_SIZE) return fail("Fayl çox böyükdür (maksimum 4 MB).", 413);

  const ip = getIp(req);
  if (isRateLimited(ip)) {
    return fail("Çox sayda müraciət göndərildi. Bir az sonra yenidən cəhd edin.", 429);
  }

  let form;
  try {
    form = await req.formData();
  } catch {
    return fail("Form məlumatları oxunmadı.");
  }

  const startedAt = Number(form.get("startedAt"));
  if (clean(form.get("website"), 200)) return NextResponse.json({ ok: true });
  if (!startedAt || Date.now() - startedAt < MIN_FILL_TIME) {
    return fail("Bir neçə saniyə gözləyib yenidən göndərin.");
  }

  if (!(await verifyTurnstile(form.get("cf-turnstile-response"), ip))) {
    return fail("Təhlükəsizlik yoxlaması keçilmədi. Səhifəni yeniləyib yenidən cəhd edin.", 403);
  }

  const name = clean(form.get("name"), 80);
  const phone = clean(form.get("phone"), 20);
  const email = clean(form.get("email"), 120).toLowerCase();
  const message = cleanText(form.get("message"), 1000);
  const vacancy = vacancies.find((v) => String(v.id) === String(form.get("vacancyId")));
  const cv = form.get("cv");

  if (!vacancy) return fail("Vakansiya tapılmadı.");
  if (name.length < 3 || !/^[\p{L}\s.'-]+$/u.test(name)) return fail("Ad və soyadı düzgün daxil edin.");
  if (!/^\+?[0-9 ()-]{7,20}$/.test(phone)) return fail("Telefon nömrəsi düzgün deyil.");
  if (!/^[^\s@<>,;"]+@[^\s@<>,;"]+\.[a-z]{2,}$/i.test(email)) return fail("E-poçt ünvanı düzgün deyil.");

  if (!cv || typeof cv === "string" || cv.size === 0) return fail("CV faylını əlavə edin.");
  if (cv.size > MAX_FILE_SIZE) return fail("Fayl çox böyükdür (maksimum 4 MB).", 413);

  const ext = cv.name.split(".").pop()?.toLowerCase();
  const type = FILE_TYPES[ext];
  if (!type) return fail("Yalnız PDF və ya DOCX faylı qəbul olunur.");

  const buffer = Buffer.from(await cv.arrayBuffer());
  if (!type.magic.every((byte, i) => buffer[i] === byte)) {
    return fail("Yalnız PDF və ya DOCX faylı qəbul olunur.");
  }
  if (!isValidFile(ext, buffer)) {
    return fail("Fayl qəbul olunmadı. CV-ni sadə PDF və ya DOCX kimi yenidən saxlayıb göndərin.");
  }

  const safeName = name
    .replace(/ə/g, "e")
    .replace(/Ə/g, "E")
    .replace(/ı/g, "i")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w-]+/g, "_")
    .replace(/_+/g, "_")
    .slice(0, 40) || "namizad";
  const rows = [
    ["Vakansiya", vacancy.title],
    ["Ad, soyad", name],
    ["Telefon", phone],
    ["E-poçt", email],
  ];

  const html = `
    <h2 style="margin:0 0 16px;font-family:Arial,sans-serif;color:#561A59">Yeni vakansiya müraciəti</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:6px 16px 6px 0;color:#666">${label}</td><td style="padding:6px 0"><b>${escapeHtml(value)}</b></td></tr>`
        )
        .join("")}
    </table>
    ${message ? `<p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-line;margin-top:16px">${escapeHtml(message)}</p>` : ""}
  `;

  const text = [...rows.map(([label, value]) => `${label}: ${value}`), message && `\n${message}`]
    .filter(Boolean)
    .join("\n");

  try {
    await getTransporter().sendMail({
      from: { name: "Kredit Evi Vakansiya", address: process.env.SMTP_FROM || process.env.SMTP_USER },
      to: process.env.HR_EMAIL,
      replyTo: { name, address: email },
      subject: `Vakansiya müraciəti: ${vacancy.title} - ${name}`,
      text,
      html,
      attachments: [
        {
          filename: `CV_${safeName}.${ext}`,
          content: buffer,
          contentType: type.mime,
        },
      ],
    });
  } catch (error) {
    console.error("Vacancy mail error:", error?.message);
    return fail("Müraciət göndərilmədi. Bir az sonra yenidən cəhd edin.", 500);
  }

  recordHit(ip);
  return NextResponse.json({ ok: true });
}
