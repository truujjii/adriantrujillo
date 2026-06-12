'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { useLang } from '@/lib/i18n'
import type { StatItem } from '@/content/data'
import { StaggerGroup, StaggerItem } from './Reveal'
import styles from './Stats.module.css'

function CountUp({ stat }: { stat: StatItem }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [n, setN] = useState(0)

  useEffect(() => {
    if (stat.value === null || !inView) return
    if (reduce) {
      setN(stat.value)
      return
    }
    const target = stat.value
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, stat.value, reduce])

  return (
    <span ref={ref} className={styles.value}>
      {stat.value === null ? (
        stat.display
      ) : (
        <>
          {stat.prefix}
          {n}
          {stat.suffix}
        </>
      )}
    </span>
  )
}

export function Stats() {
  const { t } = useLang()

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <StaggerGroup className={styles.grid}>
          {t.stats.map((s, i) => (
            <StaggerItem key={i} className={styles.cellWrap}>
              <div className={styles.cell}>
                <CountUp stat={s} />
                <span className={styles.label}>{s.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
