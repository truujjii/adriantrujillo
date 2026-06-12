'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

/**
 * Wraps a child so it gently follows the cursor on hover (desktop pointer only).
 * Falls back to a plain wrapper when the user prefers reduced motion.
 */
export function Magnetic({ children, strength = 0.4 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 })

  function onMove(e: React.MouseEvent<HTMLSpanElement>) {
    if (reduce) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const mx = e.clientX - (rect.left + rect.width / 2)
    const my = e.clientY - (rect.top + rect.height / 2)
    x.set(mx * strength)
    y.set(my * strength)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, display: 'inline-flex' }}
    >
      {children}
    </motion.span>
  )
}
