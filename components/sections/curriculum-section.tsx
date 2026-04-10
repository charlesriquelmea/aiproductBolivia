"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Copy } from "@/lib/translations"

interface CurriculumSectionProps {
  c: Copy
}

export function CurriculumSection({ c }: CurriculumSectionProps) {
  return (
    <section id="curriculum" className="py-20 px-4 bg-white/2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-white">
          {c.currTitle}
        </h2>

        <div className="space-y-6">
          {c.currSprints.map((sprint, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Badge className={i === 0 ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"}>
                  {sprint.badge}
                </Badge>
                <span className="font-bold text-lg text-white">{sprint.title}</span>
              </div>

              <ul className="space-y-3 mb-4">
                {sprint.items.map((item, j) => (
                  <li key={j} className="flex gap-2">
                    <span className={i === 0 ? "text-emerald-400" : "text-indigo-400"}>✓</span>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <div className={`${i === 0 ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300" : "bg-indigo-500/10 border-indigo-500/20 text-indigo-300"} border rounded-xl p-4`}>
                <p className="leading-relaxed text-sm">
                  {sprint.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
