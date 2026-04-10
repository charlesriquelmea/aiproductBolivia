"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Copy } from "@/lib/translations"

interface WhatYouBuildProps {
  c: Copy
}

export function WhatYouBuild({ c }: WhatYouBuildProps) {
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
          {c.whatTitle}
        </h2>
        <p className="text-xl text-center text-white/50 mb-12">
          {c.whatSubtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {c.whatProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="bg-white/5 border-white/10 p-6 hover:scale-105 hover:border-white/20 transition-all cursor-pointer h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl">{project.icon}</span>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                    {project.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-white/60 leading-relaxed">{project.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
