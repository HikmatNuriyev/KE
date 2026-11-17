import styles from './BranchPreview.module.scss';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { getBranches } from '@/lib/branches';
import AzMap from '../../atoms/AzMap/AzMap';

const BranchPreview = async () => {
  const branches = await getBranches();
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
