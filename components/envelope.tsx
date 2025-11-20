"use client"

import React from "react"
import { motion } from "framer-motion"

export default function Envelope({
  message,
}: {
  message: string
}) {
  const [open, setOpen] = React.useState(false)
  return (
    <div
      className="relative mx-auto w-80 h-56"
      onClick={() => setOpen((s) => !s)}
      role="button"
      aria-label="Open letter"
    >
      {/* Envelope body */}
      <div className="absolute inset-0 rounded-md bg-[oklch(0.97_0.02_90)] border-2 border-foreground doodle-outline" />
      {/* Flap */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-28 origin-top bg-[oklch(0.92_0.07_350)]/40 border-b-2 border-foreground"
        animate={{ rotateX: open ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      />
      {/* Inside card */}
      <motion.div
        className="absolute inset-x-4 top-8 bottom-4 rounded-md bg-card border-2 border-foreground p-4 overflow-y-auto"
        animate={{ y: open ? -6 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-serif text-lg leading-relaxed text-pretty whitespace-pre-wrap">{message}</p>
        {/* Sparkles */}
        <div className="absolute right-3 top-3">
          <div className="w-2 h-2 rounded-full bg-accent animate-sparkle" />
        </div>
        <div className="absolute left-6 bottom-3">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-sparkle" style={{ animationDelay: "300ms" }} />
        </div>
      </motion.div>
    </div>
  )
}
