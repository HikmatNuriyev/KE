

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LuUserRound, LuX } from "react-icons/lu";
import style from "./Team.module.scss";

const managementData = [
  {
    id: "lorem-ipsum-1",
    name: "Mübariz Qurbanov ",
    position: "Müşahidə Şurasının Sədri",
    image: "/images/mm0.jpg",
    bio: "Mübariz Qurbanov 1976-cı ildə Şəki şəhərində anadan olub. 1993-1998-ci illərdə Azərbaycan Dövlət İqtisad Universitetinin Kommersiya fakültəsində Beynəlxalq İqtisadi Münasibətlər ixtisası üzrə təhsil alıb. Peşəkar fəaliyyətinə 2003-cü ildə başlayıb. 2003–2014-ci illərdə “İnkişaf üçün Maliyyə” Bank Olmayan Kredit Təşkilatında filial müdiri, Baş Kredit müdiri və İdarə Heyəti Sədrinin müavini vəzifələrində çalışıb.2014–2020-ci illərdə “Azərbaycan Beynəlxalq Bankı” ASC-də Pərakəndə Biznes Departamentində şöbə müdiri, departament direktorunun müavini kimi müxtəlif vəzifələrdə çalışaraq Bankın həyata keçirdiyi bir çox layihələrə rəhbərlik etmişdir. Mübariz Qurbanov “Frankfurt School of Finance and Management” və Stanford Univercity kimi nüfuzlu ali məktəblərin təşkil etdiyi müxtəlif sertifikasiya kurslarını uğurla bitirmişdir. 2025-ci ilin Sentyabr ayından etibarən “Azərbaycan Mikro Kredit” ASC-nin Müşahidə Şurasının sədri vəzifəsinə təyin edilmişdir. ",
  },
  {
    id: "lorem-ipsum-2",
    name: "Elşad Bağırov ",
    position: "Direktor",
    image: "/images/eb1.jpg",
    bio: "test",
  },
];

function MemberDialog({ person, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;

    if (person && !el.open) el.showModal();
    if (!person && el.open) el.close();
  }, [person]);

  useEffect(() => {
    document.body.style.overflow = person ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [person]);

  return (
    <dialog
      ref={dialogRef}
      className={style.dialog}
      aria-labelledby="member-dialog-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      {person && (
        <div className={style.dialogInner}>
          <button
            type="button"
            className={style.close}
            onClick={onClose}
            aria-label="Bağla"
          >
            <LuX aria-hidden="true" />
          </button>

          <div className={style.dialogPhoto}>
            {person.image ? (
              <Image
                src={person.image}
                alt=""
                width={640}
                height={800}
                sizes="(max-width: 720px) 100vw, 300px"
              />
            ) : (
              <LuUserRound className={style.placeholder} aria-hidden="true" />
            )}
          </div>

          <div className={style.dialogBody}>
            <h2 id="member-dialog-title" className={style.dialogName}>
              {person.name}
            </h2>

            <p className={style.dialogPosition}>{person.position}</p>

            {person.bio && <p className={style.dialogBio}>{person.bio}</p>}

            {person.education && (
              <dl className={style.dialogMeta}>
                <div>
                  <dt>Təhsil</dt>
                  <dd>{person.education}</dd>
                </div>
              </dl>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function Team() {
  const [activeId, setActiveId] = useState(null);

  const active =
    managementData.find((person) => person.id === activeId) ?? null;

  return (
    <section className={style.management}>
      <div className="container">
        <ul className={style.grid}>
          {managementData.map((person) => (
            <li key={person.id}>
              <button
                type="button"
                className={style.card}
                onClick={() => setActiveId(person.id)}
                aria-haspopup="dialog"
              >
                <span className={style.photo}>
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt=""
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
              </button>
            </li>
          ))}
        </ul>
      </div>

      <MemberDialog person={active} onClose={() => setActiveId(null)} />
    </section>
  );
}
