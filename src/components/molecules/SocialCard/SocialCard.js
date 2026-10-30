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
        
        <a
          href="https://www.instagram.com/kreditevi.az/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.item}
        >
          <div className={styles.mainInfo}>
            <div className={styles.iconBox}><FaInstagram /></div>
            <span>Instagram</span>
          </div>
          <FaArrowRight className={styles.arrow} />
        </a>

  
        <a
          href="https://www.facebook.com/krediteviasc"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.item}
        >
          <div className={styles.mainInfo}>
            <div className={styles.iconBox}><FaFacebookF /></div>
            <span>Facebook</span>
          </div>
          <FaArrowRight className={styles.arrow} />
        </a>
      </div>

      
      <div className={styles.decorCircle}></div>
    </div>
  );
};
export default SocialCard