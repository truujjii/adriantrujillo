'use client'

import { useLang } from '@/lib/i18n'
import { contactInfo } from '@/content/data'
import { Linkedin, Github, Mail } from './icons'
import styles from './Footer.module.css'

export function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.mark}>AT</span>
          <span>
            © {year} Adrián Trujillo. {t.footer.rights}
          </span>
        </div>
        <div className={styles.right}>
          <span className={styles.built}>{t.footer.built}</span>
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
        </div>
      </div>
    </footer>
  )
}
