import styles from "./AppBanner.module.scss";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const AppBanner = () => {
  return (
    <section className={styles.appSection}>
      <div className={`${styles.mainCard} container`}>
        <div className={styles.visualSide}>
          {/* Neon işıqlı telefon mühiti */}
          <div className={styles.neonStage}>
            <div className={styles.phoneFrame}>
               <img src="/phone-screen.png" alt="App Screen" />
            </div>
          </div>
        </div>

        <div className={styles.contentSide}>
          <h2>XalqOnline mobil tətbiqi</h2>
          <p>
            Funksional və rahat XalqOnline sistemi ilə hesablarınıza onlayn
            nəzarət edə və müxtəlif bank əməliyyatlarınızı məsafədən icra edə bilərsiniz.
          </p>
          
          <div className={styles.storeButtons}>
            <button className={styles.storeBtn}>
              <FaApple /> <span>App Store</span>
            </button>
            <button className={styles.storeBtn}>
              <FaGooglePlay /> <span>Google Play</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBanner;