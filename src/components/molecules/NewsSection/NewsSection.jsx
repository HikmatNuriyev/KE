// import styles from './NewsSection.module.scss';
// import { FaArrowRight } from 'react-icons/fa';
// import Image from 'next/image';
// const NewsSection = () => {
//   return (
//     <section className={styles.newsSection}>
//       <div className={styles.container}>
//         <div className={styles.header}>
//           <h2>Yeniliklər və <span>Xəbərlər</span></h2>
//           <p>Kredit Evindən ən son xəbərləri izləyin.</p>
//         </div>

//         <div className={styles.bentoGrid}>
//           {/* Əsas Böyük Xəbər - Məsələn, Yeni Filial */}
//           <div className={styles.mainNews}>
//             <Image 
//     src="/images/yevlax2.jpg" 
//     alt="News" 
//     fill // Bu şəkli bütün karta yayır
//     className={styles.bgImage} 
//   />
//             {/* <div className={styles.imageOverlay}></div> */}
//             <div className={styles.badge}>Yeni Filial</div>
//             <div className={styles.content}>
//               <span className={styles.date}>24 Yanvar, 2026</span>
//               <h3>Sumqayıtda yeni lüks filialımız <br /> xidmətinizə verildi!</h3>
//               <p>Şəbəkəmizi böyüdürük. Artıq Sumqayıt sakini olan müştərilərimizə daha yaxınıq.</p>
//               <button className={styles.readMore}>Ətraflı oxu <FaArrowRight /></button>
//             </div>
//           </div>

//           {/* Sağ tərəfdəki daha kiçik xəbərlər */}
//           <div className={styles.sideNews}>
//             <div className={styles.smallCard}>
//               <span className={styles.date}>20 Yanvar, 2026</span>
//               <h4>Yaz kampaniyası: 0% komissiya ilə kredit</h4>
//               <button>Oxu</button>
//             </div>

//             <div className={styles.smallCard}>
//               <span className={styles.date}>15 Yanvar, 2026</span>
//               <h4>Mobil tətbiqimizdə yeni funksiyalar</h4>
//               <button>Oxu</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default NewsSection
import styles from './NewsSection.module.scss';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const NewsSection = () => {
  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>

        <header className={styles.header}>
          <h2>
            Yeniliklər və <span>Xəbərlər</span>
          </h2>
          <p>Kredit Evindən ən son xəbərləri izləyin.</p>
        </header>

        <div className={styles.bentoGrid}>
          {/* MAIN NEWS */}
          <article className={styles.mainNews}>
            <Image
              src="/images/yevlax1.jpg"
              alt="Yeni filial"
              fill
              priority
              className={styles.bgImage}
            />

            <div className={styles.overlay} />

            <div className={styles.content}>
              <span className={styles.badge}>Yeni Filial</span>
              <span className={styles.date}>24 Yanvar, 2026</span>

              <h3>
                Yevlaxda yeni  filialımız <br />
                xidmətinizə verildi!
              </h3>

              <p>
                Şəbəkəmizi böyüdürük. Artıq Sumqayıt sakini olan
                müştərilərimizə daha yaxınıq.
              </p>

              <button className={styles.readMore}>
                Ətraflı oxu <FaArrowRight />
              </button>
            </div>
          </article>

          {/* SIDE NEWS */}
          <aside className={styles.sideNews}>
            <article className={styles.smallCard}>
              <span className={styles.date}>20 Yanvar, 2026</span>
              <h4>Yaz kampaniyası: 0% komissiya ilə kredit</h4>
              <button>Oxu</button>
            </article>

            <article className={styles.smallCard}>
              <span className={styles.date}>15 Yanvar, 2026</span>
              <h4>Mobil tətbiqimizdə yeni funksiyalar</h4>
              <button>Oxu</button>
            </article>
          </aside>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;
