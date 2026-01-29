import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import styles from './SocialBanner.module.scss';

const SocialBanner = () => {
  return (
    <section className={styles.premiumWrapper}>
      <div className={styles.inner}>
        <span className={styles.overline}>BİZİMLƏ QALIN</span>
        <h2 className={styles.title}>Rəqəmsal dünyada <br/> <span>Kredit Evi</span> təcrübəsi</h2>
        
        <div className={styles.socialLinks}>
          <a href="#" className={styles.linkItem}>
            <div className={styles.iconBox}><FaFacebookF /></div>
            <div className={styles.linkText}>
              <span>Facebook</span>
              <small>@kreditevi</small>
            </div>
          </a>

          <div className={styles.verticalDivider}></div>

          <a href="#" className={styles.linkItem}>
            <div className={styles.iconBox}><FaInstagram /></div>
            <div className={styles.linkText}>
              <span>Instagram</span>
              <small>@kreditevi.az</small>
            </div>
          </a>
        </div>
      </div>
      {/* Arxa fondakı premium işıq effektləri */}
      <div className={styles.ambientGlow}></div>
    </section>
  );
};

export default SocialBanner;