"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import btn from "@/components/atoms/Button/Button.module.scss";
import styles from "./Hero.module.scss";

const slides = [
  
  {
    id: "lizinq",
    badge: "Avtomobil Lizinqi",
    title: "Yolunuz",
    accent: "açıq olsun!",
    text: "15%-dən başlayan ilkin ödəniş və 48 ayadək lizinq müddəti.",
    cta: "Ətraflı bax",
    href: "/lizing",
    image: "/images/lizinqMobile.png",
  },
  //   {
  //   id: "lombard",
  //   badge: "Qızıl Girovlu Kredit",
  //   title: "Sənin Qızılın,",
  //   accent: "Sənin İmkanın.",
  //   text: "Sürətli rəsmiləşdirmə, aşağı faizlər və komissiyasız nağdlaşdırma.",
  //   cta: "İndi müraciət et",
  //   href: "/qizil-krediti",
  
  //   image: "/images/lombard1.jpg",
  // },
];

const DELAY = 6000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);

  const go = (i) => setActive((i + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(active + 1), DELAY);
    return () => clearTimeout(t);
  }, [active, paused]);

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(diff) > 40) go(active + (diff < 0 ? 1 : -1));
    touchX.current = null;
  };

  return (
    <div
      className={`${styles.slider} ${slides[active].image ? styles.withImage : ""}`}
      data-slide={slides[active].id}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className={styles.slideBgs}>
        {slides.map(
          (s, i) =>
            s.image && (
              <div
                key={s.id}
                className={`${styles.slideBg} ${i === active ? styles.slideBgActive : ""}`}
              >
                <Link
                  href={s.href}
                  aria-label={s.badge}
                  tabIndex={i === active ? 0 : -1}
                  className={styles.slideLink}
                />
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  style={{ objectFit: "cover" }}
                  priority={i === 0}
                />
              </div>
            )
        )}
      </div>

      <div className={styles.slides}>
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`${styles.slide} ${i === active ? styles.slideActive : ""} ${s.image ? styles.slideHidden : ""}`}
            aria-hidden={i !== active || Boolean(s.image)}
          >
            <span className={styles.badge}>{s.badge}</span>
            <h1>
              {s.title} <span>{s.accent}</span>
            </h1>
            <p>{s.text}</p>
            <Link
              href={s.href}
              tabIndex={i === active ? 0 : -1}
              className={`${btn.btn} ${btn.primary} ${btn.lg} ${styles.slideCta}`}
            >
              {s.cta} <FaArrowRight />
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.sliderNav}>
        <div className={styles.dots}>
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={s.badge}
              className={i === active ? styles.dotActive : ""}
              onClick={() => go(i)}
            >
              {i === active && !paused && <span className={styles.dotFill} />}
            </button>
          ))}
        </div>

        <div className={styles.arrows}>
          <button type="button" aria-label="Əvvəlki" onClick={() => go(active - 1)}>
            <FaChevronLeft />
          </button>
          <button type="button" aria-label="Növbəti" onClick={() => go(active + 1)}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
