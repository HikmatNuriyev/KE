"use client";

export default function GlobalError({ reset }) {
  return (
    <html lang="az">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px 16px",
          boxSizing: "border-box",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          background: "linear-gradient(135deg, #832C87 0%, #561A59 50%, #360838 100%)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 520,
            padding: "48px 24px",
            borderRadius: 28,
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            boxSizing: "border-box",
          }}
        >
          <h1 style={{ margin: 0, fontSize: 28, fontWeight: 800 }}>Nəsə xəta baş verdi</h1>
          <p style={{ margin: "12px 0 0", fontSize: 16, lineHeight: 1.6, opacity: 0.8 }}>
            Sayt hazırda açılmır. Bir neçə dəqiqə sonra yenidən cəhd edin.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                minHeight: 52,
                padding: "0 28px",
                borderRadius: 16,
                border: "none",
                background: "#fff",
                color: "#561A59",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Yenidən cəhd et
            </button>
            <a
              href="/"
              style={{
                minHeight: 52,
                padding: "0 28px",
                borderRadius: 16,
                border: "1px solid rgba(255, 255, 255, 0.4)",
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Ana səhifə
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
