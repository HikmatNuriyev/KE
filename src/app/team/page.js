import Image from "next/image";
import { LuUserRound } from "react-icons/lu";
import style from "./Team.module.scss";

const managementData = [
  {
    id: "lorem-ipsum-1",
    name: "Mübariz Qurbanov Əhməd oğlu",
    position: "Müşahidə Şurasının Sədri",
    image: "/images/ceo.JPG",
  },
  {
    id: "lorem-ipsum-2",
    name: "Elşad Bağırov Ramazan oğlu",
    position: "Direktor",
    image: "/images/direktor.JPG",
  },
    {
    id: "lorem-ipsum-4",
    name: "Vüqar Muxtarov İlyas oğlu",
    position: "Daxili Audit departamentinin direktoru",
    image: "/images/audit.JPG",
  },
  {
id: "lorem-ipsum-5",
    name: "Məmmədov Emin Fariz oğlu",
    position: "Direktor müavini",
    image: "/images/EminM.png",
  },
  {
    id: "lorem-ipsum-3",
    name: "Səxavət Nəsirov Bəşir oğlu",
    position: "Filiallarla iş departamentinin direktoru",
    image: "/images/fid.JPG",
  },

];

export default function Team() {
  return (
    <section className={style.management}>
      <div className="container">
        <ul className={style.grid}>
          {managementData.map((person) => (
            <li key={person.id}>
              <div className={style.card}>
                <span className={style.photo}>
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={640}
                      height={480}
                      sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw"
                    />
                  ) : (
                    <LuUserRound className={style.placeholder} aria-hidden="true" />
                  )}
                </span>

                <span className={style.info}>
                  <span className={style.name}>{person.name}</span>
                  <span className={style.position}>{person.position}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
