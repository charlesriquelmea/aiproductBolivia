"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy } from "@/lib/translations"

interface EntryOfferHeroProps {
  c: Copy
  scrollToForm: () => void
}

export function EntryOfferHero({ c, scrollToForm }: EntryOfferHeroProps) {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto relative"
      >
        <div className="text-center mb-8">
          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-4 text-sm px-4 py-1">
            {c.entryBadge}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            {c.entryTitle}
          </h2>
          <p className="text-xl md:text-2xl text-emerald-400 font-bold mb-2">
            {c.entryAccent}
          </p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {c.entrySubtext}
          </p>
        </div>

        <Card className="bg-linear-to-br from-emerald-500/10 via-black to-black border-emerald-500/30 rounded-3xl p-8 md:p-10 backdrop-blur">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {c.entrySprints.map((sprint, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-3">{sprint.icon}</div>
                <div className="text-2xl font-black text-white mb-2">{sprint.title}</div>
                <div className="text-white/60 text-sm">{sprint.desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-black/40 border border-emerald-500/20 rounded-2xl p-6 mb-6">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              {c.entryOutcomeHeader}
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {c.entryOutcomeList.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 text-sm mt-0.5">→</span>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={scrollToForm}
            className="w-full bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-xl py-6 rounded-2xl animate-pulse-glow shadow-lg shadow-emerald-500/20"
          >
            {c.entryCta}
          </Button>

          <p className="text-center text-white/40 text-sm mt-4">
            {c.entryGuarantee}
          </p>
        </Card>
      </motion.div>
    </section>
  )
}
