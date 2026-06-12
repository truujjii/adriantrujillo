'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { content, type Locale, type Content } from '@/content/data'

interface LangContextValue {
  lang: Locale
  setLang: (l: Locale) => void
  toggle: () => void
  t: Content
}

const LangContext = createContext<LangContextValue | null>(null)

const STORAGE_KEY = 'at-lang'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Locale>('en')

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
      if (stored === 'en' || stored === 'es') {
        setLangState(stored)
        document.documentElement.setAttribute('lang', stored)
      }
    } catch {
      /* ignore */
    }
  }, [])

  const setLang = useCallback((l: Locale) => {
    setLangState(l)
    document.documentElement.setAttribute('lang', l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }, [])

  const toggle = useCallback(() => {
    setLang(lang === 'en' ? 'es' : 'en')
  }, [lang, setLang])

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
