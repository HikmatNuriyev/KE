import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import styles from './SocialCard.module.scss';

const SocialCard = () => {
  return (
    <div className={styles.socialGrid}>
      
      <a href="https://instagram.com" target="_blank" className={`${styles.card} ${styles.instagram}`}>
        <div className={styles.iconWrapper}>
          <FaInstagram />
        </div>
        <div className={styles.text}>
          <h4>Instagram</h4>
          <p>Bizi izləyin</p>
        </div>
      </a>

     
      <a href="https://facebook.com" target="_blank" className={`${styles.card} ${styles.facebook}`}>
        <div className={styles.iconWrapper}>
          <FaFacebookF />
        </div>
        <div className={styles.text}>
          <h4>Facebook</h4>
          <p>Xəbərlər</p>
        </div>
      </a>
    </div>
  );
};

export default SocialCard;