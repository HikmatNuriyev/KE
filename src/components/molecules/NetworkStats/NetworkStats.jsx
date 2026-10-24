import Link from "next/link";
import styles from "./NetworkStats.module.scss";
// import branches from "../../../../public/data/branches.json";
import { getBranches } from "@/lib/branches";
import {
  FaMapMarkedAlt,
  FaHandshake,
  FaUserCheck,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";

// const NetworkStats = () => {
const NetworkStats = async () => {
  const branches = await getBranches();
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            Geniş Şəbəkə, <span>Yüksək Etimad</span>
          </h2>
          <p>Azərbaycanın dörd bir yanında xidmətinizdəyik.</p>
        </div>

        <div className={styles.grid}>
          {/* Filiallar — canlı say, /filiallar səhifəsinə keçid */}
          <Link href="/filiallar" className={`${styles.statCard} ${styles.linked}`}>
            <div className={styles.icon}>
              <FaMapMarkedAlt />
            </div>
            <div className={styles.text}>
              <h3>{branches.length}</h3>
              <span>Filial</span>
            </div>
            <span className={styles.linkHint}>
              Xəritədə bax <FaArrowRight />
            </span>
          </Link>

          {/* Tərəfdaşlar */}
          <div className={styles.statCard}>
            <div className={styles.icon}>
              <FaHandshake />
            </div>
            <div className={styles.text}>
              <h3>30</h3>
              <span>Güclü Tərəfdaş</span>
            </div>
          </div>

          {/* Müştəri Məmnuniyyəti */}
          <div className={styles.statCard}>
            <div className={styles.icon}>
              <FaUserCheck />
            </div>
            <div className={styles.text}>
              <h3>50K+</h3>
              <span>Razı Müştəri</span>
            </div>
          </div>

          {/* Təcrübə */}
          <div className={styles.statCard}>
            <div className={styles.icon}>
              <FaAward />
            </div>
            <div className={styles.text}>
              <h3>10 İllik</h3>
              <span>Peşəkar Təcrübə</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NetworkStats;
