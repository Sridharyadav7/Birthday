"use client"

import React from "react"
import { cn } from "@/lib/utils"

export default function PolaroidCard({
  frontLabel = "Memory",
  backText,
  className,
}: {
  frontLabel?: string
  backText: string
  className?: string
}) {
  const [flipped, setFlipped] = React.useState(false)
  return (
    <div className={cn("group perspective", className)}>
      <div
        className="relative h-40 w-32 cursor-pointer [transform-style:preserve-3d] transition-transform duration-500"
        onClick={() => setFlipped((s) => !s)}
        style={{ transform: `rotateY(${flipped ? 180 : 0}deg)` }}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-card border-2 border-foreground rounded-sm doodle-outline p-2 [backface-visibility:hidden]">
          <div className="h-24 bg-muted rounded-sm mb-2 flex items-center justify-center text-muted-foreground">
            <span className="font-serif text-lg">★</span>
          </div>
          <p className="text-center font-serif text-sm"> {frontLabel} </p>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rotate-y-180 bg-card border-2 border-foreground rounded-sm doodle-outline p-2 [backface-visibility:hidden]">
          <p className="font-serif text-sm text-pretty">{backText}</p>
        </div>
      </div>
    </div>
  )
}
