const net = require("net");
const tls = require("tls");

const host = process.argv[2];
const port = Number(process.argv[3] || 587);
if (!host) {
  console.log("İstifadə: node smtp-sertifikat.js mail.server.az 587");
  process.exit(1);
}

function show(socket) {
  let cert = socket.getPeerCertificate(true);
  console.log("Kompüterin saatı:", new Date().toString());
  console.log("Bağlantı:", socket.authorized ? "ETİBARLI" : "ETİBARSIZ - " + socket.authorizationError);
  const seen = new Set();
  let i = 0;
  while (cert && cert.fingerprint256 && !seen.has(cert.fingerprint256)) {
    seen.add(cert.fingerprint256);
    console.log(`\n[${i++}] ${cert.subject?.CN || "-"}`);
    console.log("   Verən:   ", cert.issuer?.CN || cert.issuer?.O || "-");
    console.log("   Başlayır:", cert.valid_from);
    console.log("   Bitir:   ", cert.valid_to, new Date(cert.valid_to) < new Date() ? "  <-- VAXTI KEÇİB" : "");
    if (cert.subjectaltname) console.log("   Adlar:   ", cert.subjectaltname);
    cert = cert.issuerCertificate;
  }
  socket.end();
}

const opts = { host, servername: host, rejectUnauthorized: false };

if (port === 465) {
  const s = tls.connect({ ...opts, port }, () => show(s));
  s.on("error", (e) => console.log("Xəta:", e.message));
} else {
  const raw = net.connect(port, host);
  let step = 0;
  raw.setEncoding("utf8");
  raw.on("data", (d) => {
    if (step === 0 && /^220/m.test(d)) { step = 1; raw.write("EHLO test\r\n"); }
    else if (step === 1 && /^250 /m.test(d)) { step = 2; raw.write("STARTTLS\r\n"); }
    else if (step === 2 && /^220/m.test(d)) {
      step = 3;
      raw.removeAllListeners("data");
      const s = tls.connect({ ...opts, socket: raw }, () => show(s));
      s.on("error", (e) => console.log("Xəta:", e.message));
    } else if (step === 2 && /^5/m.test(d)) { console.log("Server STARTTLS dəstəkləmir:", d.trim()); raw.end(); }
  });
  raw.on("error", (e) => console.log("Xəta:", e.message));
}
