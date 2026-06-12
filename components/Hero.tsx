'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useLang } from '@/lib/i18n'
import { contactInfo } from '@/content/data'
import { Magnetic } from './Magnetic'
import { ArrowRight, Download, Linkedin, Github, Mail } from './icons'
import styles from './Hero.module.css'

export function Hero() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const roles = t.hero.roles
  const [i, setI] = useState(0)

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setI((p) => (p + 1) % roles.length), 2800)
    return () => clearInterval(id)
  }, [roles.length, reduce])

  // Reset index when language changes so we don't index past the array.
  useEffect(() => setI(0), [roles])

  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section className={styles.hero} id="top">
      <div className={styles.bg} aria-hidden>
        <div className={styles.grid} />
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={styles.noise} />
      </div>

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.eyebrowWrap}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="eyebrow">{t.hero.eyebrow}</span>
        </motion.div>

        <h1 className={styles.name}>
          {t.hero.name.split(' ').map((word, wi) => (
            <span key={wi} className={styles.wordWrap}>
              <motion.span
                className={styles.word}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.1 + wi * 0.08 }}
              >
                {wi === 1 ? <span className="text-gradient">{word}</span> : word}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className={styles.rotator} aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.span
              key={i + roles[i]}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -18 }}
              transition={{ duration: 0.5, ease }}
              className={styles.role}
            >
              {roles[i]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          className={styles.summary}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.45 }}
        >
          {t.hero.summary}
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.55 }}
        >
          <Magnetic>
            <a href="#contact" className="btn btn-primary" data-cursor="grow">
              {t.hero.ctaContact}
              <ArrowRight />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={contactInfo.cvFile}
              download
              className="btn btn-ghost"
              data-cursor="grow"
            >
              <Download />
              {t.hero.ctaCV}
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          className={styles.footRow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="pill">
            <span className="dot-live" />
            {t.hero.locationPill}
          </span>
          <span className={styles.availability}>{t.hero.availability}</span>
          <div className={styles.socials}>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href={contactInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a href={`mailto:${contactInfo.email}`} aria-label="Email">
              <Mail />
            </a>
          </div>
        </motion.div>
      </div>

      <div className={styles.scrollHint} aria-hidden>
        <span />
      </div>
    </section>
  )
}
