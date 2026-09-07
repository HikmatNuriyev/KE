"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes"; 
import { FaChevronDown, FaMoon, FaSun, FaHeadset } from "react-icons/fa";
import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            className={styles.logo}
            src="/images/KE1.webp"
            alt="Kredit Evi Loqo"
            width={108}
            height={50}
            priority
          />
        </div>

        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>
            Ana səhifə
          </a>

          <div className={styles.dropdown}>
            <div className={styles.dropdownToggle}>
              Xidmətlər <FaChevronDown />
            </div>
            <div className={styles.dropdownMenu}>
              <a href="/qizil-krediti">Qızıl Lombardı</a>
              <a href="/lizing">Lizinq</a>
            </div>
          </div>

          <div className={styles.dropdown}>
            <div className={styles.dropdownToggle}>
              Haqqımızda <FaChevronDown />
            </div>
            <div className={styles.dropdownMenu}>
              <a href="/vakansiya">Vakansiyalar</a>
              <a href="/team">Peşəkar Heyət</a>
              <a href="/filiallar">Filiallarımız</a>
              <a href="/about">Haqqımızda</a>
            </div>
          </div>
        </nav>

        <div className={styles.actions}>
          <div className={styles.hotline}>
            <FaHeadset /> <span>*2200</span>
          </div>

          <div className={styles.controls}>
            <button
              className={styles.themeToggle}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>

            <div className={styles.langSelector}>
              AZ <FaChevronDown />
            </div>
          </div>

          <div className={styles.btnGroup}>
            {/* <button className={styles.paymentBtn}>Ödəniş</button> */}
            <Link
              href="https://www.million.az/services/bank/KreditEvi"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.paymentBtn}
            >
              Ödəniş
            </Link>
            <button className={styles.ctaBtn}>Onlayn Müraciət</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
