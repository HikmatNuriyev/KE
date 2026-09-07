import CreditCalculator from "@/components/molecules/Calculator/Calculator";
import NetworkStats from "@/components/molecules/NetworkStats/NetworkStats";
import AppBanner from "@/components/organisms/AppBanner/AppBanner";
import Hero from "@/components/organisms/Hero/Hero";
import Footer from "@/components/organisms/Footer/Footer";
import NewsSection from "@/components/molecules/NewsSection/NewsSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className={styles.mainWrapper}>
        <div className={styles.contentPadding}>
          <AppBanner />
          <CreditCalculator />
          <NetworkStats />
          <NewsSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
