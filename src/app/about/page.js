import styles from "./About.module.scss";

const history = [
  {
    date: "15.03.2017",
    text: '"Kredit Evi" MMC olaraq dövlət qeydiyyatına alınmışdır.',
  },
  {
    date: "05.07.2019",
    text: 'Hüquqi status dəyişərək "Kredit Evi" QSC-yə çevrilmişdir.',
  },
  {
    date: "07.09.2023",
    text: '"Kredit Evi" ASC olaraq fəaliyyətinə davam edir.',
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
          “Kredit Evi” ASC olaraq müştərilərimizə qızıl əşyaları, texnika və avtomobil girovu, həmçinin avtomobil lizinqi ilə sürətli maliyyə həlləri təqdim edirik.
          </p>

          <p className={styles.facts}>
            35 Ümumi Filial · 5 Bakı Filialı · 28 Region Filialı · 1 Sumqayıt Filialı · 2017 Yaranma
            Tarixi
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
           Hər bir müştərimiz üçün keyfiyyətli və etibarlı xidmət göstərmək, uzunmüddətli və güvənilən tərəfdaş olmaqdır.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutPage;
