import styles from "./AppBanner.module.scss";

import btnStyles from "@/components/atoms/Button/Button.module.scss";
import { FaApple, FaGooglePlay, FaStar } from "react-icons/fa";

import apps from "../../../../public/images/Hikmet.png";
// import app from "../../../../public/images/app-banner.webp";
import Image from "next/image";

const appStoreUrl = "https://apps.apple.com/az/app/kredit-evi/id1611922467";
const googlePlayUrl =
  "https://play.google.com/store/apps/details?id=az.kreditEvi.mobile&hl=az";

const storeBtnClass = `${btnStyles.btn} ${btnStyles.primary} ${btnStyles.md}`;

const AppBanner = () => {
  return (
    <section className={styles.appSection}>
      <div className="container">
        <div className={styles.appGrid}>
          <div className={styles.textTile}>
            <h2>
              Kredit Evi <span>Hər an yanınızda.</span>
            </h2>
            <p>
              Girovlarınızı idarə etmək, növbəti ödənişləri izləmək və onlayn
              müraciət etmək indi daha asandır. Tətbiqi yükləyin, vaxtınıza
              qənaət edin.
            </p>

            <div className={styles.storeButtons}>
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${storeBtnClass} ${styles.appBtn}`}
              >
                <FaApple /> App Store
              </a>
              <a
                href={googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${storeBtnClass} ${styles.appBtn}`}
              >
                <FaGooglePlay /> Google Play
              </a>
            </div>
          </div>

          <div className={styles.imageTile}>
            <div className={styles.ratingChip}></div>
            <Image
              className={styles.appImage}
              src={apps}
              width={1400}
              height={1240}
              sizes="(max-width: 900px) 90vw, 560px"
              alt="Kredit Evi mobil tətbiqi"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBanner;
