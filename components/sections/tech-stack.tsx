"use client"

import { motion } from "framer-motion"
import { Copy } from "@/lib/translations"

interface TechStackProps {
  c: Copy
}

export function TechStack({ c }: TechStackProps) {
  return (
    <section id="tech-stack" className="py-20 px-4 bg-white/2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-white">
          {c.techTitle}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {c.techTools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-emerald-500/30 transition"
            >
              <div className="text-3xl mb-3">{tool.icon}</div>
              <h3 className="font-bold mb-2 text-white">{tool.name}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
