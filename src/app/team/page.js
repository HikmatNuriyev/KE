"use client";
import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';
import styles from './Team.module.scss';

const teamMembers = [
  {
    id: 1,
    name: "Elşad Bağırov",
    role: "Direktor",
    image: "/team/member1.jpg",
    linkedin: "#"
  },
  // {
  //   id: 2,
  //   name: "Sadiq Ələkbərov",
  //   role: "İT üzrə mütəxəssis",
  //   // image: "/images/sadiq.jpg",
  //   linkedin: "#"
  // }
];

const Team = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Peşəkar <span>Heyyət</span></h1>
          <p>Maliyyə və texnologiya dünyasında sizə ən yaxşı xidməti göstərən komandamız.</p>
        </div>

        <div className={styles.grid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.memberCard}>
              {/* LinkedIn İkonu - Sağ yuxarıda üzən */}
              <div className={styles.socialFloating}>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </div>

              <div className={styles.imageWrapper}>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className={styles.personImg}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              
              <div className={styles.info}>
                <h3>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;