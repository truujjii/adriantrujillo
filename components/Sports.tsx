'use client'

import { useLang } from '@/lib/i18n'
import type { SportIcon } from '@/content/data'
import { Reveal } from './Reveal'
import { Basketball, Boxing, Padel, Hiking, Sparkle } from './icons'
import styles from './Sports.module.css'

const ICONS: Record<SportIcon, (p: { className?: string }) => JSX.Element> = {
  basketball: Basketball,
  boxing: Boxing,
  padel: Padel,
  hiking: Hiking,
  more: Sparkle,
}

export function Sports() {
  const { t } = useLang()

  return (
    <section className="section" id="sports">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">{t.sports.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>{t.sports.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>{t.sports.lead}</p>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {t.sports.items.map((s, i) => {
            const Icon = ICONS[s.icon]
            return (
              <Reveal key={s.name} delay={i * 0.06} className={styles.cardWrap}>
                <div className={`card ${styles.card}`} data-cursor="grow">
                  <span className={styles.icon} aria-hidden>
                    <Icon />
                  </span>
                  <div>
                    <h3 className={styles.name}>{s.name}</h3>
                    <p className={styles.detail}>{s.detail}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1} className={styles.valuesWrap}>
          <span className={styles.valuesTitle}>{t.sports.valuesTitle}</span>
          <ul className={styles.values}>
            {t.sports.values.map((v) => (
              <li key={v} className="tag">
                {v}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
