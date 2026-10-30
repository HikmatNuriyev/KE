import styles from './Vacancies.module.scss';
import { HiOutlineLocationMarker, HiOutlineClock, HiOutlineBriefcase } from 'react-icons/hi';
import VacancyApply from '@/components/molecules/VacancyApply/VacancyApply';
import { vacancies } from '@/data/vacancies';

// const vacancies = [
//   {
//     id: 1,
//     title: "Kredit Mütəxəssisi",
//     location: "Bakı (Nərimanov ray.)",
//     type: "Tam iş günü",
//     category: "Satış / Kredit",
//   },
//
//   {
//     id: 3,
//     title: "İT Dəstək Mütəxəssisi",
//     location: "Baş ofis",
//     type: "Növbəli",
//     category: "İnformasiya Texnologiyaları",
//   }
// ];

const VacanciesPage = () => {
  return (
    <section className={styles.vacancySection}>
      <div className="container">
        <div className={styles.header}>
          <h1>Bizə <span>Qoşulun</span></h1>
          <p>"Kredit Evi" ASC ailəsinin bir üzvü olmaq üçün aktiv vakansiyalarla tanış olun.</p>
        </div>

        <div className={styles.vacancyList}>
          {vacancies.length > 0 ? (
            vacancies.map((job) => (
              <div key={job.id} className={styles.vacancyCard}>
                <div className={styles.info}>
                  <h3>{job.title}</h3>
                  <div className={styles.tags}>
                    <span><HiOutlineLocationMarker /> {job.location}</span>
                    <span><HiOutlineClock /> {job.type}</span>
                    <span><HiOutlineBriefcase /> {job.category}</span>
                  </div>
                </div>
                {/* <button className={styles.applyBtn}>Müraciət et</button> */}
                <VacancyApply job={job} className={styles.applyBtn} />
              </div>
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>Hazırda aktiv vakansiyamız yoxdur. Yenidən yoxlamağı unutmayın!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VacanciesPage;