"use client"
import { motion } from "framer-motion"

const strokeProps = {
  stroke: "currentColor",
  strokeWidth: 2,
  fill: "none",
  vectorEffect: "non-scaling-stroke",
}

export function Heart({
  className = "",
  colorClass = "text-[oklch(0.92_0.07_350)]", // pink accent
  size = 40,
  wiggle = false,
}: {
  className?: string
  colorClass?: string
  size?: number
  wiggle?: boolean
}) {
  return (
    <motion.svg
      className={`doodle-stroke ${colorClass} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      initial={false}
      animate={wiggle ? { rotate: [0, -3, 3, 0] } : undefined}
      transition={wiggle ? { duration: 1.2, repeat: Number.POSITIVE_INFINITY } : undefined}
    >
      <path
        {...strokeProps}
        d="M12 21s-6.716-4.421-9.172-8.115C1.077 10.62 1.62 7.8 4.05 6.64 6.48 5.482 8.7 7 9.6 8.2c.9-1.2 3.12-2.719 5.55-1.56 2.43 1.159 2.972 3.98 1.222 6.245C18.716 16.579 12 21 12 21z"
      />
    </motion.svg>
  )
}

export function Star({
  className = "",
  colorClass = "text-[oklch(0.9_0.06_230)]", // baby blue
  size = 34,
  wiggle = false,
}: { className?: string; colorClass?: string; size?: number; wiggle?: boolean }) {
  return (
    <motion.svg
      className={`doodle-stroke ${colorClass} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      initial={false}
      animate={wiggle ? { rotate: [0, 5, -5, 0] } : undefined}
      transition={wiggle ? { duration: 1.4, repeat: Number.POSITIVE_INFINITY } : undefined}
    >
      <path
        {...strokeProps}
        d="M12 3l2.472 5.87 6.39.516-4.86 3.99 1.535 6.223L12 16.9l-5.538 2.7 1.535-6.223-4.86-3.99 6.39-.516L12 3z"
      />
    </motion.svg>
  )
}

export function Flower({
  className = "",
  colorClass = "text-[oklch(0.93_0.05_310)]", // lavender
  size = 36,
}: { className?: string; colorClass?: string; size?: number }) {
  return (
    <svg className={`doodle-stroke ${colorClass} ${className}`} width={size} height={size} viewBox="0 0 24 24">
      <circle {...strokeProps} cx="12" cy="12" r="2.5" />
      <path
        {...strokeProps}
        d="M12 4c1.5 1.5 1.5 3 0 4.5-1.5-1.5-1.5-3 0-4.5zM4 12c1.5-1.5 3-1.5 4.5 0-1.5 1.5-3 1.5-4.5 0zM12 20c-1.5-1.5-1.5-3 0-4.5 1.5 1.5 1.5 3 0 4.5zM20 12c-1.5 1.5-3 1.5-4.5 0 1.5-1.5 3-1.5 4.5 0z"
      />
    </svg>
  )
}

export function Balloon({
  className = "",
  colorClass = "text-[oklch(0.9_0.06_230)]",
  size = 40,
}: { className?: string; colorClass?: string; size?: number }) {
  return (
    <svg className={`doodle-stroke ${colorClass} ${className}`} width={size} height={size} viewBox="0 0 24 24">
      <ellipse {...strokeProps} cx="12" cy="9" rx="6" ry="7" />
      <path {...strokeProps} d="M12 16c0 2 1 3 1 3s-1 1-1 3" />
      <path {...strokeProps} d="M12 16c-2 1-4 1-4 3" />
    </svg>
  )
}

export function ConfettiPiece({
  className = "",
  colorClass = "text-[oklch(0.92_0.07_350)]",
  size = 10,
  delay = 0,
}: { className?: string; colorClass?: string; size?: number; delay?: number }) {
  return (
    <motion.div
      className={`${colorClass} ${className}`}
      style={{ width: size, height: size, borderRadius: 2, backgroundColor: "currentColor" }}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: [0, 6, -2, 0], opacity: [0.8, 1, 0.9, 1] }}
      transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, delay }}
    />
  )
}
