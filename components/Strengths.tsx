'use client'

import { useLang } from '@/lib/i18n'
import { Reveal } from './Reveal'
import styles from './Strengths.module.css'

export function Strengths() {
  const { t } = useLang()

  return (
    <section className="section" id="strengths">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">{t.strengths.subtitle}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>{t.strengths.title}</h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {t.strengths.items.map((s, i) => (
            <Reveal key={i} delay={i * 0.06} className={styles.cardWrap}>
              <div className={`card ${styles.card}`} data-cursor="grow">
                <span className={styles.num}>0{i + 1}</span>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.text}>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
