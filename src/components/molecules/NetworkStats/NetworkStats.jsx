import styles from './NetworkStats.module.scss';
import { FaMapMarkedAlt, FaHandshake, FaUserCheck, FaAward } from 'react-icons/fa';

const NetworkStats = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Geniş Şəbəkə, <span>Yüksək Etimad</span></h2>
          <p>Azərbaycanın dörd bir yanında xidmətinizdəyik.</p>
        </div>

        <div className={styles.grid}>
          {/* Filiallar */}
          <div className={styles.statCard}>
            <div className={styles.icon}><FaMapMarkedAlt /></div>
            <div className={styles.text}>
              <h3>34</h3>
              <span>Xidmət Filialı</span>
            </div>
          </div>

          {/* Tərəfdaşlar */}
          <div className={styles.statCard}>
            <div className={styles.icon}><FaHandshake /></div>
            <div className={styles.text}>
              <h3>30</h3>
              <span>Güclü Tərəfdaş</span>
            </div>
          </div>

          {/* Müştəri Məmnuniyyəti */}
          <div className={styles.statCard}>
            <div className={styles.icon}><FaUserCheck /></div>
            <div className={styles.text}>
              <h3>50K+</h3>
              <span>Razı Müştəri</span>
            </div>
          </div>

          {/* Təcrübə */}
          <div className={styles.statCard}>
            <div className={styles.icon}><FaAward /></div>
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
export default NetworkStats