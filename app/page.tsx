'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { CredibilitySection } from '@/components/sections/credibility-section'
import { InstructorSection } from '@/components/sections/instructor-section'
import { NextJsAdvantageSection } from '@/components/sections/nextjs-advantage-section'
import { VibeCodingSection } from '@/components/sections/vibe-coding-section'
import { translations } from "@/lib/translations"
import type { Lang } from "@/lib/translations"


export default function LandingPage() {
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const phrases = [
    "Crea landings que venden.",
    "Automatiza con n8n.",
    "Cobra tu primer proyecto."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToForm = () => {
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const c = translations.es

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Header */}
      <StickyHeader scrollToForm={scrollToForm} />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="h-20 md:h-24 mb-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentPhrase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-emerald-400"
              >
                {phrases[currentPhrase]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Aprende a crear landings que venden en 1 semana. Cobra tu primer proyecto.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg px-8 py-6 rounded-xl animate-pulse-glow"
            >
              Quiero aplicar ahora →
            </Button>
            <button
              onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/40 hover:text-white/60 transition"
            >
              Ver el programa completo ↓
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {[
              { label: '7 días', delay: 0 },
              { label: '2 Sprints', delay: 0.15 },
              { label: '+8h práctica', delay: 0.3 },
              { label: '100% en producción', delay: 0.45 }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + stat.delay }}
                className="bg-white/5 rounded-xl p-4 text-center"
              >
                <p className="font-bold text-lg text-white">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Entry Offer Mini Hero */}
      <EntryOfferHero scrollToForm={scrollToForm} />

      {/* What You Build */}
      <WhatYouBuild />

      <VibeCodingSection c={c} />
      <NextJsAdvantageSection c={c} />

      {/* Tech Stack */}
      <TechStack />

      {/* Automation Showcase */}
      <AutomationShowcase />

      {/* Curriculum */}
      <Curriculum />

      {/* Is This For You */}
      <IsThisForYou />

      <CredibilitySection c={c} />
      <InstructorSection c={c} />

      {/* Application Form */}
      <ApplicationForm />

      {/* Support System */}
      <SupportSystem />

      {/* Pricing */}
      <Pricing scrollToForm={scrollToForm} />

      {/* Footer */}
      <Footer />
    </div>
  )
}

function StickyHeader({ scrollToForm }: { scrollToForm: () => void }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-black text-xl text-white">AI Product Builder</span>
          <Badge className="bg-emerald-500 text-white">Bolivia</Badge>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#curriculum" className="text-white/60 hover:text-white transition">Programa</a>
          <a href="#tech-stack" className="text-white/60 hover:text-white transition">Stack</a>
          <a href="#pricing" className="text-white/60 hover:text-white transition">Precio</a>
          <Button
            onClick={scrollToForm}
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold animate-pulse-glow"
          >
            Aplicar ahora →
          </Button>
        </nav>

        <Button
          onClick={scrollToForm}
          className="md:hidden bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm px-4 animate-pulse-glow"
        >
          Aplicar →
        </Button>
      </div>
    </motion.header>
  )
}

function EntryOfferHero({ scrollToForm }: { scrollToForm: () => void }) {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto relative"
      >
        <div className="text-center mb-8">
          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-4 text-sm px-4 py-1">
            🔥 Oferta Entry — Nivel Fundacional
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
            $97 USD • 2 Sprints • 14 días
          </h2>
          <p className="text-xl md:text-2xl text-emerald-400 font-bold mb-2">
            Landing en producción + primer workflow básico en n8n
          </p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Promesa: Cobra tu primera landing page en 1 semana
          </p>
        </div>

        <Card className="bg-linear-to-br from-emerald-500/10 via-black to-black border-emerald-500/30 rounded-3xl p-8 md:p-10 backdrop-blur">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-5xl mb-3">⚡</div>
              <div className="text-2xl font-black text-white mb-2">Sprint 1</div>
              <div className="text-white/60 text-sm">Landing profesional desplegada en Vercel</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🔄</div>
              <div className="text-2xl font-black text-white mb-2">Sprint 2</div>
              <div className="text-white/60 text-sm">Workflow completo: Form → n8n → CRM → Email</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">💰</div>
              <div className="text-2xl font-black text-white mb-2">Outcome</div>
              <div className="text-white/60 text-sm">Portafolio real para cobrar tu primer cliente</div>
            </div>
          </div>

          <div className="bg-black/40 border border-emerald-500/20 rounded-2xl p-6 mb-6">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              Lo que llevás al finalizar:
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Landing page profesional en producción',
                'Dominio propio configurado',
                'Formulario de captura de leads activo',
                'Workflow n8n funcionando 24/7',
                'Google Sheets como CRM en tiempo real',
                'Notificaciones automáticas por Resend',
                'Certificado de finalización digital',
                'Acceso permanente a la comunidad'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 text-sm mt-0.5">→</span>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={scrollToForm}
            className="w-full bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-xl py-6 rounded-2xl animate-pulse-glow shadow-lg shadow-emerald-500/20"
          >
            Quiero aplicar al programa Entry ($97) →
          </Button>

          <p className="text-center text-white/40 text-sm mt-4">
            🛡️ Garantía de devolución total en 7 días • Sin preguntas
          </p>
        </Card>
      </motion.div>
    </section>
  )
}

