'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/lib/i18n'
import { useTheme } from '@/lib/theme'
import { Sun, Moon } from './icons'
import styles from './Nav.module.css'

const SECTIONS = ['about', 'skills', 'experience', 'projects', 'contact'] as const

export function Nav() {
  const { t, lang, toggle: toggleLang } = useLang()
  const { theme, toggle: toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label="Adrián Trujillo — home">
          <span className={styles.mark}>AT</span>
          <span className={styles.brandName}>Adrián Trujillo</span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${styles.link} ${active === id ? styles.linkActive : ''}`}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.langToggle}
            onClick={toggleLang}
            aria-label={`Switch language, current ${lang === 'en' ? 'English' : 'Spanish'}`}
          >
            <span className={lang === 'en' ? styles.langOn : ''}>EN</span>
            <span className={styles.langSep}>/</span>
            <span className={lang === 'es' ? styles.langOn : ''}>ES</span>
          </button>
          <button
            className={styles.iconBtn}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </header>
  )
}
