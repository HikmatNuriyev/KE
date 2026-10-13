// import styles from './GoldLoan.module.scss';
//
// const GoldLoan = () => {
//   const tableData = [
//     { amount: "100 AZN", term: "3 ay", monthly: "36 AZN" },
//     { amount: "1000 AZN", term: "12 ay", monthly: "106 AZN" },
//     { amount: "3000 AZN", term: "24 ay", monthly: "196 AZN" },
//   ];
//
//   return (
//     <section className={styles.goldSection}>
//       <div className="container">
//
//         <div className={styles.hero}>
//           <div className={styles.content}>
//             <h1>Qızıl girovu ilə <span>kredit</span></h1>
//             <p>
//               Artıq ehtiyac olan məbləği əldə etmək üçün qızılınızı satmağa gərək yoxdur. 
//               Əşyalarınızı bizə əmanət edərək, yüksək qiymətləndirmə ilə kredit əldə edin.
//             </p>
//
//             <div className={styles.features}>
//               <div className={styles.featureItem}>
//                 <h4>140%-ədək</h4>
//                 <span>Dəyərləndirmə</span>
//               </div>
//               <div className={styles.featureItem}>
//                 <h4>1-36 ay</h4>
//                 <span>Müddət seçimi</span>
//               </div>
//               <div className={styles.featureItem}>
//                 <h4>Manatla</h4>
//                 <span>Aşağı faizlər</span>
//               </div>
//               <div className={styles.featureItem}>
//                 <h4>Sığortalı</h4>
//                 <span>Etibarlı saxlanc</span>
//               </div>
//             </div>
//           </div>
//
//           <div className={styles.offerCard}>
//             <h2>Xüsusi Təklif</h2>
//             <div className={styles.offerDetails}>
//               <div className={styles.row}><span>Məbləğ:</span> <span>100.000 AZN-dək</span></div>
//               <div className={styles.row}><span>İllik Faiz:</span> <span>27%</span></div>
//               <div className={styles.row}><span>Aylıq Faiz:</span> <span>2.2%</span></div>
//               <div className={styles.row}><span>Zəmanət:</span> <span>140% dəyərində</span></div>
//             </div>
//           </div>
//         </div>
//
//         <div className={styles.tableSection}>
//           <h3>Nümunə ödəniş cədvəli</h3>
//           <table className={styles.loanTable}>
//             <thead>
//               <tr>
//                 <th>Kreditin məbləği</th>
//                 <th>Müddət</th>
//                 <th>Aylıq ödəniş</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map((item, index) => (
//                 <tr key={index}>
//                   <td>{item.amount}</td>
//                   <td>{item.term}</td>
//                   <td>{item.monthly}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//
//       </div>
//     </section>
//   );
// };
//
// export default GoldLoan;

import styles from "./GoldLoan.module.scss";

const tableData = [
  { amount: "100 AZN", term: "3 ay", monthly: "36 AZN" },
  { amount: "1000 AZN", term: "12 ay", monthly: "106 AZN" },
  { amount: "3000 AZN", term: "24 ay", monthly: "196 AZN" },
];

const features = [
  { value: "140%-ədək", label: "Dəyərləndirmə" },
  { value: "1-36 ay", label: "Müddət seçimi" },
  { value: "Manatla", label: "Aşağı faizlər" },
  { value: "Sığortalı", label: "Etibarlı saxlanc" },
];

const offer = [
  { label: "Məbləğ", value: "100.000 AZN-dək" },
  { label: "İllik Faiz", value: "27%" },
  { label: "Aylıq Faiz", value: "2.2%" },
  { label: "Zəmanət", value: "140% dəyərində" },
];

const GoldLoan = () => {
  return (
    <section className={styles.goldSection}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.glass} ${styles.intro}`}>
            <h1>
              Qızıl girovu ilə <span>kredit</span>
            </h1>
            <p>
              Artıq ehtiyac olan məbləği əldə etmək üçün qızılınızı satmağa gərək yoxdur.
              Əşyalarınızı bizə əmanət edərək, yüksək qiymətləndirmə ilə kredit əldə edin.
            </p>
          </div>

          <aside className={styles.offerCard}>
            <h2>Xüsusi Təklif</h2>
            <dl className={styles.offerDetails}>
              {offer.map((item) => (
                <div key={item.label} className={styles.row}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            <button type="button" className={styles.applyBtn}>
              Müraciət et
            </button>
          </aside>

          <ul className={styles.features}>
            {features.map((f) => (
              <li key={f.label} className={styles.glass}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>

          <div className={`${styles.glass} ${styles.tableCard}`}>
            <h3>Nümunə ödəniş cədvəli</h3>
            <table className={styles.loanTable}>
              <thead>
                <tr>
                  <th>Kreditin məbləği</th>
                  <th>Müddət</th>
                  <th>Aylıq ödəniş</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item) => (
                  <tr key={item.amount}>
                    <td data-label="Kreditin məbləği">{item.amount}</td>
                    <td data-label="Müddət">{item.term}</td>
                    <td data-label="Aylıq ödəniş">{item.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldLoan;
