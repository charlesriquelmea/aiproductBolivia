"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Copy } from "@/lib/translations"

interface VibeCodingProps {
  c: Copy
}

export function VibeCodingSection({ c }: VibeCodingProps) {
  return (
    <section
      id="metodo"
      className="py-20 px-4 bg-black"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-5 text-balance">
            {c.vibeTitle}
          </h2>
          <p className="text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
            {c.vibeIntro}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-10 mb-14">
          {c.vibeSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex items-start gap-6"
            >
              <span
                className="text-5xl md:text-6xl font-black leading-none shrink-0 select-none text-emerald-500 min-w-[3.5rem]"
              >
                {step.num}
              </span>
              <div className="pt-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alert box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Alert className="border-emerald-500/30 bg-emerald-500/5 rounded-2xl p-6">
            <AlertTitle className="text-emerald-400 font-bold text-lg mb-4">
              {c.alertTitle}
            </AlertTitle>
            <AlertDescription>
              <ul className="flex flex-col gap-3">
                {c.alertBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-white/70 leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        </motion.div>
      </div>
    </section>
  )
}
