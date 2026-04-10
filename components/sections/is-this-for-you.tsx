"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Copy } from "@/lib/translations"

interface IsThisForYouProps {
  c: Copy
}

export function IsThisForYou({ c }: IsThisForYouProps) {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-white">
          {c.forYouTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-500/5 border-green-500/20 rounded-2xl p-6">
            <h3 className="text-green-400 font-black text-xl mb-6 flex items-center gap-2">
              <span>{c.forYouYes.icon}</span>
              <span>{c.forYouYes.title}</span>
            </h3>
            <ul className="space-y-4">
              {c.forYouYes.items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-white/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-rose-500/5 border-rose-500/20 rounded-2xl p-6">
            <h3 className="text-rose-400 font-black text-xl mb-6 flex items-center gap-2">
              <span>{c.forYouNo.icon}</span>
              <span>{c.forYouNo.title}</span>
            </h3>
            <ul className="space-y-4">
              {c.forYouNo.items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-rose-400 mt-1">•</span>
                  <span className="text-white/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}
