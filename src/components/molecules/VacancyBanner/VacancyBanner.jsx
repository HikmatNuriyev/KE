import styles from './VacancyBanner.module.scss';
import Image from 'next/image';
const VacancyBanner = () => {
  return (
    <section className={styles.vacancySection}>
      <div className={styles.gridWrapper}>
        
        {/* SOL TƏRƏF - Sənin bəyəndiyin təmiz yazılar */}
        <div className={styles.textContent}>
          <span className={styles.tag}>Karyera imkanları</span>
          <h2>Komandamızda Sənin üçün də <span>yer var!</span></h2>
          <p>Bizimlə birlikdə maliyyə sektorunda innovativ həllər yaratmağa və peşəkar inkişafa hazır ol.</p>
          
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Müraciət et</button>
            <span className={styles.infoText}>Aktiv vakansiyalar: 5+</span>
          </div>
        </div>

        {/* SAĞ TƏRƏF - Lüks çərçivəli şəkil */}
        <div className={styles.visualSide}>
          <div className={styles.imageFrame}>
             <div className={styles.mainImage}>
                      <Image 
        className={styles.logo}
            src="/images/career.webp"  
            alt="Kredit Evi Loqo" 
            width={500} 
            height={500} 
            priority 
          />
                {/* Bura real ofis/komanda şəkli gələcək */}
             </div>
             {/* Şəklin üzərinə çıxan kiçik bir "floating" element */}
             <div className={styles.miniCard}>
                <div className={styles.pulseDot}></div>
                <span>Lorem Ipsom DOLER</span>
             </div>
          </div>
        </div>

      </div>
      {/* Arxa fondakı zərif işıq ləkəsi */}
      <div className={styles.bgBlur}></div>
    </section>
  );
};
export default VacancyBanner