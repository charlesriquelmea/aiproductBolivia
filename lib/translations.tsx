
export const SPOTS_AVAILABLE = 50
export const INSTRUCTOR_NAME = "Carlos Riquelme"
export const INSTRUCTOR_INITIALS = "CR"
export const INSTRUCTOR_PROJECTS = "10"
export const INSTRUCTOR_STUDENTS = 340
export const INSTRUCTOR_YEARS = "13+"
export const ENROLLED_THIS_WEEK = 23

export const translations = {
  es: {
    // Navbar
    navLogo: "AI Product Builder",
    navBadge: "Bolivia",
    navLinks: [
      { label: "Programa", href: "#curriculum" },
      { label: "Stack", href: "#tech-stack" },
      { label: "Precio", href: "#pricing" },
    ],
    navCta: "Aplicar ahora →",
    navCtaMobile: "Aplicar →",

    // Hero
    heroPhrases: [
      "Crea landings que venden.",
      "Automatiza con n8n.",
      "Cobra tu primer proyecto."
    ],
    heroSubtitle: "Aprende a crear landings que venden en 1 semana. Cobra tu primer proyecto.",
    heroCta: "Quiero aplicar ahora →",
    heroSecondaryCta: "Ver el programa completo ↓",
    heroStats: [
      { label: '7 días', delay: 0 },
      { label: '2 Sprints', delay: 0.15 },
      { label: '+8h práctica', delay: 0.3 },
      { label: '100% en producción', delay: 0.45 }
    ],

    // Entry Offer
    entryBadge: "🔥 Oferta Entry — Nivel Fundacional",
    entryTitle: "$97 USD • 2 Sprints • 14 días",
    entryAccent: "Landing en producción + primer workflow básico en n8n",
    entrySubtext: "Promesa: Cobra tu primera landing page en 1 semana",
    entrySprints: [
      {
        icon: '⚡',
        title: 'Sprint 1',
        desc: 'Landing profesional desplegada en Vercel'
      },
      {
        icon: '🔄',
        title: 'Sprint 2',
        desc: 'Workflow completo: Form → n8n → CRM → Email'
      },
      {
        icon: '💰',
        title: 'Outcome',
        desc: 'Portafolio real para cobrar tu primer cliente'
      }
    ],
    entryOutcomeHeader: "Lo que llevás al finalizar:",
    entryOutcomeList: [
      'Landing page profesional en producción',
      'Dominio propio configurado',
      'Formulario de captura de leads activo',
      'Workflow n8n funcionando 24/7',
      'Google Sheets como CRM en tiempo real',
      'Notificaciones automáticas por Resend',
      'Certificado de finalización digital',
      'Acceso permanente a la comunidad'
    ],
    entryCta: "Quiero aplicar al programa Entry ($97) →",
    entryGuarantee: "🛡️ Garantía de devolución total en 7 días • Sin preguntas",

    // What You Build
    whatTitle: "Tu portafolio al finalizar.",
    whatSubtitle: "En producción. Desde el día 1.",
    whatProjects: [
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
    ],

    // Vibe Coding
    vibeTitle: "El código ya no es la barrera. El método, sí.",
    vibeIntro: "Hoy aprender a construir software no significa memorizar sintaxis. Significa dominar el método para decirle a la IA exactamente qué construir, cómo iterarlo y cuándo está listo para producción. Ese método tiene nombre: Vibe Coding. Y en 3 horas lo vas a dominar.",
    vibeSteps: [
      {
        num: "01",
        title: "Describes exactamente lo que quieres",
        body: "En español o inglés. Sin memorizar sintaxis. Sin setup complicado.",
      },
      {
        num: "02",
        title: "La IA escribe el Next.js completo",
        body: "v0.app, Cursor y Claude generan componentes profesionales en segundos.",
      },
      {
        num: "03",
        title: "Tú refinas, deploya y cobras",
        body: "Sin depender de nadie. Tu código, tu dominio, tu ingreso.",
      },
    ],
    alertTitle: "¿Por qué un taller en vivo de 3 horas enseña más que 20 horas de curso grabado?",
    alertBullets: [
      "Los cursos grabados tienen 73% de abandono antes del módulo 3.",
      "Un taller en vivo fuerza la ejecución inmediata — sin pausa, sin procrastinación.",
      "50 profesionales resolviendo el mismo problema en tiempo real acelera el aprendizaje 4x (Active Learning Framework, MIT).",
      "Cuando terminas, tienes el resultado Y la habilidad. No solo el video.",
    ],

    // Next.js Advantage
    nextTitle: "No es solo código. Es la tecnología que usan los gigantes.",
    nextIntro: "Las landing pages que construirás en este taller no son HTML estático. Son aplicaciones Next.js — el mismo framework que usan Netflix, TikTok, Twitch, Hulu, y miles de startups valuadas en millones. Eso cambia el precio que puedes cobrar.",
    nextCards: [
      {
        title: "SEO Nativo",
        body: "Google indexa Next.js de forma nativa. Server-side rendering significa que tu landing page aparece en búsquedas orgánicas sin trucos. Los clientes llegan solos.",
        stat: "73% más tráfico orgánico vs. HTML estático",
        icon: "Search",
      },
      {
        title: "Rendimiento Empresarial",
        body: "Core Web Vitals perfectos por diseño. Velocidad de carga < 2.5s garantizada. Los clientes no esperan — y Google te premia con mejores rankings.",
        stat: "LCP < 2.5s — Puntuación Google: 95+",
        icon: "Zap",
      },
      {
        title: "Tecnología de $Millones",
        body: "Cuando le dices a un cliente que su landing está en Next.js — el mismo stack de Netflix — el precio de $500 se convierte en $1,500 sin objeción.",
        stat: "Usado por Netflix · TikTok · Twitch · Vercel",
        icon: "TrendingUp",
      },
      {
        title: "Deployable en Minutos",
        body: "Vercel + Next.js = de tu código a un dominio real en 3 minutos. No servidores. No hosting complicado. Deploy con un comando. Escala solo.",
        stat: "0 configuración · Deploy en 3 min · Escala solo",
        icon: "Rocket",
      },
    ],
    nextQuote: "Las empresas que más invierten en Next.js no lo hacen por tendencia. Lo hacen porque convierte mejor, rankea mejor y escala sin límite. Tú lo aprenderás en 3 horas.",

    // Tech Stack
    techTitle: "Las herramientas que el mercado está pidiendo ahora.",
    techTools: [
      { icon: '⚡', name: 'v0.app', desc: 'Genera interfaces profesionales con prompts' },
      { icon: '🔄', name: 'n8n', desc: 'Automatizaciones visuales sin escribir código' },
      { icon: '🧠', name: 'Claude Code', desc: 'IA que escribe la lógica por vos' },
      { icon: '🚀', name: 'Vercel', desc: 'Deploy en producción en minutos' },
      { icon: '📊', name: 'Google Sheets', desc: 'Tu CRM visual desde el día 1' },
      { icon: '📧', name: 'Resend', desc: 'Notificaciones automáticas de leads en tiempo real' }
    ],

    // Automation Showcase
    autoEyebrow: "Lo que construís en la Semana 1",
    autoTitle: "Lead Capture → CRM con notificación automática",
    autoNodes: [
      { icon: '📋', label: 'Form', desc: 'Tu landing captura el lead', highlight: false },
      { icon: '⚡', label: 'n8n', desc: 'Orquesta todo el flujo', highlight: true },
      { icon: '📊', label: 'Sheets', desc: 'CRM real con cada lead', highlight: false },
      { icon: '📧', label: 'Emailing', desc: 'Notificación vía Resend', highlight: false }
    ],
    autoFooter: "Cada vez que alguien llena tu formulario, n8n lo captura, lo guarda en tu Google Sheets como un CRM real, y te envía una notificación instantánea por Resend. Nunca más un lead perdido.",

    // Curriculum
    currTitle: "2 Sprints. 14 días. Un portafolio real.",
    currSprints: [
      {
        badge: "Sprint 1 — Semana 1",
        title: "Tu Primera Landing Page en Producción",
        items: [
          "Generás tu UI completa con v0.app usando solo prompts (sin escribir código)",
          "Conectás un formulario de captura de leads real",
          "Automatizás el flujo: Formulario → n8n → Google Sheets → Resend",
          "Deploy en Vercel con dominio propio en menos de 10 minutos",
          "Proyecto entregable: Landing profesional lista para mostrar y cobrar"
        ],
        outcome: "🎯 Outcome: Terminás la semana con una landing page en producción y tu primer workflow de CRM activo."
      },
      {
        badge: "Sprint 2 — Semana 2",
        title: "APIs, Lógica de Negocio y tu Primer Workflow Completo",
        items: [
          "Webhooks, JSON y APIs REST explicados en lenguaje humano",
          "Sistema de cotizaciones automático construido en n8n",
          "Claude Code procesa y transforma datos reales",
          "Notificaciones por email automáticas con Resend para cada acción del usuario",
          "Proyecto entregable: Sistema completo de automatización para un negocio real"
        ],
        outcome: "🎯 Outcome: Salís con 2 proyectos en tu portafolio que podés vender mañana mismo."
      }
    ],

    // Is This For You
    forYouTitle: "¿Este programa es para vos?",
    forYouYes: {
      title: "Es perfecto para vos si...",
      icon: "✅",
      items: [
        'Sos emprendedor y necesitás digitalizarte ya, no en 6 meses',
        'Sos egresado buscando una habilidad técnica con demanda real en Bolivia',
        'Tenés una idea pero no sabés construirla sin contratar un dev',
        'Querés cobrar por tu primera landing page esta semana',
        'Podés dedicar 2–3 horas diarias durante 2 semanas'
      ]
    },
    forYouNo: {
      title: "No es para vos si...",
      icon: "❌",
      items: [
        'Preferís aprender teoría antes de construir algo real',
        'Esperás que la IA haga todo sola sin que vos dirijas nada',
        'No tenés tiempo para practicar durante las 2 semanas',
        'Buscás un título universitario, no resultados inmediatos'
      ]
    },

    // Credibility
    credibilityTitle: "Credibilidad",
    credibilitySubtitle: "Respaldado por experiencia",
    credibilityCards: [
      {
        icon: "Building2",
        title: "Metodología probada",
        body: "AI Product Builder Bolivia es una formación enfocada en resultados. Nuestra metodología está basada en años construyendo productos digitales reales para clientes globales.",
      },
      {
        icon: "Wrench",
        title: "Fundadores en las trincheras",
        body: "No somos teóricos. Construimos, desplegamos y monetizamos productos todos los días. Enseñamos lo que practicamos.",
      },
      {
        icon: "Star",
        title: "Comunidad exclusiva",
        body: "Acceso directo a una red de emprendedores y tecnólogos en Bolivia que están construyendo el futuro con IA.",
      },
    ],

    // Instructor
    sectionTeach: "Quiénes enseñan",
    sectionFounders: "Los fundadores",
    instructorBadge: "Co-Fundador & CTO",
    instructorBio: "Ingeniero de software con 7+ años construyendo productos full-stack a escala. Especialista en arquitectura TypeScript/Angular, DevOps con Docker y productos basados en IA.",
    instructorStats: [
      { value: "30+", label: "Proyectos deployados" },
      { value: "7+", label: "Años de experiencia" },
    ],

    // Application Form
    formTitle: "Aplicá al programa",
    formSubtitle: "Cupos limitados por cohorte. El equipo te contacta en menos de 24hs.",
    formStep: "Paso",
    formOf: "de",
    formSteps: {
      step1: {
        label: "¿Cómo te llamás?",
        placeholder: "Tu nombre completo"
      },
      step2: {
        label: "¿Cuál es tu WhatsApp?",
        placeholder: "+591 7XX XXXXX",
        error: "Ingresá un número boliviano válido (+591...)"
      },
      step3: {
        label: "¿Cuál es tu nivel actual en tecnología?",
        placeholder: "Seleccioná una opción",
        options: [
          { value: "curioso", label: "Curioso (empiezo desde cero)" },
          { value: "freelance", label: "Freelance (ya tengo algún cliente)" },
          { value: "emprendedor", label: "Emprendedor (tengo un negocio propio)" }
        ]
      },
      step4: {
        label: "¿Estás dispuesto a invertir tiempo aprendiendo Vibe Coding y n8n?",
        yes: "Sí, estoy listo 🔥",
        no: "No por ahora",
        noMessage: "Gracias por tu honestidad 👋 Te avisamos cuando abramos la siguiente cohorte."
      },
      step5: {
        label: "¿Cuál es tu principal objetivo con este programa?",
        placeholder: "Ej: Quiero conseguir mis primeros clientes freelance y dejar mi trabajo en 3 meses..."
      }
    },
    formBack: "Volver",
    formNext: "Siguiente",
    formSubmit: "Enviar y Aplicar 🚀",

    // Support System
    supportTitle: "Nunca te quedás trabado solo.",
    supportSubtitle: "Un sistema de 3 niveles diseñado para que termines, sí o sí.",
    supportItems: [
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
    ],

    // Pricing
    priceBadge: "⚡ Más popular",
    priceName: "AI Product Builder — Entry",
    priceValue: "97",
    priceCurrency: "USD",
    priceDetail: "Pago único • Acceso permanente al contenido",
    priceGuarantee: "🛡️ Garantía de devolución total en 7 días. Sin preguntas.",
    priceSections: [
      {
        title: "📹 Contenido asincrónico",
        items: [
          'Clases grabadas disponibles 24/7 — avanzás a tu propio ritmo',
          '+8 horas de contenido práctico organizado por sprints',
          'Acceso permanente: revisá los módulos cuando los necesités',
          'Agente IA de soporte entrenado con todo el currículum'
        ]
      },
      {
        title: "🎙️ Talleres en vivo — Sábados",
        items: [
          'Workshop en vivo cada sábado del programa (2 sesiones en total)',
          'Construís junto al instructor en tiempo real',
          'Q&A en vivo: resolvés dudas del sprint en el momento',
          'Par de construcción asignado para accountability entre semana',
          'Comunidad AI Product Builders Bolivia (acceso permanente)'
        ]
      }
    ],
    priceCta: "Quiero entrar ahora →",

    // Footer
    footerLocation: "Santa Cruz de la Sierra • Bolivia • 2026",
    footerLinks: [
      { label: "Términos de uso", href: "#" },
      { label: "Política de privacidad", href: "#" },
      { label: "Contacto", href: "#" }
    ],
    footerCopy: "© 2026 AI Product Builder. Todos los derechos reservados."
  },

  en: {
    // Navbar
    navLogo: "AI Product Builder",
    navBadge: "Bolivia",
    navLinks: [
      { label: "Program", href: "#curriculum" },
      { label: "Stack", href: "#tech-stack" },
      { label: "Price", href: "#pricing" },
    ],
    navCta: "Apply now →",
    navCtaMobile: "Apply →",

    // Hero
    heroPhrases: [
      "Create landing pages that sell.",
      "Automate with n8n.",
      "Charge for your first project."
    ],
    heroSubtitle: "Learn to create landing pages that sell in 1 week. Charge for your first project.",
    heroCta: "I want to apply now →",
    heroSecondaryCta: "See full program ↓",
    heroStats: [
      { label: '7 days', delay: 0 },
      { label: '2 Sprints', delay: 0.15 },
      { label: '+8h practice', delay: 0.3 },
      { label: '100% in production', delay: 0.45 }
    ],

    // Entry Offer
    entryBadge: "🔥 Entry Offer — Foundational Level",
    entryTitle: "$97 USD • 2 Sprints • 14 days",
    entryAccent: "Landing in production + first basic n8n workflow",
    entrySubtext: "Promise: Charge for your first landing page in 1 week",
    entrySprints: [
      {
        icon: '⚡',
        title: 'Sprint 1',
        desc: 'Professional landing deployed on Vercel'
      },
      {
        icon: '🔄',
        title: 'Sprint 2',
        desc: 'Complete workflow: Form → n8n → CRM → Email'
      },
      {
        icon: '💰',
        title: 'Outcome',
        desc: 'Real portfolio to charge your first client'
      }
    ],
    entryOutcomeHeader: "What you take upon completion:",
    entryOutcomeList: [
      'Professional landing page in production',
      'Own domain configured',
      'Active lead capture form',
      '24/7 working n8n workflow',
      'Google Sheets as real-time CRM',
      'Automatic Resend notifications',
      'Digital completion certificate',
      'Permanent community access'
    ],
    entryCta: "I want to apply to Entry program ($97) →",
    entryGuarantee: "🛡️ 7-day full money-back guarantee • No questions asked",

    // What You Build
    whatTitle: "Your portfolio at finish.",
    whatSubtitle: "In production. From day 1.",
    whatProjects: [
      {
        icon: '🌐',
        title: 'Professional Landing Page',
        description: 'A website ready to capture leads, deployed on Vercel with your domain.',
        badge: 'Week 1'
      },
      {
        icon: '⚡',
        title: 'Automation Workflow',
        description: 'Form → n8n → Google Sheets CRM + automatic Resend notification. No manual work.',
        badge: 'Week 1–2'
      },
      {
        icon: '💼',
        title: 'Quotation System',
        description: 'An AI app that generates quotes for your clients in seconds.',
        badge: 'Week 2'
      }
    ],

    // Vibe Coding
    vibeTitle: "Code is no longer the barrier. The method is.",
    vibeIntro: "Today learning to build software doesn't mean memorizing syntax. It means mastering the method to tell AI exactly what to build, how to iterate it, and when it's production-ready. That method has a name: Vibe Coding. And in 3 hours you'll master it.",
    vibeSteps: [
      {
        num: "01",
        title: "You describe exactly what you want",
        body: "In Spanish or English. No syntax memorization. No complicated setup.",
      },
      {
        num: "02",
        title: "AI writes the complete Next.js",
        body: "v0.app, Cursor, and Claude generate professional components in seconds.",
      },
      {
        num: "03",
        title: "You refine, deploy, and charge",
        body: "Without depending on anyone. Your code, your domain, your income.",
      },
    ],
    alertTitle: "Why does a 3-hour live workshop teach more than 20 hours of recorded course?",
    alertBullets: [
      "Recorded courses have 73% abandonment before module 3.",
      "A live workshop forces immediate execution — no pause, no procrastination.",
      "50 professionals solving the same problem in real time accelerates learning 4x (Active Learning Framework, MIT).",
      "When you finish, you have the result AND the skill. Not just the video.",
    ],

    // Next.js Advantage
    nextTitle: "Not just code. It's the tech giants use.",
    nextIntro: "The landing pages you'll build aren't static HTML. They're Next.js apps — the same framework used by Netflix, TikTok, Twitch, and Hulu. This changes what you can charge.",
    nextCards: [
      {
        title: "Native SEO",
        body: "Google indexes Next.js natively. Server-side rendering means your landing page appears in organic searches without tricks. Clients come to you.",
        stat: "73% more organic traffic vs. static HTML",
        icon: "Search",
      },
      {
        title: "Enterprise Performance",
        body: "Perfect Core Web Vitals by design. Load speed < 2.5s guaranteed. Clients don't wait — and Google rewards you with better rankings.",
        stat: "LCP < 2.5s — Google Score: 95+",
        icon: "Zap",
      },
      {
        title: "Million-Dollar Tech",
        body: "When you tell a client their landing is on Next.js — same stack as Netflix — the $500 price becomes $1,500 without objection.",
        stat: "Used by Netflix • TikTok • Twitch • Vercel",
        icon: "TrendingUp",
      },
      {
        title: "Deploy in Minutes",
        body: "Vercel + Next.js = from code to real domain in 3 minutes. No servers. No complicated hosting. One-command deploy. Scales itself.",
        stat: "0 config • 3 min deploy • Scales itself",
        icon: "Rocket",
      },
    ],
    nextQuote: "Companies investing in Next.js don't do it for trends. They do it because it converts better, ranks better, and scales without limits. You'll learn it in 3 hours.",

    // Tech Stack
    techTitle: "The tools the market is asking for right now.",
    techTools: [
      { icon: '⚡', name: 'v0.app', desc: 'Generate professional interfaces with prompts' },
      { icon: '🔄', name: 'n8n', desc: 'Visual automations without writing code' },
      { icon: '🧠', name: 'Claude Code', desc: 'AI that writes the logic for you' },
      { icon: '🚀', name: 'Vercel', desc: 'Production deploy in minutes' },
      { icon: '📊', name: 'Google Sheets', desc: 'Your visual CRM from day 1' },
      { icon: '📧', name: 'Resend', desc: 'Real-time automatic lead notifications' }
    ],

    // Automation Showcase
    autoEyebrow: "What you build in Week 1",
    autoTitle: "Lead Capture → CRM with automatic notification",
    autoNodes: [
      { icon: '📋', label: 'Form', desc: 'Your landing captures the lead', highlight: false },
      { icon: '⚡', label: 'n8n', desc: 'Orchestrates the whole flow', highlight: true },
      { icon: '📊', label: 'Sheets', desc: 'Real CRM with each lead', highlight: false },
      { icon: '📧', label: 'Emailing', desc: 'Notification via Resend', highlight: false }
    ],
    autoFooter: "Every time someone fills your form, n8n captures it, saves it to your Google Sheets as a real CRM, and sends you an instant notification via Resend. Never a lost lead again.",

    // Curriculum
    currTitle: "2 Sprints. 14 days. A real portfolio.",
    currSprints: [
      {
        badge: "Sprint 1 — Week 1",
        title: "Your First Landing Page in Production",
        items: [
          "Generate your full UI with v0.app using only prompts (no code writing)",
          "Connect a real lead capture form",
          "Automate the flow: Form → n8n → Google Sheets → Resend",
          "Deploy on Vercel with own domain in less than 10 minutes",
          "Deliverable: Professional landing page ready to show and charge"
        ],
        outcome: "🎯 Outcome: Finish the week with a landing page in production and your first active CRM workflow."
      },
      {
        badge: "Sprint 2 — Week 2",
        title: "APIs, Business Logic, and Your First Full Workflow",
        items: [
          "Webhooks, JSON, and REST APIs explained in human language",
          "Automatic quotation system built in n8n",
          "Claude Code processes and transforms real data",
          "Automatic email notifications with Resend for every user action",
          "Deliverable: Complete automation system for a real business"
        ],
        outcome: "🎯 Outcome: Leave with 2 projects in your portfolio that you can sell tomorrow."
      }
    ],

    // Is This For You
    forYouTitle: "Is this program for you?",
    forYouYes: {
      title: "It's perfect for you if...",
      icon: "✅",
      items: [
        "You're an entrepreneur and need to go digital now, not in 6 months",
        "You're a graduate looking for technical skills with real demand in Bolivia",
        "You have an idea but don't know how to build it without hiring a dev",
        "You want to charge for your first landing page this week",
        "You can dedicate 2–3 hours daily for 2 weeks"
      ]
    },
    forYouNo: {
      title: "It's not for you if...",
      icon: "❌",
      items: [
        "You prefer learning theory before building something real",
        "You expect AI to do everything alone without your direction",
        "You don't have time to practice during the 2 weeks",
        "You're looking for a university degree, not immediate results"
      ]
    },

    // Credibility
    credibilityTitle: "Credibility",
    credibilitySubtitle: "Backed by Experience",
    credibilityCards: [
      {
        icon: "Building2",
        title: "Proven Methodology",
        body: "AI Product Builder Bolivia is a results-focused training. Our methodology is based on years of building real digital products for global clients.",
      },
      {
        icon: "Wrench",
        title: "Founders in the Trenches",
        body: "We are not theorists. We build, deploy, and monetize products every day. We teach what we practice.",
      },
      {
        icon: "Star",
        title: "Exclusive Community",
        body: "Direct access to a network of entrepreneurs and technologists in Bolivia building the future with AI.",
      },
    ],

    // Instructor
    sectionTeach: "Who Teaches",
    sectionFounders: "The Founders",
    instructorBadge: "Co-Founder & CTO",
    instructorBio: "Software engineer with 7+ years building full-stack products at scale. Specialist in TypeScript/Angular architecture, DevOps with Docker, and AI-based products.",
    instructorStats: [
      { value: "30+", label: "Projects deployed" },
      { value: "7+", label: "Years of experience" },
    ],

    // Application Form
    formTitle: "Apply to the program",
    formSubtitle: "Limited spots per cohort. The team contacts you in less than 24h.",
    formStep: "Step",
    formOf: "of",
    formSteps: {
      step1: {
        label: "What's your name?",
        placeholder: "Your full name"
      },
      step2: {
        label: "What's your WhatsApp?",
        placeholder: "+591 7XX XXXXX",
        error: "Enter a valid Bolivian number (+591...)"
      },
      step3: {
        label: "What's your current level in technology?",
        placeholder: "Select an option",
        options: [
          { value: "curioso", label: "Curious (starting from zero)" },
          { value: "freelance", label: "Freelance (already have some clients)" },
          { value: "emprendedor", label: "Entrepreneur (own my business)" }
        ]
      },
      step4: {
        label: "Are you willing to invest time learning Vibe Coding and n8n?",
        yes: "Yes, I'm ready 🔥",
        no: "Not for now",
        noMessage: "Thanks for your honesty 👋 We'll notify you when we open the next cohort."
      },
      step5: {
        label: "What is your main goal with this program?",
        placeholder: "Ex: I want to get my first freelance clients and leave my job in 3 months..."
      }
    },
    formBack: "Back",
    formNext: "Next",
    formSubmit: "Send and Apply 🚀",

    // Support System
    supportTitle: "You never get stuck alone.",
    supportSubtitle: "A 3-level system designed so you finish, no matter what.",
    supportItems: [
      {
        icon: '👨‍💻',
        title: 'Live Workshops — Saturdays',
        badge: 'Level 3',
        badgeColor: 'bg-blue-500/20 text-blue-400',
        desc: 'Every Saturday you have a live workshop with the instructor. Build in real-time, ask questions, and get direct feedback on your project.'
      },
      {
        icon: '👥',
        title: 'Your Building Partner',
        badge: 'Level 2',
        badgeColor: 'bg-purple-500/20 text-purple-400',
        desc: 'Assigned companion for pair programming and real accountability. Active WhatsApp channel throughout the sprint.'
      },
      {
        icon: '🤖',
        title: '24/7 AI Agent',
        badge: 'Level 1',
        badgeColor: 'bg-emerald-500/20 text-emerald-400',
        desc: 'Assistant trained with the full curriculum. Resolves your technical doubts at any time, without judgment.'
      }
    ],

    // Pricing
    priceBadge: "⚡ Most popular",
    priceName: "AI Product Builder — Entry",
    priceValue: "97",
    priceCurrency: "USD",
    priceDetail: "One-time payment • Permanent content access",
    priceGuarantee: "🛡️ 7-day full money-back guarantee. No questions asked.",
    priceSections: [
      {
        title: "📹 Asynchronous Content",
        items: [
          'Recorded classes available 24/7 — advance at your own pace',
          '+8 hours of practical content organized by sprints',
          'Permanent access: review modules whenever you need them',
          'AI support agent trained with the entire curriculum'
        ]
      },
      {
        title: "🎙️ Live Workshops — Saturdays",
        items: [
          'Live workshop every Saturday of the program (2 sessions total)',
          'Build alongside the instructor in real time',
          'Live Q&A: resolve sprint doubts on the spot',
          'Building partner assigned for mid-week accountability',
          'AI Product Builders Bolivia Community (permanent access)'
        ]
      }
    ],
    priceCta: "I want to join now →",

    // Footer
    footerLocation: "Santa Cruz de la Sierra • Bolivia • 2026",
    footerLinks: [
      { label: "Terms of use", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Contact", href: "#" }
    ],
    footerCopy: "© 2026 AI Product Builder. All rights reserved."
  }
}

export type Lang = keyof typeof translations
export type Copy = (typeof translations)["es"]
