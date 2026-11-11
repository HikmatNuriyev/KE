"use client";

import { useEffect } from "react";
import Link from "next/link";
import { HiOutlineRefresh, HiOutlineHome, HiOutlineExclamation } from "react-icons/hi";
import styles from "./ErrorPage.module.scss";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className={styles.wrap}>
      <div className={styles.glow} />
      <div className={styles.card}>
        <div className={styles.icon}>
          <HiOutlineExclamation />
        </div>
        <h1 className={styles.title}>Nəsə xəta baş verdi</h1>
        <p className={styles.text}>
          Səhifəni yükləmək mümkün olmadı. Bir az sonra yenidən cəhd edin və ya ana səhifəyə qayıdın.
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={() => reset()} className={styles.primary}>
            <HiOutlineRefresh /> Yenidən cəhd et
          </button>
          <Link href="/" className={styles.secondary}>
            <HiOutlineHome /> Ana səhifə
          </Link>
        </div>
      </div>
    </section>
  );
}
