"use client"

import { motion } from "framer-motion"
import { Building2, Wrench, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Copy } from "@/lib/translations"

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Wrench,
  Star,
}

interface CredibilityProps {
  c: Copy
}

export function CredibilitySection({ c }: CredibilityProps) {
  return (
    <section
      id="credibilidad"
      className="py-20 px-4 bg-black"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <p className="text-emerald-500 text-sm font-bold uppercase tracking-widest mb-4">
            {c.credibilityTitle}
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white text-balance">
            {c.credibilitySubtitle}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {c.credibilityCards.map((card, i) => {
            const Icon = iconMap[card.icon] ?? Star
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card
                  className="h-full border border-white/10 bg-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all"
                >
                  <CardContent className="p-8 flex flex-col gap-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-emerald-500/10 border border-emerald-500/20"
                    >
                      <Icon size={24} className="text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-3 text-balance">
                        {card.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {card.body}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
