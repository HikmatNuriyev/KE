import styles from './About.module.scss';

const AboutPage = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.container}>
        
        {/* Giriş */}
        <div className={styles.hero}>
          <h1>Bizim <span>Hekayəmiz</span></h1>
          <p>
            "Kredit Evi" ASC olaraq 2017-ci ildən bəri müştərilərimizə qızıl, texnika və avtomobil girovu 
            ilə sürətli maliyyə həlləri təqdim edirik.
          </p>
        </div>

        {/* Statistika */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h2>34</h2>
            <span>Ümumi Filial</span>
          </div>
          <div className={styles.statCard}>
            <h2>5</h2>
            <span>Bakı Filialı</span>
          </div>
          <div className={styles.statCard}>
            <h2>27</h2>
            <span>Region Filialı</span>
          </div>
          <div className={styles.statCard}>
            <h2>2017</h2>
            <span>Yaranma Tarixi</span>
          </div>
        </div>

        {/* Tarixçə (Timeline) */}
        <div className={styles.historyWrapper}>
          <div className={styles.historyItem}>
            <h3>15.03.2017</h3>
            <p>"Kredit Evi" MMC olaraq dövlət qeydiyyatına alınmışdır.</p>
          </div>
          <div className={styles.historyItem}>
            <h3>05.07.2019</h3>
            <p>Hüquqi status dəyişərək "Kredit Evi" QSC-yə çevrilmişdir.</p>
          </div>
          <div className={styles.historyItem}>
            <h3>07.09.2023</h3>
            <p>"Kredit Evi" ASC olaraq fəaliyyətinə davam edir.</p>
          </div>
        </div>

        {/* Məqsədimiz */}
        <div className={styles.missionBox}>
          <h2>Məqsədimiz</h2>
          <p>
            İnsanlar arasında heç bir sosial fərq qoymadan bütün müştərilərimiz üçün 
            daima daha keyfiyyətli və etibarlı xidmət göstərməklə onlara daha etibarlı 
            və dayanıqlı tərəfdaş olduğumuzu sübut etməkdir.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;