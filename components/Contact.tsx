'use client'

import { useLang } from '@/lib/i18n'
import { contactInfo } from '@/content/data'
import { Reveal } from './Reveal'
import { Magnetic } from './Magnetic'
import { Mail, Linkedin, Github, Download, ArrowRight } from './icons'
import styles from './Contact.module.css'

export function Contact() {
  const { t } = useLang()
  const c = t.contact

  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className="container">
        <div className={`card ${styles.card}`}>
          <div className={styles.glow} aria-hidden />
          <Reveal>
            <span className="eyebrow">{c.title}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className={styles.heading}>
              <a href={`mailto:${contactInfo.email}`} className="text-gradient">
                {contactInfo.email}
              </a>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles.sub}>{c.subtitle}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={styles.actions}>
              <Magnetic>
                <a href={`mailto:${contactInfo.email}`} className="btn btn-primary" data-cursor="grow">
                  <Mail />
                  {c.cta}
                  <ArrowRight />
                </a>
              </Magnetic>
              <Magnetic>
                <a href={contactInfo.cvFile} download className="btn btn-ghost" data-cursor="grow">
                  <Download />
                  {c.cvLabel}
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className={styles.channels}>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.channel}
              >
                <Linkedin />
                <span>
                  <small>LinkedIn</small>
                  /adriantrujillop
                </span>
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                className={styles.channel}
              >
                <Github />
                <span>
                  <small>GitHub</small>
                  /truujjii
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className={styles.locationNote}>{c.locationNote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
