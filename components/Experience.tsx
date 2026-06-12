'use client'

import { useLang } from '@/lib/i18n'
import { Reveal } from './Reveal'
import styles from './Experience.module.css'

export function Experience() {
  const { t } = useLang()

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">{t.experience.subtitle}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>{t.experience.title}</h2>
          </Reveal>
        </div>

        <ol className={styles.timeline}>
          {t.experience.items.map((item, i) => (
            <Reveal key={i} as="li" delay={i * 0.05} className={styles.item}>
              <div className={styles.marker}>
                <span className={styles.dot} />
              </div>
              <div className={`card ${styles.card}`} data-cursor="grow">
                <div className={styles.head}>
                  <div>
                    <h3 className={styles.role}>{item.role}</h3>
                    <p className={styles.company}>{item.company}</p>
                  </div>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <ul className={styles.bullets}>
                  {item.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
                {item.tags && (
                  <div className={styles.tags}>
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
