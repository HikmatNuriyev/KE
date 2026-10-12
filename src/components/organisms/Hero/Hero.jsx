import styles from "./Hero.module.scss";
import CurrencyCard from "@/components/molecules/CurrencyCard/CurrencyCard";
import HeroSlider from "./HeroSlider";
import { MdFlashOn } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaArrowRight } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className="container">
        <div className={styles.bentoGrid}>
          <div className={`${styles.bentoItem} ${styles.heroCard}`}>
            <HeroSlider />
          </div>

          <div className={`${styles.bentoItem} ${styles.calcArea}`}>
            <CurrencyCard />
          </div>

          <div
            className={`${styles.bentoItem} ${styles.socialArea} ${styles.socialGlass}`}
          >
            <div className={styles.socialHead}>
              <h3>Bizi izləyin</h3>
              <p>Kampaniyalar və yeniliklər ilk sizdə</p>
            </div>

            <div className={styles.socialLinks}>
              <a href="#" aria-label="Instagram" className={styles.insta}>
                <FaInstagram />
                <span>Instagram</span>
              </a>
              <a href="#" aria-label="Facebook" className={styles.fb}>
                <FaFacebookF />
                <span>Facebook</span>
              </a>
            </div>

            <a href="tel:*2200" className={styles.callRow}>
              <LuPhone />
              <span>
                <small>Çağrı mərkəzi</small>
                *2200
              </span>
              <FaArrowRight className={styles.callArrow} />
            </a>
          </div>

          <div
            className={`${styles.bentoItem} ${styles.trustCard} ${styles.trustGradient}`}
          >
            <div className={styles.iconTag}>
              <MdFlashOn />
            </div>

            <div className={styles.cardContent}>
              <h3>
                15<span>+</span>
                <small>dəqiqə</small>
              </h3>
              <p>Sürətli rəsmiləşmə</p>
            </div>

            <ul className={styles.trustList}>
              <li>Komissiyasız</li>
              <li>Aşağı faiz</li>
              <li>Onlayn müraciət</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
