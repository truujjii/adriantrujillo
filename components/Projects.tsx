'use client'

import { useLang } from '@/lib/i18n'
import { Reveal } from './Reveal'
import { ExternalLink, ArrowRight } from './icons'
import styles from './Projects.module.css'

export function Projects() {
  const { t } = useLang()

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">{t.projects.subtitle}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2>{t.projects.title}</h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {t.projects.items.map((p, i) => (
            <Reveal key={i} delay={i * 0.08} className={styles.cardWrap}>
              <article className={`card ${styles.card}`} data-cursor="grow">
                <div className={styles.glow} aria-hidden />
                <div className={styles.top}>
                  <span className={styles.year}>{p.year}</span>
                  {p.link && (
                    <a
                      href={p.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.linkBtn}
                      aria-label={`${p.title} — ${p.link.label}`}
                    >
                      <ExternalLink />
                    </a>
                  )}
                </div>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.subtitle}>{p.subtitle}</p>
                <p className={styles.desc}>{p.description}</p>
                <div className={styles.tags}>
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a href={p.link.href} target="_blank" rel="noreferrer" className={styles.cta}>
                    {p.link.label}
                    <ArrowRight />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
