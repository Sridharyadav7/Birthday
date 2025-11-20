"use client"
import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import BirthdayCake from "@/components/birthday-cake"
import PolaroidCard from "@/components/polaroid-card"
import Envelope from "@/components/envelope"
import { Balloon, ConfettiPiece, Flower, Heart, Star } from "@/components/doodle-elements"

const variants = {
  enter: { x: 120, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -120, opacity: 0 },
}

export default function Page() {
  const [step, setStep] = React.useState(0)
  const [candlesLit, setCandlesLit] = React.useState(true)
  const [showWish, setShowWish] = React.useState(false)
  const [musicReady, setMusicReady] = React.useState(false)

  // Background music control: start after first interaction to comply with autoplay policies
  React.useEffect(() => {
    const audio = document.getElementById("bg-music") as HTMLAudioElement | null
    if (!audio) return
    if (musicReady) {
      audio.volume = 0.25
      audio.play().catch(() => {
        /* user gesture may be needed */
      })
    } else {
      audio.pause()
      audio.currentTime = 0
    }
  }, [musicReady])

  function next() {
    if (step === 0 && !musicReady) setMusicReady(true)
    setStep((s) => Math.min(4, s + 1))
  }

  async function blowCandles() {
    // Extinguish flames with smoke
    setCandlesLit(false)
    setTimeout(() => {
      setShowWish(true)
    }, 800)

  }

  return (
    <main className="min-h-svh bg-background text-foreground overflow-hidden">
      {/* floating decorative doodles */}
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <Heart className="absolute top-6 left-6 animate-float" />
        <Star className="absolute top-10 right-8 animate-float" />
        <Flower className="absolute bottom-10 left-10 animate-float" />
      </div>

      {/* Audio element */}
      <audio id="bg-music" src="/audio/soft-love-theme.mp3" loop aria-hidden />

      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="mb-6 text-center">
          <h1 className="font-serif text-5xl md:text-4xl text-balance">To my Baby 💗</h1>
        </div>

        <div className="relative h-[520px]">
          <AnimatePresence mode="popLayout" initial={false}>
            {step === 0 && (
              <motion.section
                key="page-1"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Page 1 – Birthday Card */}
                <div className="h-full flex flex-col items-center justify-center gap-6">
                  <div className="text-center">
                    <h2 className="font-serif text-4xl md:text-5xl text-pretty">Happy Birthday Baby 💖</h2>
                    <p className="mt-2 text-2xl">Can’t believe you’re 21 now!</p>
                  </div>

                  {/* Doodle decorations */}
                  <div className="flex items-center justify-center gap-6">
                    <Heart wiggle />
                    <Star wiggle />
                    <Flower />
                  </div>

                  <Button
                    onClick={next}
                    className="mt-6 bg-primary text-primary-foreground hover:animate-wiggle px-6 py-3 text-lg"
                    aria-label="Next page"
                  >
                    Next ➜
                  </Button>
                </div>
              </motion.section>
            )}

            {step === 1 && (
              <motion.section
                key="page-2"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Page 2 – Candle Page */}
                <div className="h-full flex flex-col items-center justify-center gap-6">
                  <BirthdayCake candlesLit={candlesLit} />
                  <div className="flex items-center gap-3">
                    <Button
                      onClick={blowCandles}
                      className="bg-accent text-accent-foreground hover:animate-wiggle px-6 py-3 text-lg"
                      aria-label="Blow the candles"
                    >
                      Blow Candles 🎂
                    </Button>
                    <Button onClick={next} className="bg-primary text-primary-foreground hover:animate-wiggle px-6 py-3 text-lg">
                      Next ➜
                    </Button>
                  </div>
                  {showWish && <p className="font-serif text-xl mt-2">You did it! Make a wish 💫</p>}
                </div>
              </motion.section>
            )}

            {step === 2 && (
              <motion.section
                key="page-3"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Page 3 – Memory Page */}
                <div className="h-full flex flex-col items-center justify-center gap-6">
                  <div className="doodle-outline p-4 bg-secondary max-h-[65vh] overflow-y-auto">
                    <div className="relative w-[580px] max-w-full">
                      <div className="absolute -top-4 -left-4">
                        <Heart size={28} />
                      </div>
                      <div className="absolute -top-3 right-4">
                        <Star size={24} />
                      </div>

                      <div className="grid grid-cols-3 gap-6 place-items-center">
                        <PolaroidCard frontLabel="01" backText="You’re my favorite person." />
                        <PolaroidCard frontLabel="02" backText="Every day with you feels special." />
                        <PolaroidCard frontLabel="03" backText="You make my world brighter." />
                        <PolaroidCard frontLabel="04" backText="I love the way you laugh." />
                        <PolaroidCard frontLabel="05" backText="You make me want to be better." />
                        <PolaroidCard frontLabel="06" backText="You’re the warmest part of my life." />
                        <PolaroidCard frontLabel="07" backText="You understand me like no one else." />
                        <PolaroidCard frontLabel="08" backText="You make even simple moments magical." />
                        <PolaroidCard frontLabel="09" backText="I want to be with you all the time." />
                        <PolaroidCard frontLabel="10" backText="I love your sense of humour." />
                        <PolaroidCard frontLabel="11" backText="You make home feel like a person." />
                        <PolaroidCard frontLabel="12" backText="Being with you feels like my life is finally aligned." />
                        <PolaroidCard frontLabel="13" backText="You have the kindest heart I know." />
                        <PolaroidCard frontLabel="14" backText="Your smile makes everything feel lighter." />
                        <PolaroidCard frontLabel="15" backText="You make my dreams feel possible." />
                        <PolaroidCard frontLabel="16" backText="I’m thankful for the little things you do." />
                        <PolaroidCard frontLabel="17" backText="You’re my calm and my excitement together." />
                        <PolaroidCard frontLabel="18" backText="I love how you care so deeply." />
                        <PolaroidCard frontLabel="19" backText="I love your eyes so much." />
                        <PolaroidCard frontLabel="20" backText="You’re my favorite part of every day." />
                        <PolaroidCard frontLabel="21" backText="I’m lucky to love you — today and always." />
                      </div>
                    </div>
                  </div>

                  <Button onClick={next} className="bg-primary text-primary-foreground hover:animate-wiggle px-6 py-3 text-lg">
                    Next ➜
                  </Button>
                </div>

              </motion.section>
            )}

            {step === 3 && (
              <motion.section
                key="page-4"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="min-h-screen flex flex-col items-center justify-center gap-10 py-10 px-6">
                  <div className="max-w-2xl w-full bg-secondary doodle-outline p-10 text-lg leading-relaxed whitespace-pre-line shadow-md rounded-xl">
                    My love,

                    From the beginning to right now, you’ve made my world feel softer, brighter, and safer. Thank you for your warmth, your joy, and the quiet ways you care. Loving you is the best thing in my life. I’m lucky to love you — today and every day.

                    Always yours.
                  </div>
                  
                 <h2 className="font-serif text-3xl md:text-4xl text-pretty text-center">Love youuu ❤️</h2>
                  <Button
                    onClick={next}
                    className="bg-primary text-primary-foreground hover:animate-wiggle px-6 py-3 text-lg"
                  >
                    Next ➜
                  </Button>
                </div>
              </motion.section>

            )}

            {step === 4 && (
              <motion.section
                key="page-5"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Page 5 – Ending Page */}
                <div className="h-full flex flex-col items-center justify-center gap-6 relative">
                  <h2 className="font-serif text-3xl md:text-4xl text-pretty text-center">Happy Birthday Shaanu ❤️</h2>
                  
                 <h4 className="font-serif text-3xl md:text-4xl text-pretty text-center">You are the Love of my life. ❤️</h4>
                  <p className="text-center text-lg max-w-xl text-pretty">
                    Here’s to more memories, laughter, and love with you.
                  </p>

                  {/* Balloons */}
                  <div className="absolute inset-0 pointer-events-none" aria-hidden>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute animate-float"
                        style={{
                          left: `${(i + 1) * (100 / 8)}%`,
                          bottom: `${10 + (i % 3) * 12}%`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      >
                        <Balloon
                          size={44}
                          colorClass={i % 2 === 0 ? "text-[oklch(0.9_0.06_230)]" : "text-[oklch(0.92_0.07_350)]"}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Confetti */}
                  <div className="absolute inset-x-0 top-10 pointer-events-none" aria-hidden>
                    {Array.from({ length: 24 }).map((_, i) => (
                      <ConfettiPiece
                        key={i}
                        className="mx-1 inline-block"
                        colorClass={
                          i % 3 === 0
                            ? "text-[oklch(0.92_0.07_350)]"
                            : i % 3 === 1
                              ? "text-[oklch(0.9_0.06_230)]"
                              : "text-[oklch(0.93_0.05_310)]"
                        }
                        delay={i * 0.05}
                      />
                    ))}
                  </div>

                  <div className="mt-4">
                    <Button
                      onClick={() => {
                        setStep(0)
                        setCandlesLit(true)
                        setShowWish(false)
                      }}
                      className="bg-accent text-accent-foreground hover:animate-wiggle px-6 py-3 text-lg"
                    >
                      Replay
                    </Button>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}
