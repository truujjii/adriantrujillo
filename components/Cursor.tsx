'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Subtle custom cursor: a small solid dot + a lagging ring that grows over
 * interactive elements. Only mounts on fine-pointer (desktop) devices.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    setEnabled(true)

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const t = e.target as HTMLElement | null
      setActive(!!t?.closest('a, button, [data-cursor="grow"]'))
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} aria-hidden />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: active ? 1.8 : 1, opacity: active ? 0.9 : 0.5 }}
        transition={{ duration: 0.25 }}
        aria-hidden
      />
    </>
  )
}
