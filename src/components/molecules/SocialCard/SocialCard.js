import { FaInstagram, FaFacebookF, FaArrowRight } from 'react-icons/fa';
import styles from './SocialCard.module.scss';

const SocialCard = () => {
  return (
    <div className={styles.socialContainer}>
      <div className={styles.header}>
        <h3>Sosial Media</h3>
        <p>Bizi izləyərək ən son kampaniyalardan xəbərdar olun.</p>
      </div>

      <div className={styles.platforms}>
        <a href="#" className={styles.item}>
          <div className={styles.mainInfo}>
            <div className={styles.iconBox}><FaInstagram /></div>
            <span>Instagram</span>
          </div>
          <FaArrowRight className={styles.arrow} />
        </a>

        <a href="#" className={styles.item}>
          <div className={styles.mainInfo}>
            <div className={styles.iconBox}><FaFacebookF /></div>
            <span>Facebook</span>
          </div>
          <FaArrowRight className={styles.arrow} />
        </a>
      </div>

      {/* Boşluğu dolduran lüks həndəsi dekor */}
      <div className={styles.decorCircle}></div>
    </div>
  );
};
export default SocialCard