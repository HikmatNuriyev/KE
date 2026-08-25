import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import styles from './SocialBanner.module.scss';
import Link from "next/link";
const SocialBanner = () => {
  return (
    <section className={styles.premiumWrapper}>
      <div className={styles.inner}>
        <span className={styles.overline}>BİZİMLƏ QALIN</span>
        <h2 className={styles.title}>Rəqəmsal dünyada <br/> <span>Kredit Evi</span> təcrübəsi</h2>
        <div className={styles.socialLinks}>
  <Link
    href="https://www.facebook.com/krediteviasc/"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.linkItem}
  >
    <div className={styles.iconBox}>
      <FaFacebookF />
    </div>
    <div className={styles.linkText}>
      <span>Facebook</span>
      <small>@kreditevi</small>
    </div>
  </Link>

  <div className={styles.verticalDivider}></div>

  <Link
    href="https://www.instagram.com/kreditevi.az/"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.linkItem}
  >
    <div className={styles.iconBox}>
      <FaInstagram />
    </div>
    <div className={styles.linkText}>
      <span>Instagram</span>
      <small>@kreditevi.az</small>
    </div>
  </Link>
</div>
        {/* <div className={styles.socialLinks}>
          <a href="https://www.facebook.com/krediteviasc/" className={styles.linkItem}>
            <div className={styles.iconBox}><FaFacebookF /></div>
            <div className={styles.linkText}>
              <span>Facebook</span>
              <small>@kreditevi</small>
            </div>
          </a>

          <div className={styles.verticalDivider}></div>

          <a href="https://www.instagram.com/kreditevi.az/" className={styles.linkItem}>
            <div className={styles.iconBox}><FaInstagram /></div>
            <div className={styles.linkText}>
              <span>Instagram</span>
              <small>@kreditevi.az</small>
            </div>
          </a>
        </div> */}
      </div>
      {/* Arxa fondakı premium işıq effektləri */}
      <div className={styles.ambientGlow}></div>
    </section>
  );
};

export default SocialBanner;