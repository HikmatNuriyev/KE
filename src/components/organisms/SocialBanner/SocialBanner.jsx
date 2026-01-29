import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import styles from './SocialBanner.module.scss';

const SocialBanner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className="container">
        <div className={styles.bannerWrapper}>
          <div className={styles.textSide}>
            <h2>Bizi hər yerdə izləyin</h2>
            <p>Kampaniyalar və ən son yeniliklərdən anında xəbərdar olmaq üçün icmamıza qoşulun.</p>
          </div>
          
          <div className={styles.socialLinks}>
            <a href="#" className={`${styles.socialBox} ${styles.instagram}`}>
              <FaInstagram className={styles.icon} />
              <span>Instagram</span>
            </a>
            <a href="#" className={`${styles.socialBox} ${styles.facebook}`}>
              <FaFacebookF className={styles.icon} />
              <span>Facebook</span>
            </a>
            <a href="#" className={`${styles.socialBox} ${styles.telegram}`}>
              <FaTelegramPlane className={styles.icon} />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialBanner;