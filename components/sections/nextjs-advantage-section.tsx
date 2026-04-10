"use client"

import { motion } from "framer-motion"
import { Search, Zap, TrendingUp, Rocket } from "lucide-react"
import { Copy } from "@/lib/translations"

const ICON_MAP: Record<string, React.ElementType> = { Search, Zap, TrendingUp, Rocket }

interface NextJsAdvantageProps {
  c: Copy
}

export function NextJsAdvantageSection({ c }: NextJsAdvantageProps) {
  return (
    <section
      id="nextjs"
      className="py-20 px-4 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5 text-balance">
            {c.nextTitle}
          </h2>
          <p className="text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
            {c.nextIntro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {c.nextCards.map((card, i) => {
            const Icon = ICON_MAP[card.icon] ?? Zap
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                    <Icon size={24} className="text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white pt-1">{card.title}</h3>
                </div>
                <p className="text-white/60 leading-relaxed text-sm">{card.body}</p>
                <div className="mt-auto">
                  <span className="inline-flex px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                    {card.stat}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Authority quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 text-center text-xl text-white/40 italic leading-relaxed border-t border-white/5 pt-10 max-w-3xl mx-auto"
        >
          &ldquo;{c.nextQuote}&rdquo;
        </motion.blockquote>
      </div>
    </section>
  )
}
