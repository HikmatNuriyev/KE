"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { HiOutlineX, HiOutlineDocumentText, HiOutlineCheckCircle } from "react-icons/hi";
import styles from "./VacancyApply.module.scss";

const MAX_FILE_SIZE = 4 * 1024 * 1024;
const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const TURNSTILE_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

let turnstileLoader;
function loadTurnstile() {
  if (typeof window === "undefined") return Promise.reject();
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (!turnstileLoader) {
    turnstileLoader = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = TURNSTILE_SRC;
      script.async = true;
      script.onload = () => resolve(window.turnstile);
      script.onerror = () => {
        turnstileLoader = null;
        reject();
      };
      document.head.appendChild(script);
    });
  }
  return turnstileLoader;
}

const VacancyApply = ({ job, className }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");
  const startedAt = useRef(0);
  const captchaRef = useRef(null);
  const widgetId = useRef(null);

  useEffect(() => {
    if (!open) return;
    startedAt.current = Date.now();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open || status === "success" || !SITE_KEY) return;
    let cancelled = false;
    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !captchaRef.current || widgetId.current !== null) return;
        widgetId.current = turnstile.render(captchaRef.current, {
          sitekey: SITE_KEY,
          language: "az",
          theme: document.documentElement.classList.contains("dark") ? "dark" : "light",
          size: "flexible",
        });
      })
      .catch(() => setError("Təhlükəsizlik yoxlaması yüklənmədi. Səhifəni yeniləyin."));
    return () => {
      cancelled = true;
      if (widgetId.current !== null) {
        window.turnstile?.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, [open, status]);

  const close = () => {
    setOpen(false);
    if (status === "success") {
      setStatus("idle");
      setFileName("");
    }
  };

  const onFile = (e) => {
    const file = e.target.files?.[0];
    setError("");
    if (!file) return setFileName("");
    if (!/\.(pdf|docx)$/i.test(file.name)) {
      e.target.value = "";
      setFileName("");
      return setError("Yalnız PDF və ya DOCX faylı seçin.");
    }
    if (file.size > MAX_FILE_SIZE) {
      e.target.value = "";
      setFileName("");
      return setError("Fayl 4 MB-dan böyük olmamalıdır.");
    }
    setFileName(file.name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setError("");
    setStatus("sending");

    const data = new FormData(e.currentTarget);
    data.set("vacancyId", job.id);
    data.set("startedAt", startedAt.current);

    if (SITE_KEY && !data.get("cf-turnstile-response")) {
      setStatus("idle");
      return setError("Təhlükəsizlik yoxlamasını tamamlayın.");
    }

    try {
      const res = await fetch("/api/vakansiya", { method: "POST", body: data });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.message || "Müraciət göndərilmədi.");
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("idle");
      if (widgetId.current !== null) window.turnstile?.reset(widgetId.current);
    }
  };

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        Müraciət et
      </button>

      {open &&
        createPortal(
          <div className={styles.overlay} onMouseDown={(e) => e.target === e.currentTarget && close()}>
            <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby={`apply-${job.id}`}>
              <button type="button" className={styles.closeBtn} onClick={close} aria-label="Bağla">
                <HiOutlineX />
              </button>

              {status === "success" ? (
                <div className={styles.success}>
                  <HiOutlineCheckCircle />
                  <h3>Müraciətiniz göndərildi</h3>
          
                  <button type="button" className={styles.submitBtn} onClick={close}>
                    Bağla
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate={false}>
                  <span className={styles.tag}>Müraciət</span>
                  <h3 id={`apply-${job.id}`}>{job.title}</h3>

                  <div className={styles.fields}>
                    <label>
                      <span>Ad, soyad</span>
                      <input name="name" required minLength={3} maxLength={80} autoComplete="name" />
                    </label>
                    <label>
                      <span>Telefon</span>
                      <input
                        name="phone"
                        type="tel"
                        required
                        maxLength={20}
                      pattern="\+?[0-9 \(\)\-]{7,20}"
                        placeholder="+994 50 000 00 00"
                        autoComplete="tel"
                        inputMode="tel"
                      />
                    </label>
                    <label className={styles.full}>
                      <span>E-poçt</span>
                      <input name="email" type="email" required maxLength={120} autoComplete="email" inputMode="email" />
                    </label>
                    <label className={styles.full}>
                      <span>Qısa məlumat (istəyə bağlı)</span>
                      <textarea name="message" rows={3} maxLength={1000} />
                    </label>

                    <label className={`${styles.file} ${styles.full}`}>
                      <input
                        name="cv"
                        type="file"
                        required
                        accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={onFile}
                      />
                      <HiOutlineDocumentText />
                      <span>{fileName || "CV yüklə (PDF və ya DOCX, maks. 4 MB)"}</span>
                    </label>

                    <input
                      className={styles.hp}
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />
                  </div>

                  {SITE_KEY && <div ref={captchaRef} className={styles.captcha} />}

                  {error && <p className={styles.error} role="alert">{error}</p>}

                  <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
                    {status === "sending" ? "Göndərilir..." : "Göndər"}
                  </button>
                </form>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default VacancyApply;
