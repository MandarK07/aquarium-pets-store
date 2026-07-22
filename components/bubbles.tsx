'use client'

import { useMemo } from 'react'
import { cn } from '@/lib/utils'

export function Bubbles({ className }: { className?: string }) {
  const bubbles = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        left: `${(i * 7 + 3) % 100}%`,
        size: 4 + ((i * 5) % 16),
        duration: 7 + ((i * 3) % 9),
        delay: (i * 1.3) % 8,
      })),
    [],
  )

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="animate-bubble absolute bottom-0 rounded-full bg-current"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
