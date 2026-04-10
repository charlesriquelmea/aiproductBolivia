"use client"

import { INSTRUCTOR_INITIALS, INSTRUCTOR_NAME, Copy } from "@/lib/translations"
import { motion } from "framer-motion"

interface InstructorProps {
  c: Copy
}

interface FounderCardProps {
  initials: string
  name: string
  badge: string
  bio: string
  stats?: { value: string; label: string }[]
  gradientFrom?: string
  gradientTo?: string
  delay?: number
}

function FounderCard({
  initials,
  name,
  badge,
  bio,
  stats,
  gradientFrom = "#10b981", // Emerald 500
  gradientTo = "#047857",   // Emerald 700
  delay = 0,
}: FounderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 p-8 bg-white/5 hover:border-emerald-500/30 transition-all"
    >
      {/* Avatar */}
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-black text-white border-2 border-emerald-500/50 select-none shadow-lg shadow-emerald-500/20"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
          }}
          aria-label={`Foto de ${name}`}
        >
          {initials}
        </div>
        <span className="inline-flex items-center px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-semibold text-center mt-2">
          {badge}
        </span>
      </div>

      {/* Bio */}
      <div className="flex flex-col items-center text-center gap-4 w-full">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-white/60 leading-relaxed text-sm">{bio}</p>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 gap-3 w-full justify-between mt-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-3 rounded-xl border border-white/5 bg-black/40 text-center"
              >
                <span className="text-xl font-black text-emerald-400 tabular-nums">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-wider text-white/30 mt-1 leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function InstructorSection({ c }: InstructorProps) {
  const DANIEL_INITIALS = "DC"
  const DANIEL_NAME = "Daniel Castiblanco"

  return (
    <section
      id="instructor"
      className="py-20 px-4 bg-black"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-500 text-sm font-semibold uppercase tracking-widest mb-4">
            {c.sectionTeach}
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            {c.sectionFounders}
          </h2>
        </motion.div>

        {/* Two-column founder cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FounderCard
            initials={INSTRUCTOR_INITIALS}
            name={INSTRUCTOR_NAME}
            badge={c.founderBadge}
            bio={c.instructorBio}
            stats={c.instructorStats}
            delay={0}
          />
          <FounderCard
            initials={DANIEL_INITIALS}
            name={DANIEL_NAME}
            badge={c.instructorBadge}
            bio={c.instructorBio}
            stats={c.instructorStats}
            gradientFrom="#6366f1" // Indigo 500
            gradientTo="#4338ca"   // Indigo 700
            delay={0.15}
          />
        </div>
      </div>
    </section>
  )
}
