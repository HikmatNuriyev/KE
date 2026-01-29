import styles from "./Hero.module.scss";
import Calculator from "@/components/molecules/Calculator/Calculator";
import SocialCard from "@/components/molecules/SocialCard/SocialCard";
import Button from "@/components/atoms/Button/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className="container">
        <div className={styles.bentoGrid}>
          
          {/* 1. Böyük Hero Kartı (Main Offer) */}
          <div className={`${styles.bentoItem} ${styles.heroCard}`}>
            <span className="badge">Qızıl Girovlu Kredit</span>
            <h1>Sənin Qızılın, <span>Sənin İmkanın.</span></h1>
            <p>Sürətli rəsmiləşdirmə, aşağı faizlər və komissiyasız nağdlaşdırma.</p>
            <Button variant="primary" size="lg">İndi müraciət et</Button>
          </div>

          {/* 2. Kalkulyator Kartı */}
          <div className={`${styles.bentoItem} ${styles.calcArea}`}>
            {/* <Calculator /> */}
          </div>

          {/* 3. Sosial Şəbəkə Kartı */}
          <div className={`${styles.bentoItem} ${styles.socialArea}`}>
            <SocialCard />
          </div>

          {/* 4. Kiçik Trust/Güvən Kartı */}
          <div className={`${styles.bentoItem} ${styles.trustCard}`}>
            <h3>15+ Dakıqa</h3>
            <p>Sürətli rəsmiləşmə</p>
          </div>

        </div>
      </section>
    </main>
  );
}