function WhatYouBuild() {
  const projects = [
    {
      icon: '🌐',
      title: 'Landing Page Profesional',
      description: 'Un sitio web listo para capturar leads, desplegado en Vercel con tu dominio.',
      badge: 'Semana 1'
    },
    {
      icon: '⚡',
      title: 'Workflow de Automatización',
      description: 'Formulario → n8n → CRM en Google Sheets + notificación automática por Resend. Sin intervención manual.',
      badge: 'Semana 1–2'
    },
    {
      icon: '💼',
      title: 'Sistema de Cotizaciones',
      description: 'Una app con IA que genera propuestas para tus clientes en segundos.',
      badge: 'Semana 2'
    }
  ]

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
          Tu portafolio al finalizar.
        </h2>
        <p className="text-xl text-center text-white/50 mb-12">
          En producción. Desde el día 1.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
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

function TechStack() {
  const tools = [
    { icon: '⚡', name: 'v0.app', desc: 'Genera interfaces profesionales con prompts' },
    { icon: '🔄', name: 'n8n', desc: 'Automatizaciones visuales sin escribir código' },
    { icon: '🧠', name: 'Claude Code', desc: 'IA que escribe la lógica por vos' },
    { icon: '🚀', name: 'Vercel', desc: 'Deploy en producción en minutos' },
    { icon: '📊', name: 'Google Sheets', desc: 'Tu CRM visual desde el día 1' },
    { icon: '📧', name: 'Resend', desc: 'Notificaciones automáticas de leads en tiempo real' }
  ]

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
          Las herramientas que el mercado está pidiendo ahora.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {tools.map((tool, i) => (
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

function AutomationShowcase() {
  const nodes = [
    { icon: '📋', label: 'Form', desc: 'Tu landing captura el lead', highlight: false },
    { icon: '⚡', label: 'n8n', desc: 'Orquesta todo el flujo', highlight: true },
    { icon: '📊', label: 'Sheets', desc: 'CRM real con cada lead', highlight: false },
    { icon: '📧', label: 'Emailing', desc: 'Notificación vía Resend', highlight: false }
  ]

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
              Lo que construís en la Semana 1
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Lead Capture → CRM con notificación automática
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            {nodes.map((node, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`${node.highlight
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : 'bg-white/10 border-white/10'
                    } border rounded-xl p-4 text-center min-w-30 w-full md:w-auto`}
                >
                  <div className="text-3xl mb-2">{node.icon}</div>
                  <div className="font-bold mb-1 text-white">{node.label}</div>
                  <div className="text-xs text-white/60">{node.desc}</div>
                </motion.div>

                {i < nodes.length - 1 && (
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
              Cada vez que alguien llena tu formulario, n8n lo captura, lo guarda en tu Google Sheets como un CRM real, y te envía una notificación instantánea por Resend. Nunca más un lead perdido.
            </p>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}

function Curriculum() {
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
          2 Sprints. 14 días. Un portafolio real.
        </h2>

        <div className="space-y-6">
          {/* Sprint 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                Sprint 1 — Semana 1
              </Badge>
              <span className="font-bold text-lg text-white">Tu Primera Landing Page en Producción</span>
            </div>

            <ul className="space-y-3 mb-4">
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-white/70">Generás tu UI completa con v0.app usando solo prompts (sin escribir código)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-white/70">Conectás un formulario de captura de leads real</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-white/70">Automatizás el flujo: Formulario → n8n → Google Sheets → Resend</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-white/70">Deploy en Vercel con dominio propio en menos de 10 minutos</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-400">✓</span>
                <span className="text-white/70">Proyecto entregable: Landing profesional lista para mostrar y cobrar</span>
              </li>
            </ul>
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-xl p-4">
              <p className="leading-relaxed">
                🎯 Outcome: Terminás la semana con una landing page en producción y tu primer workflow de CRM activo.
              </p>
            </div>
          </motion.div>

          {/* Sprint 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30">
                Sprint 2 — Semana 2
              </Badge>
              <span className="font-bold text-lg text-white">APIs, Lógica de Negocio y tu Primer Workflow Completo</span>
            </div>

            <ul className="space-y-3 mb-4">
              <li className="flex gap-2">
                <span className="text-indigo-400">✓</span>
                <span className="text-white/70">Webhooks, JSON y APIs REST explicados en lenguaje humano</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-400">✓</span>
                <span className="text-white/70">Sistema de cotizaciones automático construido en n8n</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-400">✓</span>
                <span className="text-white/70">Claude Code procesa y transforma datos reales</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-400">✓</span>
                <span className="text-white/70">Notificaciones por email automáticas con Resend para cada acción del usuario</span>
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-400">✓</span>
                <span className="text-white/70">Proyecto entregable: Sistema completo de automatización para un negocio real</span>
              </li>
            </ul>
            <div className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-xl p-4">
              <p className="leading-relaxed">
                🎯 Outcome: Salís con 2 proyectos en tu portafolio que podés vender mañana mismo.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

function IsThisForYou() {
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
          ¿Este programa es para vos?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-green-500/5 border-green-500/20 rounded-2xl p-6">
            <h3 className="text-green-400 font-black text-xl mb-6 flex items-center gap-2">
              <span>✅</span>
              <span>Es perfecto para vos si...</span>
            </h3>
            <ul className="space-y-4">
              {[
                'Sos emprendedor y necesitás digitalizarte ya, no en 6 meses',
                'Sos egresado buscando una habilidad técnica con demanda real en Bolivia',
                'Tenés una idea pero no sabés construirla sin contratar un dev',
                'Querés cobrar por tu primera landing page esta semana',
                'Podés dedicar 2–3 horas diarias durante 2 semanas'
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-white/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-rose-500/5 border-rose-500/20 rounded-2xl p-6">
            <h3 className="text-rose-400 font-black text-xl mb-6 flex items-center gap-2">
              <span>❌</span>
              <span>No es para vos si...</span>
            </h3>
            <ul className="space-y-4">
              {[
                'Preferís aprender teoría antes de construir algo real',
                'Esperás que la IA haga todo sola sin que vos dirijas nada',
                'No tenés tiempo para practicar durante las 2 semanas',
                'Buscás un título universitario, no resultados inmediatos'
              ].map((item, i) => (
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

function ApplicationForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    level: '',
    committed: '',
    goal: ''
  })
  const [whatsappError, setWhatsappError] = useState('')

  const validateWhatsApp = (value: string) => {
    const cleaned = value.replace(/\s/g, '')
    const regex = /^(\+?591|591)\d{8,}$/
    return regex.test(cleaned)
  }

  const handleNext = () => {
    if (step === 2) {
      if (!validateWhatsApp(formData.whatsapp)) {
        setWhatsappError('Ingresá un número boliviano válido (+591...)')
        return
      }
      setWhatsappError('')
    }
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = () => {
    const message = `Hola, acabo de aplicar al AI Product Builder.%0A%0A👤 Nombre: ${formData.name}%0A🎯 Objetivo: ${formData.goal}%0A📱 WhatsApp: ${formData.whatsapp}%0A%0A¡Quedo atento a sus indicaciones!`
    const url = `https://wa.me/56930835236?text=${message}`
    window.open(url, '_blank')
  }

  const canProceed = () => {
    if (step === 1) return formData.name.trim() !== ''
    if (step === 2) return validateWhatsApp(formData.whatsapp)
    if (step === 3) return formData.level !== ''
    if (step === 4) return formData.committed !== ''
    if (step === 5) return formData.goal.trim() !== ''
    return false
  }

  return (
    <section id="apply-form" className="py-20 px-4 bg-white/2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
            Aplicá al programa
          </h2>
          <p className="text-white/50">
            Cupos limitados por cohorte. El equipo te contacta en menos de 24hs.
          </p>
        </div>

        <Card className="bg-white/3 border-white/10 rounded-2xl p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="bg-white/10 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: '20%' }}
                animate={{ width: `${(step / 5) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="bg-emerald-500 h-full rounded-full"
              />
            </div>
            <p className="text-white/40 text-xs text-right mt-2">Paso {step} de 5</p>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <label className="text-xl font-bold mb-6 block text-white">
                  ¿Cómo te llamás?
                </label>
                <Input
                  autoFocus
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-lg text-center bg-white/5 border-white/20 mb-6"
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <label className="text-xl font-bold mb-6 block text-white">
                  ¿Cuál es tu WhatsApp?
                </label>
                <Input
                  type="tel"
                  placeholder="+591 7XX XXXXX"
                  value={formData.whatsapp}
                  onChange={(e) => {
                    setFormData({ ...formData, whatsapp: e.target.value })
                    if (whatsappError) setWhatsappError('')
                  }}
                  className="text-lg text-center bg-white/5 border-white/20 mb-2"
                />
                {whatsappError && (
                  <p className="text-rose-400 text-sm mb-4">{whatsappError}</p>
                )}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <label className="text-xl font-bold mb-6 block text-white">
                  ¿Cuál es tu nivel actual en tecnología?
                </label>
                <Select value={formData.level} onValueChange={(value) => setFormData({ ...formData, level: value })}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-lg">
                    <SelectValue placeholder="Seleccioná una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="curioso">Curioso (empiezo desde cero)</SelectItem>
                    <SelectItem value="freelance">Freelance (ya tengo algún cliente)</SelectItem>
                    <SelectItem value="emprendedor">Emprendedor (tengo un negocio propio)</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <label className="text-xl font-bold mb-6 block text-white">
                  ¿Estás dispuesto a invertir tiempo aprendiendo Vibe Coding y n8n?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setFormData({ ...formData, committed: 'yes' })}
                    className={`rounded-xl border p-5 cursor-pointer transition ${formData.committed === 'yes'
                      ? 'border-emerald-500 bg-emerald-500/10'
                      : 'border-white/20 bg-white/5 hover:border-white/40'
                      }`}
                  >
                    <p className="font-bold text-white">Sí, estoy listo 🔥</p>
                  </button>
                  <button
                    onClick={() => setFormData({ ...formData, committed: 'no' })}
                    className={`rounded-xl border p-5 cursor-pointer transition ${formData.committed === 'no'
                      ? 'border-rose-500 bg-rose-500/5'
                      : 'border-white/20 bg-white/5 hover:border-white/40'
                      }`}
                  >
                    <p className="font-bold text-white">No por ahora</p>
                  </button>
                </div>
                {formData.committed === 'no' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-center"
                  >
                    <p className="text-white/60 mb-4">
                      Gracias por tu honestidad 👋 Te avisamos cuando abramos la siguiente cohorte.
                    </p>
                    <Button
                      variant="ghost"
                      onClick={() => setFormData({ ...formData, committed: '' })}
                    >
                      Volver
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <label className="text-xl font-bold mb-6 block text-white">
                  ¿Cuál es tu principal objetivo con este programa?
                </label>
                <Textarea
                  placeholder="Ej: Quiero conseguir mis primeros clientes freelance y dejar mi trabajo en 3 meses..."
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  rows={4}
                  className="bg-white/5 border-white/20 resize-none mb-6"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {formData.committed !== 'no' && (
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  className="text-white/40 hover:text-white"
                >
                  Volver
                </Button>
              )}
              <div className="flex-1" />
              {step < 5 ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold"
                >
                  Siguiente
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="bg-emerald-500 hover:bg-emerald-400 text-white font-black text-lg py-4 px-8 rounded-xl w-full"
                >
                  Enviar y Aplicar 🚀
                </Button>
              )}
            </div>
          )}
        </Card>
      </motion.div>
    </section>
  )
}

function SupportSystem() {
  const supports = [
    {
      icon: '👨‍💻',
      title: 'Talleres en Vivo — Sábados',
      badge: 'Nivel 3',
      badgeColor: 'bg-blue-500/20 text-blue-400',
      desc: 'Cada sábado del programa tenés un workshop en vivo con el instructor. Construís en tiempo real, hacés preguntas y recibís feedback directo sobre tu proyecto.'
    },
    {
      icon: '👥',
      title: 'Tu Par de Construcción',
      badge: 'Nivel 2',
      badgeColor: 'bg-purple-500/20 text-purple-400',
      desc: 'Compañero asignado para pair programming y accountability real. Canal de WhatsApp activo durante todo el sprint.'
    },
    {
      icon: '🤖',
      title: 'Agente IA 24/7',
      badge: 'Nivel 1',
      badgeColor: 'bg-emerald-500/20 text-emerald-400',
      desc: 'Asistente entrenado con el currículum completo. Resuelve tus dudas técnicas a cualquier hora, sin juicios.'
    }
  ]

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
          Nunca te quedás trabado solo.
        </h2>
        <p className="text-xl text-center text-white/50 mb-12">
          Un sistema de 3 niveles diseñado para que termines, sí o sí.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {supports.map((support, i) => (
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

function Pricing({ scrollToForm }: { scrollToForm: () => void }) {
  return (
    <section id="pricing" className="py-20 px-4 bg-white/2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-lg mx-auto"
      >
        <Card className="bg-linear-to-b from-emerald-500/10 to-transparent border-emerald-500/30 rounded-3xl p-8 hover:shadow-emerald-500/20 hover:shadow-2xl transition">
          <Badge className="bg-emerald-500 text-white text-xs font-bold mb-3">
            ⚡ Más popular
          </Badge>
          <p className="text-white/40 text-sm mb-2">AI Product Builder — Entry</p>
          <div className="flex items-baseline mb-1">
            <span className="text-yellow-400">★★★★★</span>
          </div>
          <div className="flex items-baseline mb-1">
            <span className="text-6xl font-black">$97</span>
            <span className="text-xl text-white/40 ml-2">USD</span>
          </div>
          <p className="text-white/30 text-sm mb-8">
            Pago único · Acceso permanente al contenido
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                📹 Contenido asincrónico
              </p>
              <ul className="space-y-2">
                {[
                  'Clases grabadas disponibles 24/7 — avanzás a tu propio ritmo',
                  '+8 horas de contenido práctico organizado por sprints',
                  'Acceso permanente: revisá los módulos cuando los necesités',
                  'Agente IA de soporte entrenado con todo el currículum'
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-emerald-400">✓</span>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                🎙️ Talleres en vivo — Sábados
              </p>
              <ul className="space-y-2">
                {[
                  'Workshop en vivo cada sábado del programa (2 sesiones en total)',
                  'Construís junto al instructor en tiempo real',
                  'Q&A en vivo: resolvés dudas del sprint en el momento',
                  'Par de construcción asignado para accountability entre semana',
                  'Comunidad AI Product Builders Bolivia (acceso permanente)'
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="text-emerald-400">✓</span>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Button
            onClick={scrollToForm}
            className="w-full bg-emerald-500 hover:bg-emerald-400 font-black text-lg py-4 rounded-xl animate-pulse-glow"
          >
            Quiero entrar ahora →
          </Button>

          <div className="flex items-center justify-center gap-2 mt-4 text-white/40 text-sm">
            <span className="text-green-500">🛡️</span>
            <span>Garantía de devolución total en 7 días. Sin preguntas.</span>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <span className="font-black text-xl">AI Product Builder</span>
          <Badge className="bg-emerald-500 text-white">Bolivia</Badge>
        </div>

        <p className="text-white/30 text-sm">
          Santa Cruz de la Sierra · Bolivia · 2026
        </p>

        <div className="flex items-center justify-center gap-4 text-white/30 text-xs">
          <a href="#" className="hover:text-white/60 transition">Términos de uso</a>
          <span>·</span>
          <a href="#" className="hover:text-white/60 transition">Política de privacidad</a>
          <span>·</span>
          <a href="#" className="hover:text-white/60 transition">Contacto</a>
        </div>

        <a
          href="https://wa.me/56930835236"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-emerald-400 text-sm hover:text-emerald-300 transition"
        >
          💬 +569 3083 5236
        </a>

        <div className="flex items-center justify-center gap-4">
          <a href="#" className="text-white/30 hover:text-white transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
            </svg>
          </a>
          <a href="#" className="text-white/30 hover:text-white transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

        <p className="text-white/20 text-xs">
          © 2026 AI Product Builder. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
