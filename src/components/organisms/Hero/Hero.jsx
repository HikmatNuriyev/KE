import styles from "./Hero.module.scss";
import SocialCard from "@/components/molecules/SocialCard/SocialCard";
import Button from "@/components/atoms/Button/Button";
import CurrencyCard from "@/components/molecules/CurrencyCard/CurrencyCard";
import { MdFlashOn } from "react-icons/md";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className="container">
        <div className={styles.bentoGrid}>
          <div className={`${styles.bentoItem} ${styles.heroCard}`}>
            <span className="badge">Qızıl Girovlu Kredit</span>
            <h1>
              Sənin Qızılın, <span>Sənin İmkanın.</span>
            </h1>
            <p>
              Sürətli rəsmiləşdirmə, aşağı faizlər və komissiyasız nağdlaşdırma.
            </p>
            <Button variant="primary" size="lg">
              İndi müraciət et
            </Button>
          </div>

          <div className={`${styles.bentoItem} ${styles.calcArea}`}>
            <CurrencyCard />
          </div>

          <div className={`${styles.bentoItem} ${styles.socialArea}`}>
            <SocialCard />
          </div>

          <div className={`${styles.bentoItem} ${styles.trustCard}`}>
            <div className={styles.iconTag}>
              <MdFlashOn />
            </div>

            <div className={styles.cardContent}>
              <h3>15+ Dəqiqə</h3>
              <p>Sürətli rəsmiləşmə</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
