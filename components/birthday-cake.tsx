"use client"

import { motion, AnimatePresence } from "framer-motion"

function Candle({
  lit,
  delay = 0,
}: {
  lit: boolean
  delay?: number
}) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Wick */}
      <div className="w-0.5 h-3 bg-foreground" />

      {/* Flame / Smoke */}
      <AnimatePresence mode="wait">
        {lit ? (
          /* 🔥 FLAME WITH SOFT FLICKER + BLOW-AWAY EXIT */
          <motion.div
            key="flame"
            className="w-2 h-3 rounded-full"
            style={{ background: "oklch(0.93 0.17 80)" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: [1, 1.05, 0.98, 1],
              y: [0, -1, 1, 0],
            }}
            exit={{
              opacity: 0,
              scale: 0.3,
              x: 12,
              y: -15,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            transition={{
              duration: 1.2,
              delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ) : (
          /* 💨 SMOKE — FLOATING UPWARD PUFFS */
          <motion.div
            key="smoke"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0.4, 0.8, 0],
              y: [-3, -12, -22],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              repeatDelay: 0.2,
            }}
            className="relative"
          >
            {/* Multiple soft smoke dots */}
            <div className="w-2 h-2 rounded-full bg-muted/60 absolute" />
            <div className="w-1.5 h-1.5 rounded-full bg-muted/50 absolute left-2" />
            <div className="w-1 h-1 rounded-full bg-muted/40 absolute left-1 top-3" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Candle Body */}
      <div className="w-2 h-6 rounded-sm bg-[oklch(0.9_0.06_230)] border border-border mt-1" />
    </div>
  )
}

export default function BirthdayCake({
  candlesLit,
}: {
  candlesLit: boolean
}) {
  return (
    <div className="mx-auto doodle-outline bg-secondary p-6 max-w-md">
      {/* Cake top platform shadow */}
      <div className="relative mx-auto mb-4 h-2 w-64 rounded-full bg-[oklch(0.92_0.05_310)]" />

      {/* Candles */}
      <div className="flex items-end justify-center gap-5 mb-4">
        <Candle lit={candlesLit} delay={0} />
        <Candle lit={candlesLit} delay={0.2} />
        <Candle lit={candlesLit} delay={0.05} />
        <Candle lit={candlesLit} delay={0.3} />
        <Candle lit={candlesLit} delay={0.12} />
      </div>

      {/* Cake body */}
      <div className="mx-auto h-40 w-72 rounded-lg border-2 border-[oklch(0.9_0.06_230)] bg-[oklch(0.97_0.02_90)] relative overflow-hidden">
        {/* Top frosting layers */}
        <div className="absolute inset-x-0 top-8 h-6 bg-[oklch(0.92_0.07_350)]/40" />
        <div className="absolute inset-x-0 top-20 h-6 bg-[oklch(0.93_0.05_310)]/40" />

        {/* Sprinkles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-2 rounded-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background:
                  i % 3 === 0
                    ? "oklch(0.92 0.07 350)"
                    : i % 3 === 1
                    ? "oklch(0.9 0.06 230)"
                    : "oklch(0.93 0.05 310)",
                transform: `rotate(${Math.random() * 60 - 30}deg)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
