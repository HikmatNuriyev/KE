// import styles from "./AppBanner.module.scss";
// import Button from "@/components/atoms/Button/Button";
// import { FaApple, FaGooglePlay } from "react-icons/fa";
// import app from "../../../../public/app.png";
// import Image from "next/image";
// const AppBanner = () => {
//   return (
//     <section className={styles.appSection}>
//       <div className={styles.mainCard}>
//         <div className={styles.visualSide}>
//           <Image
//             className={styles.appImage}
//             src={app}
//             width={500}
//               height={600}
//             objectFit="cover"
//             alt="App Banner"
//           />
          
//           <div className={styles.glow}></div>
//         </div>

//         <div className={styles.contentSide}>
        
//           <h2>Kredit Evi <span>Hər an yanınızda.</span></h2>
//           <p>
//             Girovlarınızı idarə etmək, növbəti ödənişləri izləmək və 
//             onlayn müraciət etmək indi daha asandır. Tətbiqi yükləyin, vaxtınıza qənaət edin.
//           </p>
          
//           <div className={styles.storeButtons}>
//             <Button variant="primary" className={styles.appBtn}>
//               <FaApple /> App Store
//             </Button>
//             <Button variant="primary" className={styles.appBtn}>
//               <FaGooglePlay /> Google Play
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AppBanner;













// import styles from "./AppBanner.module.scss";
// import Button from "@/components/atoms/Button/Button";
// import { FaApple, FaGooglePlay, FaStar } from "react-icons/fa";
// import app from "../../../../public/app.png";
// import Image from "next/image";

// const AppBanner = () => {
//   return (
//     <section className={styles.appSection}>
//       <div className="container">
//         <div className={styles.appGrid}>
//           {/* Mətn kartı — düz bənövşəyi fon, qradient yoxdur */}
//           <div className={styles.textTile}>
//             <div className={styles.tags}>
//               <span>Sürətli</span>
//               <span>Təhlükəsiz</span>
//               <span>24/7</span>
//             </div>

//             <h2>
//               Kredit Evi <span>Hər an yanınızda.</span>
//             </h2>
//             <p>
//               Girovlarınızı idarə etmək, növbəti ödənişləri izləmək və
//               onlayn müraciət etmək indi daha asandır. Tətbiqi yükləyin,
//               vaxtınıza qənaət edin.
//             </p>

//             <div className={styles.storeButtons}>
//               <Button variant="primary" className={styles.appBtn}>
//                 <FaApple /> App Store
//               </Button>
//               <Button variant="primary" className={styles.appBtn}>
//                 <FaGooglePlay /> Google Play
//               </Button>
//             </div>
//           </div>

//           {/* Şəkil kartı — açıq/ağ fon, telefon sərbəst */}
//           <div className={styles.imageTile}>
//             <div className={styles.ratingChip}>
//               <FaStar />
//               <span>4.8</span>
//             </div>
//             <Image
//               className={styles.appImage}
//               src={app}
//               width={1400}
//               height={1680}
//               alt="Kredit Evi mobil tətbiqi"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AppBanner;










// import styles from "./AppBanner.module.scss";
// import Button from "@/components/atoms/Button/Button";
// import { FaApple, FaGooglePlay, FaStar } from "react-icons/fa";
// import app from "../../../../public/app.png";
// import Image from "next/image";

// const AppBanner = () => {
//   return (
//     <section className={styles.appSection}>
//       <div className="container">
//         <div className={styles.appGrid}>
//           {/* Mətn kartı — arxada 2 "ghost" vərəq ilə qat-qat (stacked) effekt */}
//           <div className={styles.stackWrap}>
//             <div className={styles.stackLayer2}></div>
//             <div className={styles.stackLayer1}></div>

//             <div className={styles.textTile}>
//               <div className={styles.tags}>
//                 <span>Sürətli</span>
//                 <span>Təhlükəsiz</span>
//                 <span>24/7</span>
//               </div>

//               <h2>
//                 Kredit Evi <span>Hər an yanınızda.</span>
//               </h2>
//               <p>
//                 Girovlarınızı idarə etmək, növbəti ödənişləri izləmək və
//                 onlayn müraciət etmək indi daha asandır. Tətbiqi yükləyin,
//                 vaxtınıza qənaət edin.
//               </p>

//               <div className={styles.storeButtons}>
//                 <Button variant="primary" className={styles.appBtn}>
//                   <FaApple /> App Store
//                 </Button>
//                 <Button variant="primary" className={styles.appBtn}>
//                   <FaGooglePlay /> Google Play
//                 </Button>
//               </div>
//             </div>
//           </div>

//           {/* Şəkil kartı — açıq/ağ fon, telefon sərbəst */}
//           <div className={styles.imageTile}>
//             <div className={styles.ratingChip}>
//               <FaStar />
//               <span>4.8</span>
//             </div>
//             <Image
//               className={styles.appImage}
//               src={app}
//               width={1400}
//               height={1680}
//               alt="Kredit Evi mobil tətbiqi"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AppBanner;

import styles from "./AppBanner.module.scss";
import Button from "@/components/atoms/Button/Button";
import { FaApple, FaGooglePlay, FaStar } from "react-icons/fa";
import app from "../../../../public/app.png";
import Image from "next/image";

const AppBanner = () => {
  return (
    <section className={styles.appSection}>
      <div className="container">
        <div className={styles.appGrid}>
          {/* Mətn kartı — tünd, üzərində şaquli "pərdə" xətləri */}
          <div className={styles.textTile}>
            {/* <div className={styles.tags}>
              <span>Sürətli</span>
              <span>Təhlükəsiz</span>
              <span>24/7</span>
            </div> */}

            <h2>
              Kredit Evi <span>Hər an yanınızda.</span>
            </h2>
            <p>
              Girovlarınızı idarə etmək, növbəti ödənişləri izləmək və
              onlayn müraciət etmək indi daha asandır. Tətbiqi yükləyin,
              vaxtınıza qənaət edin.
            </p>

            <div className={styles.storeButtons}>
              <Button variant="primary" className={styles.appBtn}>
                <FaApple /> App Store
              </Button>
              <Button variant="primary" className={styles.appBtn}>
                <FaGooglePlay /> Google Play
              </Button>
            </div>
          </div>

          {/* Şəkil kartı — açıq/ağ fon, telefon sərbəst */}
          <div className={styles.imageTile}>
            <div className={styles.ratingChip}>
              {/* <FaStar />
              <span>4.8</span> */}
            </div>
            <Image
              className={styles.appImage}
              src={app}
              width={1400}
              height={1680}
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