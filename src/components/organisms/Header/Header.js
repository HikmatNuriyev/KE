"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import Button from "@/components/atoms/Button/Button";
import Image from "next/image";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <div className={styles.logo}>
        <Image 
        className={styles.logo}
            src="/images/KElogo.png"  
            alt="Kredit Evi Loqo" 
            width={100} 
            height={50} 
            priority 
          />
        </div>

        {/* Masaüstü Menyu */}
        <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}>
          <li><Link href="/" onClick={() => setIsOpen(false)}>Ana Səhifə</Link></li>
          <li><Link href="/kreditler" onClick={() => setIsOpen(false)}>Kreditlər</Link></li>
          <li><Link href="/filiallar" onClick={() => setIsOpen(false)}>Filiallar</Link></li>
          <li><Link href="/elaqe" onClick={() => setIsOpen(false)}>Əlaqə</Link></li>
          
          {/* Mobil daxilində görünən hərəkət düymələri */}
          <div className={styles.mobileActions}>
            <Button variant="outline" size="md">Giriş</Button>
          </div>
        </ul>

        <div className={styles.actions}>
          <Button variant="ghost" className={styles.langBtn}>AZ</Button>
          <Button variant="primary" size="md" className={styles.ctaBtn}>Müraciət et</Button>
          
          {/* Hamburger Düyməsi */}
          <button className={`${styles.hamburger} ${isOpen ? styles.active : ""}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      
      {/* Mobildə arxa fonun qaralması (Overlay) */}
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
    </header>
  );
};

export default Header;