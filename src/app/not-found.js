import Link from "next/link";
import { HiOutlineHome, HiOutlineLocationMarker } from "react-icons/hi";
import styles from "./ErrorPage.module.scss";

export const metadata = {
  title: "Səhifə tapılmadı",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className={styles.glow} />
      <div className={styles.card}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Səhifə tapılmadı</h1>
        <p className={styles.text}>
          Axtardığınız səhifə silinib, ünvanı dəyişib və ya heç vaxt mövcud olmayıb.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.primary}>
            <HiOutlineHome /> Ana səhifə
          </Link>
          <Link href="/filiallar" className={styles.secondary}>
            <HiOutlineLocationMarker /> Filiallar
          </Link>
        </div>

      </div>
    </section>
  );
}
