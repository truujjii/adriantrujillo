'use client'

import { useLang } from '@/lib/i18n'
import { Reveal } from './Reveal'
import styles from './Education.module.css'

export function Education() {
  const { t } = useLang()
  const e = t.education

  return (
    <section className="section" id="education">
      <div className="container">
        <Reveal>
          <div className={`card ${styles.card}`}>
            <div className={styles.left}>
              <span className="eyebrow">{e.title}</span>
              <h3 className={styles.degree}>{e.degree}</h3>
              <p className={styles.school}>{e.school}</p>
              <span className={styles.period}>{e.period}</span>
              <p className={styles.note}>{e.note}</p>
            </div>
            <div className={styles.right}>
              <h4 className={styles.courseTitle}>{e.courseworkTitle}</h4>
              <ul className={styles.courses}>
                {e.coursework.map((c) => (
                  <li key={c} className={styles.course}>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
