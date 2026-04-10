"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy } from "@/lib/translations"

interface SupportSystemProps {
  c: Copy
}

export function SupportSystem({ c }: SupportSystemProps) {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-white">
          {c.supportTitle}
        </h2>
        <p className="text-xl text-center text-white/50 mb-12">
          {c.supportSubtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {c.supportItems.map((support, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="bg-white/5 border-white/10 rounded-2xl p-6 hover:border-white/20 transition h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl">{support.icon}</span>
                  <Badge className={support.badgeColor}>
                    {support.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{support.title}</h3>
                <p className="text-white/60 leading-relaxed">{support.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
