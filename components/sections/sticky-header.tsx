"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Lang } from "@/lib/translations"

interface StickyHeaderProps {
  c: Copy
  lang: Lang
  setLang: (lang: Lang) => void
}


export function StickyHeader({ c, lang, setLang }: StickyHeaderProps) {

  const scrollToForm = () => {
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-black text-xl text-white">{c.navLogo}</span>
          <Badge className="bg-emerald-500 text-white">{c.navBadge}</Badge>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 mr-4 border-r border-white/10 pr-6">
            <button
              onClick={() => setLang('es')}
              className={`text-xs font-bold transition ${lang === 'es' ? 'text-emerald-400' : 'text-white/40 hover:text-white/60'}`}
            >
              ES
            </button>
            <span className="text-white/10">/</span>
            <button
              onClick={() => setLang('en')}
              className={`text-xs font-bold transition ${lang === 'en' ? 'text-emerald-400' : 'text-white/40 hover:text-white/60'}`}
            >
              EN
            </button>
          </div>

          {c.navLinks.map((link, i) => (
            <a key={i} href={link.href} className="text-white/60 hover:text-white transition">
              {link.label}
            </a>
          ))}
          <Button
            onClick={scrollToForm}
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold animate-pulse-glow"
          >
            {c.navCta}
          </Button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <div className="flex items-center gap-2 border-r border-white/10 pr-4">
            <button
              onClick={() => setLang('es')}
              className={`text-xs font-bold transition ${lang === 'es' ? 'text-emerald-400' : 'text-white/40'}`}
            >
              ES
            </button>
            <button
              onClick={() => setLang('en')}
              className={`text-xs font-bold transition ${lang === 'en' ? 'text-emerald-400' : 'text-white/40'}`}
            >
              EN
            </button>
          </div>
          <Button
            onClick={scrollToForm}
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm px-4 animate-pulse-glow"
          >
            {c.navCtaMobile}
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
