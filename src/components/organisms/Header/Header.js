
"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaChevronDown, FaMoon, FaSun, FaHeadset } from "react-icons/fa";
import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";

const services = [
  { href: "/qizil-krediti", label: "Qızıl Lombardı" },
  { href: "/lizing", label: "Lizinq" },
];

const about = [
  { href: "/vakansiya", label: "Vakansiyalar" },
  { href: "/team", label: "Rəhbərlik" },
  { href: "/filiallar", label: "Filiallarımız" },
  { href: "/about", label: "Haqqımızda" },
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // aşağı sürüşdürəndə şüşə bir az qatılaşır
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // menyu açıq olanda səhifə sürüşməsin, Esc ilə bağlansın
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth > 1200 && setMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  if (!mounted) return null;

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  const toggleGroup = (name) => setOpenGroup(openGroup === name ? null : name);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
          menuOpen ? styles.menuIsOpen : ""
        }`}
      >
        <div className={styles.container}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image
              className={styles.logo}
              src="/images/KE1.webp"
              alt="Kredit Evi Loqo"
              width={108}
              height={50}
              priority
            />
          </Link>

          <nav className={styles.nav}>
            <a href="/" className={styles.navLink}>
              Ana səhifə
            </a>

            <div className={styles.dropdown}>
              <div className={styles.dropdownToggle}>
                Xidmətlər <FaChevronDown />
              </div>
              <div className={styles.dropdownMenu}>
                {services.map((l) => (
                  <a key={l.href} href={l.href}>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.dropdown}>
              <div className={styles.dropdownToggle}>
                Haqqımızda <FaChevronDown />
              </div>
              <div className={styles.dropdownMenu}>
                {about.map((l) => (
                  <a key={l.href} href={l.href}>
                    {l.label}
                  </a>
                ))}
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

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            aria-label={menuOpen ? "Menyunu bağla" : "Menyunu aç"}
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobil menyu */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayShow : ""}`}
        onClick={closeMenu}
      />

      <div
        id="mobileMenu"
        className={`${styles.mobilePanel} ${menuOpen ? styles.panelShow : ""}`}
        aria-hidden={!menuOpen}
      >
        <a href="/" className={styles.mLink} onClick={closeMenu}>
          Ana səhifə
        </a>

        <div className={styles.mGroup}>
          <button
            className={`${styles.mLink} ${openGroup === "services" ? styles.mActive : ""}`}
            onClick={() => toggleGroup("services")}
            aria-expanded={openGroup === "services"}
          >
            Xidmətlər <FaChevronDown />
          </button>
          <div className={`${styles.mSub} ${openGroup === "services" ? styles.mSubOpen : ""}`}>
            <div>
              {services.map((l) => (
                <a key={l.href} href={l.href} onClick={closeMenu}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.mGroup}>
          <button
            className={`${styles.mLink} ${openGroup === "about" ? styles.mActive : ""}`}
            onClick={() => toggleGroup("about")}
            aria-expanded={openGroup === "about"}
          >
            Haqqımızda <FaChevronDown />
          </button>
          <div className={`${styles.mSub} ${openGroup === "about" ? styles.mSubOpen : ""}`}>
            <div>
              {about.map((l) => (
                <a key={l.href} href={l.href} onClick={closeMenu}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.mFooter}>
          <a href="tel:*2200" className={styles.mHotline}>
            <FaHeadset /> <span>*2200</span>
          </a>

          <div className={styles.mControls}>
            <button
              className={styles.themeToggle}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Tema"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
            <div className={styles.langSelector}>
              AZ <FaChevronDown />
            </div>
          </div>
        </div>

        <div className={styles.mButtons}>
          <Link
            href="https://www.million.az/services/bank/KreditEvi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.paymentBtn}
            onClick={closeMenu}
          >
            Ödəniş
          </Link>
          <button className={styles.ctaBtn} onClick={closeMenu}>
            Onlayn Müraciət
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
