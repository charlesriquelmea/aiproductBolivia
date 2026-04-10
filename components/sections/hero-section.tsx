"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Copy } from "@/lib/translations"

interface HeroSectionProps {
  c: Copy
}

export function HeroSection({ c }: HeroSectionProps) {

  const scrollToForm = () => {
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % c.heroPhrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [c.heroPhrases.length])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto text-center"
      >
        <div className="h-20 md:h-24 mb-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentPhrase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-emerald-400"
            >
              {c.heroPhrases[currentPhrase]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
          {c.heroSubtitle}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center break-all mb-12">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-400 text-white 
            font-bold text-lg px-8 py-6 rounded-xl animate-pulse-glow"
          >
            {c.heroCta}
          </Button>
          <button
            onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white/40 hover:text-white/60 transition"
          >
            {c.heroSecondaryCta}
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {c.heroStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + stat.delay }}
              className="bg-white/5 rounded-xl p-4 text-center"
            >
              <p className="font-bold text-lg text-white">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
