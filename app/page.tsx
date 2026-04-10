'use client'

import { useState } from 'react'
import { StickyHeader } from '@/components/sections/sticky-header'
import { HeroSection } from '@/components/sections/hero-section'
import { EntryOfferHero } from '@/components/sections/entry-offer-hero'
import { WhatYouBuild } from '@/components/sections/what-you-build'
import { VibeCodingSection } from '@/components/sections/vibe-coding-section'
import { NextJsAdvantageSection } from '@/components/sections/nextjs-advantage-section'
import { TechStack } from '@/components/sections/tech-stack'
import { AutomationShowcase } from '@/components/sections/automation-showcase'
import { CurriculumSection } from '@/components/sections/curriculum-section'
import { IsThisForYou } from '@/components/sections/is-this-for-you'
import { CredibilitySection } from '@/components/sections/credibility-section'
import { InstructorSection } from '@/components/sections/instructor-section'
import { ApplicationForm } from '@/components/sections/application-form'
import { SupportSystem } from '@/components/sections/support-system'
import { PricingSection } from '@/components/sections/pricing-section'
import { FooterSection } from '@/components/sections/footer-section'
import { translations, type Lang } from "@/lib/translations"

export default function LandingPage() {
  const [lang, setLang] = useState<Lang>('es')
  
  const scrollToForm = () => {
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const c = translations[lang]

  return (
    <div className="min-h-screen bg-black text-white">
      <StickyHeader c={c} lang={lang} setLang={setLang} scrollToForm={scrollToForm} />

      <main>
        <HeroSection c={c} scrollToForm={scrollToForm} />
        
        <EntryOfferHero c={c} scrollToForm={scrollToForm} />
        
        <WhatYouBuild c={c} />
        
        <VibeCodingSection c={c} />
        
        <NextJsAdvantageSection c={c} />
        
        <TechStack c={c} />
        
        <AutomationShowcase c={c} />
        
        <CurriculumSection c={c} />
        
        <IsThisForYou c={c} />
        
        <CredibilitySection c={c} />
        
        <InstructorSection c={c} />
        
        <ApplicationForm c={c} />
        
        <SupportSystem c={c} />
        
        <PricingSection c={c} scrollToForm={scrollToForm} />
      </main>

      <FooterSection c={c} />
    </div>
  )
}
