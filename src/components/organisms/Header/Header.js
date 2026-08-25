
// "use client"
//  import React, { useState } from 'react';
// import { FaChevronDown, FaMoon, FaSun, FaHeadset } from 'react-icons/fa';
// import styles from './header.module.scss';
// import Image from 'next/image';
// const Header = () => {
//   const [isDark, setIsDark] = useState(false);

//   return (
//     <header className={styles.header}>
//       <div className={styles.container}>
//         {/* LOGO */}
//         <div className={styles.logo}>
//            <Image 
//         className={styles.logo}
//             src="/images/KE1.webp"  
//             alt="Kredit Evi Loqo" 
//             width={108} 
//             height={50} 
//             priority 
//           />
//         </div>

//         {/* NAVIGATION */}
//         <nav className={styles.nav}>
//           <a href="/" className={styles.navLink}>Ana səhifə</a>
          
//           <div className={styles.dropdown}>
//             <div className={styles.dropdownToggle}>
//               Xidmətlər <FaChevronDown />
//             </div>
//             <div className={styles.dropdownMenu}>
//               <a href="#">Qızıl Lombardi</a>
//               <a href="#">Lizinq</a>
//             </div>
//           </div>

//           <div className={styles.dropdown}>
//             <div className={styles.dropdownToggle}>
//               Haqqımızda <FaChevronDown />
//             </div>
//             <div className={styles.dropdownMenu}>
//               <a href="#">Vakansiyalar</a>
//               <a href="#">Peşəkar Heyət</a>
//               <a href="/filiallar">Filiallarımız</a>
//             </div>
//           </div>
//         </nav>

//         {/* ACTIONS */}
//         <div className={styles.actions}>
//           <div className={styles.hotline}>
//             <FaHeadset /> <span>*2200</span>
//           </div>

//           <div className={styles.controls}>
//             <button className={styles.themeToggle} onClick={() => setIsDark(!isDark)}>
//               {isDark ? <FaSun /> : <FaMoon />}
//             </button>
//             <div className={styles.langSelector}>
//               AZ <FaChevronDown />
//             </div>
//           </div>

//           <div className={styles.btnGroup}>
//             <button className={styles.paymentBtn}>Ödəniş</button>
//             <button className={styles.ctaBtn}>Onlayn Müraciət</button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
"use client"
import React, { useEffect, useState } from 'react';
import { useTheme } from "next-themes"; // Bunu əlavə etdik
import { FaChevronDown, FaMoon, FaSun, FaHeadset } from 'react-icons/fa';
import styles from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration xətasının qarşısını almaq üçün (Next.js üçün vacibdir)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Səhifə yüklənənə qədər düyməni göstərmirik

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* LOGO */}
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

        {/* NAVIGATION */}
        <nav className={styles.nav}>
          <a href="/" className={styles.navLink}>Ana səhifə</a>
          
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

        {/* ACTIONS */}
        <div className={styles.actions}>
          <div className={styles.hotline}>
            <FaHeadset /> <span>*2200</span>
          </div>

          <div className={styles.controls}>
            {/* REAL THEME TOGGLE BURADA */}
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
            <button className=
            {styles.ctaBtn}>Onlayn Müraciət</button>
          </div>
        
        </div>
      </div>
    </header>
  );
};

export default Header;