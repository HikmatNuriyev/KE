// import styles from './BranchPreview.module.scss';
// import Link from 'next/link';
// import { FaArrowRight } from 'react-icons/fa';

// const BranchPreview = () => {
//   return (
//     <section className={styles.branchPreview}>
//       <div className={styles.container}>
//         <div className={styles.textContent}>
//           <div className={styles.tagLine}>
//             <span className={styles.line}></span>
//             <span className={styles.tag}>Şəbəkəmiz</span>
//           </div>
//           <h2>Hər nöqtədə <br /> <span>yanınızdayıq</span></h2>
//           <p>
//             Azərbaycanın dörd bir yanında, 34 fərqli nöqtədə peşəkar komandamızla maliyyə ehtiyaclarınız üçün xidmətinizdəyik.
//           </p>
          
//           <div className={styles.actions}>
//             <Link href="/filiallar" className={styles.mainBtn}>
//               Filialları göstər (34)
//             </Link>
//             <Link href="/elaqe" className={styles.linkBtn}>
//               Xəritədə bax <FaArrowRight />
//             </Link>
//           </div>
//         </div>

//         <div className={styles.mapContainer}>
//           <div className={styles.mapWrapper}>
//             {/* Buraya artıq əllə path yazmırıq, real şəkli qoyuruq */}
//             <img 
//               src="/images/az.svg" 
//               alt="Azerbaijan Map" 
//               className={styles.mapImg} 
//             />
            
//             {/* Nöqtələr bu şəklin üzərində "absolute" dayanacaq */}
//             <div className={`${styles.pin} ${styles.baku}`}></div>
//             <div className={`${styles.pin} ${styles.sumqayit}`}></div>
//             <div className={`${styles.pin} ${styles.gence}`}></div>
//             <div className={`${styles.pin} ${styles.quba}`}></div>
//             <div className={`${styles.pin} ${styles.lenkeran}`}></div>
//             <div className={`${styles.pin} ${styles.naxcivan}`}></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BranchPreview

import styles from './BranchPreview.module.scss';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import branches from '../../../../public/data/branches.json';
import AzMap from '../../atoms/AzMap/AzMap';

const BranchPreview = () => {
  return (
    <section className={styles.branchPreview}>
      <div className={styles.container}>
        
        <div className={styles.textContent}>
          <div className={styles.tagLine}>
            <span className={styles.line}></span>
            <span className={styles.tag}>Şəbəkəmiz</span>
          </div>

          <h2>
            Hər nöqtədə <br /> <span>yanınızdayıq</span>
          </h2>

          <p>
            Azərbaycanın dörd bir yanında, <strong>{branches.length}</strong> filialımızla xidmətinizdəyik.
          </p>

          <div className={styles.actions}>
            <Link href="/filiallar" className={styles.mainBtn}>
              Filialları göstər ({branches.length})
            </Link>
            <Link href="/elaqe" className={styles.linkBtn}>
              Xəritədə bax <FaArrowRight />
            </Link>
          </div>
        </div>

     <div className={styles.mapContainer}>
  <svg
    viewBox="0 0 1024 1024"
    className={styles.mapSvg}
    preserveAspectRatio="xMidYMid meet"
  >
    <AzMap />

    {branches.map(branch => (
      <g
        key={branch.id}
        transform={`translate(${branch.x}, ${branch.y})`}
        className={styles.pinGroup}
      >
        <circle r="6" className={styles.pin} />
        <circle r="6" className={styles.pulse} />
        <text y="-14" textAnchor="middle" className={styles.tooltip}>
          {branch.name} filialı
        </text>
      </g>
    ))}
  </svg>
</div>


      </div>
    </section>
  );
};

export default BranchPreview;
