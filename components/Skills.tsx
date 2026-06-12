'use client'

import { useLang } from '@/lib/i18n'
import { Reveal, StaggerGroup, StaggerItem } from './Reveal'
import styles from './Skills.module.css'

export function Skills() {
  const { t } = useLang()

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">{t.skills.subtitle}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>{t.skills.title}</h2>
          </Reveal>
        </div>

        <div className={styles.groups}>
          {t.skills.groups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.08} className={styles.group}>
              <div className={`card ${styles.card}`} data-cursor="grow">
                <div className={styles.cardHead}>
                  <span className={styles.idx}>0{gi + 1}</span>
                  <h3 className={styles.groupTitle}>{group.title}</h3>
                </div>
                <StaggerGroup className={styles.chips}>
                  {group.items.map((item) => (
                    <StaggerItem key={item}>
                      <span className={`tag ${styles.chip}`}>{item}</span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
