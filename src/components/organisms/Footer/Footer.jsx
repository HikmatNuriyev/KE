

import NextImage from 'next/image';
import styles from './Footer.module.scss';
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import { FaApple, FaGooglePlay } from 'react-icons/fa';
import appImage from '../../../../public/images/footer-app.webp';

const appStoreUrl = "https://apps.apple.com/az/app/kredit-evi/id1611922467";
const googlePlayUrl = "https://play.google.com/store/apps/details?id=az.kreditEvi.mobile&hl=az";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
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
              35 filial və 10 illik təcrübə ilə Azərbaycanın <br />
              maliyyə bazarında şəffaf xidmət.
            </p>

            <div className={styles.contact}>
              <div className={styles.hotline}>
                <span>Qaynar xətt</span>
                <a href="tel:*2200">*2200</a>
              </div>
              <div className={styles.socials}>
                {/* <a href="#" aria-label="Facebook"><FaFacebookF /></a> */}
                <a href="https://www.facebook.com/krediteviasc" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                {/* <a href="#" aria-label="Instagram"><FaInstagram /></a> */}
                <a href="https://www.instagram.com/kreditevi.az/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                {/* <a href="#" aria-label="Linkedin"><FaLinkedinIn /></a> */}
                <a href="https://www.linkedin.com/company/kredit-evi-asc/posts/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin"><FaLinkedinIn /></a>
                {/* <a href="#" aria-label="WhatsApp" className={styles.whatsapp}><FaWhatsapp /></a> */}
              </div>
            </div>
          </div>

        

          <div className={styles.appPromo}>
            <div className={styles.appText}>
              <h3>Kredit Evi</h3>
              <p>Hər an yanınızda.</p>

              <div className={styles.appStores}>
                {/* <a href="#" className={styles.storeBtn}> */}
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.storeBtn}
                >
                  <FaApple /> App Store
                </a>
                {/* <a href="#" className={styles.storeBtn}> */}
                <a
                  href={googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.storeBtn}
                >
                  <FaGooglePlay /> Google Play
                </a>
              </div>
            </div>

            <NextImage
              src={appImage}
              alt="Kredit Evi mobil tətbiqi"
              className={styles.appPhone}
              sizes="(max-width: 768px) 60vw, 320px"
            />
          </div>
        </div>

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
            {/* <h4>Dəstək</h4>
            <a href="#">Tez-tez verilən suallar</a>
            <a href="#">Məxfilik siyasəti</a>
            <a href="#">Əlaqə</a> */}
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>© {currentYear} Kredit Evi ASC. Bütün hüquqlar qorunur.</p>
          <div className={styles.studio}>Designed & Developed by Hikmat Nuriyev</div>
        </div>
      </div>
      <script src="https://cdn.soft10.io/widget.js" data-customer-id="lc_602a0e522abaef6326752818907a10ad" data-language="az" defer></script>
    </footer>
  );
};

export default Footer;
