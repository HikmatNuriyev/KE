import styles from "./AppBanner.module.scss";
import Button from "@/components/atoms/Button/Button";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from "next/image";
const AppBanner = () => {
  return (
    <section className={styles.appSection}>
      <div className={styles.mainCard}>
        <div className={styles.visualSide}>
          <div className={styles.phoneFrame}>
            <div className={styles.screenInner}>
                 <Image 
        className={styles.logo}
            src="/images/KE1.webp"  
            alt="Kredit Evi Loqo" 
            width={250} 
            height={100} 
            priority 
          />
              <div className={styles.brandLogo}><span></span></div>
              <small style={{color: '#999', fontSize: '10px'}}></small>
            </div>
          </div>
          <div className={styles.glow}></div>
        </div>

        <div className={styles.contentSide}>
        
          <h2>Kredit Evi <span>Hər an yanınızda.</span></h2>
          <p>
            Girovlarınızı idarə etmək, növbəti ödənişləri izləmək və 
            onlayn müraciət etmək indi daha asandır. Tətbiqi yükləyin, vaxtınıza qənaət edin.
          </p>
          
          <div className={styles.storeButtons}>
            <Button variant="primary" className={styles.appBtn}>
              <FaApple /> App Store
            </Button>
            <Button variant="primary" className={styles.appBtn}>
              <FaGooglePlay /> Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBanner;