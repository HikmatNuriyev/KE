// import styles from './About.module.scss';
//
// const AboutPage = () => {
//   return (
//     <div className={styles.aboutSection}>
//       <div className={styles.container}>
//         
//         {/* Giriş */}
//         <div className={styles.hero}>
//           <h1>Bizim <span>Hekayəmiz</span></h1>
//           <p>
//             "Kredit Evi" ASC olaraq 2017-ci ildən bəri müştərilərimizə qızıl, texnika və avtomobil girovu 
//             ilə sürətli maliyyə həlləri təqdim edirik.
//           </p>
//         </div>
//
//         {/* Statistika */}
//         <div className={styles.statsGrid}>
//           <div className={styles.statCard}>
//             <h2>34</h2>
//             <span>Ümumi Filial</span>
//           </div>
//           <div className={styles.statCard}>
//             <h2>5</h2>
//             <span>Bakı Filialı</span>
//           </div>
//           <div className={styles.statCard}>
//             <h2>27</h2>
//             <span>Region Filialı</span>
//           </div>
//           <div className={styles.statCard}>
//             <h2>2017</h2>
//             <span>Yaranma Tarixi</span>
//           </div>
//         </div>
//
//         {/* Tarixçə (Timeline) */}
//         <div className={styles.historyWrapper}>
//           <div className={styles.historyItem}>
//             <h3>15.03.2017</h3>
//             <p>"Kredit Evi" MMC olaraq dövlət qeydiyyatına alınmışdır.</p>
//           </div>
//           <div className={styles.historyItem}>
//             <h3>05.07.2019</h3>
//             <p>Hüquqi status dəyişərək "Kredit Evi" QSC-yə çevrilmişdir.</p>
//           </div>
//           <div className={styles.historyItem}>
//             <h3>07.09.2023</h3>
//             <p>"Kredit Evi" ASC olaraq fəaliyyətinə davam edir.</p>
//           </div>
//         </div>
//
//         {/* Məqsədimiz */}
//         <div className={styles.missionBox}>
//           <h2>Məqsədimiz</h2>
//           <p>
//             İnsanlar arasında heç bir sosial fərq qoymadan bütün müştərilərimiz üçün 
//             daima daha keyfiyyətli və etibarlı xidmət göstərməklə onlara daha etibarlı 
//             və dayanıqlı tərəfdaş olduğumuzu sübut etməkdir.
//           </p>
//         </div>
//
//       </div>
//     </div>
//   );
// };
//
// export default AboutPage;

// import styles from "./About.module.scss";
//
// const stats = [
//   { value: "34", label: "Ümumi Filial", main: true },
//   { value: "5", label: "Bakı Filialı" },
//   { value: "27", label: "Region Filialı" },
//   { value: "2017", label: "Yaranma Tarixi" },
// ];
//
// const history = [
//   {
//     date: "15.03.2017",
//     text: "\"Kredit Evi\" MMC olaraq dövlət qeydiyyatına alınmışdır.",
//   },
//   {
//     date: "05.07.2019",
//     text: "Hüquqi status dəyişərək \"Kredit Evi\" QSC-yə çevrilmişdir.",
//   },
//   {
//     date: "07.09.2023",
//     text: "\"Kredit Evi\" ASC olaraq fəaliyyətinə davam edir.",
//   },
// ];
//
// const AboutPage = () => {
//   return (
//     <section className={styles.aboutSection}>
//       <div className="container">
//         <div className={styles.bento}>
//           <div className={styles.intro}>
//             <h1>
//               Bizim <span>Hekayəmiz</span>
//             </h1>
//             <p>
//               "Kredit Evi" ASC olaraq 2017-ci ildən bəri müştərilərimizə qızıl,
//               texnika və avtomobil girovu ilə sürətli maliyyə həlləri təqdim
//               edirik.
//             </p>
//           </div>
//
//           {/* {stats.map((s) => (
//             <div
//               key={s.label}
//               className={`${styles.stat} ${s.main ? styles.statMain : ""}`}
//             >
//               <strong>{s.value}</strong>
//               <span>{s.label}</span>
//             </div>
//           ))} */}
//
//           <div className={styles.statsCard}>
//             <div className={styles.statTotal}>
//               <strong>{stats[0].value}</strong>
//               <span>{stats[0].label}</span>
//             </div>
//             <ul className={styles.statRow}>
//               {stats.slice(1).map((s) => (
//                 <li key={s.label}>
//                   <strong>{s.value}</strong>
//                   <span>{s.label}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//
//           <div className={styles.mission}>
//             <h2>Məqsədimiz</h2>
//             <p>
//               İnsanlar arasında heç bir sosial fərq qoymadan bütün müştərilərimiz
//               üçün daima daha keyfiyyətli və etibarlı xidmət göstərməklə onlara
//               daha etibarlı və dayanıqlı tərəfdaş olduğumuzu sübut etməkdir.
//             </p>
//           </div>
//
//           <div className={styles.history}>
//             <ol>
//               {history.map((h) => (
//                 <li key={h.date}>
//                   <time>{h.date}</time>
//                   <p>{h.text}</p>
//                 </li>
//               ))}
//             </ol>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default AboutPage;

import styles from "./About.module.scss";

const history = [
  {
    date: "15.03.2017",
    text: "\"Kredit Evi\" MMC olaraq dövlət qeydiyyatına alınmışdır.",
  },
  {
    date: "05.07.2019",
    text: "Hüquqi status dəyişərək \"Kredit Evi\" QSC-yə çevrilmişdir.",
  },
  {
    date: "07.09.2023",
    text: "\"Kredit Evi\" ASC olaraq fəaliyyətinə davam edir.",
  },
];

const AboutPage = () => {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <article className={styles.storyCard}>
          <div className={styles.reeded} aria-hidden="true" />

          <h1>
            Bizim <span>Hekayəmiz</span>
          </h1>
          <p className={styles.lead}>
            "Kredit Evi" ASC olaraq 2017-ci ildən bəri müştərilərimizə qızıl,
            texnika və avtomobil girovu ilə sürətli maliyyə həlləri təqdim
            edirik.
          </p>

          <p className={styles.facts}>
            34 Ümumi Filial · 5 Bakı Filialı · 27 Region Filialı · 2017
            Yaranma Tarixi
          </p>

          <ul className={styles.history}>
            {history.map((h) => (
              <li key={h.date}>
                <time>{h.date}</time> — {h.text}
              </li>
            ))}
          </ul>

          <h2>Məqsədimiz</h2>
          <p>
            İnsanlar arasında heç bir sosial fərq qoymadan bütün müştərilərimiz
            üçün daima daha keyfiyyətli və etibarlı xidmət göstərməklə onlara
            daha etibarlı və dayanıqlı tərəfdaş olduğumuzu sübut etməkdir.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutPage;
