"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy } from "@/lib/translations"

interface ApplicationFormProps {
  c: Copy
}

export function ApplicationForm({ c }: ApplicationFormProps) {
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
        setWhatsappError(c.formSteps.step2.error)
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
            {c.formTitle}
          </h2>
          <p className="text-white/50">
            {c.formSubtitle}
          </p>
        </div>

        <Card className="bg-white/3 border-white/10 rounded-2xl p-8">
          <div className="mb-8">
            <div className="bg-white/10 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: '20%' }}
                animate={{ width: `${(step / 5) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="bg-emerald-500 h-full rounded-full"
              />
            </div>
            <p className="text-white/40 text-xs text-right mt-2">{c.formStep} {step} {c.formOf} 5</p>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
              >
                <label className="text-xl font-bold mb-6 block text-white">
                  {c.formSteps.step1.label}
                </label>
                <Input
                  autoFocus
                  placeholder={c.formSteps.step1.placeholder}
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
              >
                <label className="text-xl font-bold mb-6 block text-white">
                  {c.formSteps.step2.label}
                </label>
                <Input
                  type="tel"
                  placeholder={c.formSteps.step2.placeholder}
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
              >
                <label className="text-xl font-bold mb-6 block text-white">
                  {c.formSteps.step3.label}
                </label>
                <Select value={formData.level} onValueChange={(value) => setFormData({ ...formData, level: value })}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-lg">
                    <SelectValue placeholder={c.formSteps.step3.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {c.formSteps.step3.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
                    ))}
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
              >
                <label className="text-xl font-bold mb-6 block text-white">
                  {c.formSteps.step4.label}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setFormData({ ...formData, committed: 'yes' })}
                    className={`rounded-xl border p-5 cursor-pointer transition ${formData.committed === 'yes'
                      ? 'border-emerald-500 bg-emerald-500/10'
                      : 'border-white/20 bg-white/5 hover:border-white/40'
                      }`}
                  >
                    <p className="font-bold text-white">{c.formSteps.step4.yes}</p>
                  </button>
                  <button
                    onClick={() => setFormData({ ...formData, committed: 'no' })}
                    className={`rounded-xl border p-5 cursor-pointer transition ${formData.committed === 'no'
                      ? 'border-rose-500 bg-rose-500/5'
                      : 'border-white/20 bg-white/5 hover:border-white/40'
                      }`}
                  >
                    <p className="font-bold text-white">{c.formSteps.step4.no}</p>
                  </button>
                </div>
                {formData.committed === 'no' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-center"
                  >
                    <p className="text-white/60 mb-4">
                      {c.formSteps.step4.noMessage}
                    </p>
                    <Button
                      variant="ghost"
                      onClick={() => setFormData({ ...formData, committed: '' })}
                    >
                      {c.formBack}
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
              >
                <label className="text-xl font-bold mb-6 block text-white">
                  {c.formSteps.step5.label}
                </label>
                <Textarea
                  placeholder={c.formSteps.step5.placeholder}
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
                  {c.formBack}
                </Button>
              )}
              <div className="flex-1" />
              {step < 5 ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold"
                >
                  {c.formNext}
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="bg-emerald-500 hover:bg-emerald-400 text-white font-black text-lg py-4 px-8 rounded-xl w-full"
                >
                  {c.formSubmit}
                </Button>
              )}
            </div>
          )}
        </Card>
      </motion.div>
    </section>
  )
}
