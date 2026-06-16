'use client'

import { useLang } from '@/lib/i18n'
import { Reveal } from './Reveal'
import { Pin } from './icons'
import styles from './About.module.css'

export function About() {
  const { t } = useLang()

  return (
    <section className="section" id="about">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <Reveal>
              <span className="eyebrow">{t.about.title}</span>
            </Reveal>
            {t.about.paragraphs.map((p, idx) => (
              <Reveal key={idx} delay={0.05 * idx}>
                <p className={idx === 0 ? styles.lead : styles.para}>{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <div className={styles.langBlock}>
                <h3 className={styles.langTitle}>{t.about.languagesTitle}</h3>
                <ul className={styles.langs}>
                  {t.about.languages.map((l) => (
                    <li key={l.name} className={styles.langItem}>
                      <span className={styles.langName}>{l.name}</span>
                      <span className={styles.langLevel}>{l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className={styles.right}>
            <div className={styles.photoCard} data-cursor="grow">
              <div className={styles.photoGlow} aria-hidden />
              <img
                src="/adrian.jpg"
                alt="Adrián Trujillo"
                className={styles.photo}
                loading="lazy"
              />
              <div className={styles.photoBadge}>
                <Pin />
                Barcelona
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
