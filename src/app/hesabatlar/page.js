import { FaRegFilePdf, FaRegEye, FaDownload } from "react-icons/fa";
import { documents } from "@/data/documents";
import styles from "./Hesabatlar.module.scss";

export const metadata = {
  title: "Hesabatlar və bildirişlər",
  description: "\"Kredit Evi\" ASC-nin maliyyə hesabatları və səhmdarlara bildirişləri.",
};

export default function HesabatlarPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          
        </div>

        <ul className={styles.list}>
          {documents.map((doc) => (
            <li key={doc.file} className={styles.card}>
              <span className={styles.icon}>
                <FaRegFilePdf />
              </span>
              <div className={styles.info}>
                <h3>{doc.title}</h3>
                <span className={styles.date}>{doc.date}</span>
              </div>
              <div className={styles.actions}>
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.view}
                >
                  <FaRegEye /> Bax
                </a>
                <a href={doc.file} download className={styles.download}>
                  <FaDownload /> Yüklə
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
