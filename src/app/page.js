import CreditCalculator from "@/components/molecules/Calculator/Calculator";
import AppBanner from "@/components/organisms/AppBanner/AppBanner";
import Hero from "@/components/organisms/Hero/Hero";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className={styles.mainWrapper}>
        <div className={styles.contentPadding}>
          <AppBanner />
          <CreditCalculator />
        </div>
      </div>
    </main>
  );
}
