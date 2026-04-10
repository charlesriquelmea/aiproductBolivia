"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Copy } from "@/lib/translations"

interface AutomationShowcaseProps {
  c: Copy
}

export function AutomationShowcase({ c }: AutomationShowcaseProps) {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <Card className="bg-white/2 border-emerald-500/20 rounded-2xl p-8">
          <div className="mb-6">
            <p className="text-emerald-400 uppercase tracking-widest text-xs font-bold mb-3">
              {c.autoEyebrow}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {c.autoTitle}
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            {c.autoNodes.map((node, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`${node.highlight
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : 'bg-white/10 border-white/10'
                    } border rounded-xl p-4 text-center min-w-[120px] w-full md:w-auto`}
                >
                  <div className="text-3xl mb-2">{node.icon}</div>
                  <div className="font-bold mb-1 text-white">{node.label}</div>
                  <div className="text-xs text-white/60">{node.desc}</div>
                </motion.div>

                {i < c.autoNodes.length - 1 && (
                  <div className="hidden md:block">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                      viewport={{ once: true, amount: 0.2 }}
                      className="relative w-8 h-0.5 bg-emerald-500/30"
                    >
                      <motion.div
                        animate={{ x: [-8, 24] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-400 rounded-full"
                      />
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
            <p className="text-white/70 text-sm leading-relaxed">
              {c.autoFooter}
            </p>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}
