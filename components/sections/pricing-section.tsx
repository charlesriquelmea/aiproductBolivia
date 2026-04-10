"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy } from "@/lib/translations"

interface PricingSectionProps {
  c: Copy
  scrollToForm: () => void
}

export function PricingSection({ c, scrollToForm }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 px-4 bg-white/2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-lg mx-auto"
      >
        <Card className="bg-linear-to-b from-emerald-500/10 to-transparent border-emerald-500/30 rounded-3xl p-8 hover:shadow-emerald-500/20 hover:shadow-2xl transition">
          <Badge className="bg-emerald-500 text-black text-xs font-bold mb-3">
            {c.priceBadge}
          </Badge>
          <p className="text-black/40 text-sm mb-2">{c.priceName}</p>
          <div className="flex items-baseline mb-1">
            <span className="text-yellow-400">★★★★★</span>
          </div>
          <div className="flex items-baseline mb-1">
            <span className="text-6xl font-black">${c.priceValue}</span>
            <span className="text-xl text-black/60 ml-2">{c.priceCurrency}</span>
          </div>
          <p className="text-black/60 text-sm mb-8">
            {c.priceDetail}
          </p>

          <div className="space-y-6 mb-8">
            {c.priceSections.map((section, i) => (
              <div key={i} className={i > 0 ? "border-t border-white/10 pt-6" : ""}>
                <p className="text-black text-xs uppercase tracking-widest mb-3">
                  {section.title}
                </p>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm">
                      <span className="text-emerald-400">✓</span>
                      <span className="text-black/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Button
            onClick={scrollToForm}
            className="w-full bg-emerald-500 hover:bg-emerald-400 font-black text-lg py-4 rounded-xl animate-pulse-glow"
          >
            {c.priceCta}
          </Button>

          <div className="flex items-center justify-center gap-2 mt-4 text-black/40 text-sm">
            <span className="text-green-500">🛡️</span>
            <span>{c.priceGuarantee}</span>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}
