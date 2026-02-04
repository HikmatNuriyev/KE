import NextImage from 'next/image';
import styles from './Footer.module.scss';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          
          {/* LOGO BLOCK */}
          <div className={styles.brand}>
            <NextImage 
              src="/images/KE1.webp"  
              alt="Kredit Evi Loqo" 
              width={115} 
              height={50} 
              priority 
              className={styles.footerLogo}
            />
            <p className={styles.description}>
              34 filial və 10 illik təcrübə ilə Azərbaycanın <br /> 
              maliyyə bazarında şəffaf xidmət.
            </p>
          </div>

          {/* LINKS GRID */}
          <div className={styles.navLinks}>
            <div className={styles.column}>
              <h4>Xidmətlər</h4>
              <a href="#">Qızıl Lombardi</a>
              <a href="#">Lizinq</a>
              <a href="#">Kalkulyator</a>
            </div>
            
            <div className={styles.column}>
              <h4>Şirkət</h4>
              <a href="#">Haqqımızda</a>
              <a href="#">Filiallar</a>
              <a href="#">Vakansiyalar</a>
            </div>

            <div className={styles.column}>
              <h4>Dəstək</h4>
              <a href="#">Tez-tez verilən suallar</a>
              <a href="#">Məxfilik siyasəti</a>
              <a href="#">Əlaqə</a>
            </div>
          </div>

          {/* CONTACT & CTA */}
          <div className={styles.contact}>
            <div className={styles.hotline}>
              <span>Qaynar xətt</span>
              <a href="tel:*2200">*2200</a>
            </div>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Linkedin"><FaLinkedinIn /></a>
              <a href="#" className={styles.whatsapp}><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {currentYear} Kredit Evi ASC. Bütün hüquqlar qorunur.</p>
          <div className={styles.studio}>Site by Nuriyev Hikmat</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;