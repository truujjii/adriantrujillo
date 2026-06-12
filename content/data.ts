export type Locale = 'en' | 'es'

export interface StatItem {
  /** numeric target for the count-up; null for non-numeric (e.g. "C1") */
  value: number | null
  prefix?: string
  suffix?: string
  display?: string // used when value is null
  label: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  location?: string
  bullets: string[]
  tags?: string[]
}

export interface ProjectItem {
  title: string
  subtitle: string
  year: string
  description: string
  tags: string[]
  link?: { label: string; href: string }
}

export interface StrengthItem {
  title: string
  text: string
}

export type SportIcon = 'basketball' | 'boxing' | 'padel' | 'hiking' | 'more'

export interface SportItem {
  icon: SportIcon
  name: string
  detail: string
}

export interface Content {
  nav: { about: string; skills: string; experience: string; projects: string; contact: string }
  hero: {
    eyebrow: string
    name: string
    roles: string[]
    locationPill: string
    summary: string
    ctaContact: string
    ctaCV: string
    availability: string
  }
  about: {
    title: string
    paragraphs: string[]
    languagesTitle: string
    languages: { name: string; level: string }[]
  }
  stats: StatItem[]
  skills: { title: string; subtitle: string; groups: SkillGroup[] }
  experience: { title: string; subtitle: string; items: ExperienceItem[] }
  projects: { title: string; subtitle: string; items: ProjectItem[] }
  education: {
    title: string
    degree: string
    school: string
    period: string
    note: string
    courseworkTitle: string
    coursework: string[]
  }
  strengths: { title: string; subtitle: string; items: StrengthItem[] }
  sports: {
    eyebrow: string
    title: string
    lead: string
    items: SportItem[]
    valuesTitle: string
    values: string[]
  }
  contact: {
    title: string
    subtitle: string
    emailLabel: string
    phoneLabel: string
    cta: string
    cvLabel: string
    locationNote: string
  }
  footer: { rights: string; built: string }
}

const en: Content = {
  nav: { about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
  hero: {
    eyebrow: 'CRM & Automation · Workflow Design · Data & BI',
    name: 'Adrián Trujillo',
    roles: ['Automation that ships.', 'CRMs that talk to WhatsApp.', 'Data that drives decisions.'],
    locationPill: 'Open to relocation · Dubai, UAE',
    summary:
      'Business & Technology graduate who builds end-to-end automations connecting CRMs with WhatsApp, email and internal systems, and turns the output into dashboards that track what matters.',
    ctaContact: 'Get in touch',
    ctaCV: 'Download CV',
    availability: 'Spanish (EU) citizen · Eligible for UAE visa sponsorship',
  },
  about: {
    title: 'About',
    paragraphs: [
      'I’m a Business & Technology graduate (Universitat Autònoma de Barcelona, 2026) specialising in workflow automation and CRM-driven operations.',
      'I build end-to-end automations that connect CRMs with WhatsApp, email and internal systems using Make.com, n8n, webhooks and LLM APIs, then turn the output into Power BI dashboards that track KPIs and conversion.',
      'I bring a strong data-integrity and security mindset from a Technology Risk Assurance role at BDO Spain (ITGC, access management, GDPR, ISO 27001), plus hands-on commercial experience in sales, marketing and client-facing operations. I learn new platforms fast and take end-to-end ownership.',
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'Catalan', level: 'Native' },
      { name: 'English', level: 'Fluent · C1' },
      { name: 'Italian', level: 'Basic' },
    ],
  },
  stats: [
    { value: 100, prefix: '~', label: 'Vehicle transactions managed / month' },
    { value: 35, label: 'Online services launched for a live business' },
    { value: 3, label: 'Businesses taken digital from zero' },
    { value: null, display: 'C1', label: 'English · plus 2 native languages' },
  ],
  skills: {
    title: 'Core competencies',
    subtitle: 'The toolkit I build with',
    groups: [
      {
        title: 'Automation & CRM',
        items: [
          'Make.com',
          'n8n',
          'Webhooks & triggers',
          'WhatsApp Business API',
          'CRM operations & data hygiene',
          'Email-marketing integrations',
          'Booking-platform integrations',
          'Microsoft Graph API',
          'GitHub Actions (CI/CD)',
        ],
      },
      {
        title: 'AI & Analytics',
        items: [
          'Python (Pandas)',
          'SQL',
          'Power BI',
          'Tableau',
          'Advanced Excel',
          'LLM APIs (Claude, GPT-4)',
          'AI-assisted workflows',
          'KPI & conversion dashboards',
        ],
      },
      {
        title: 'Data Security & Compliance',
        items: [
          'IT General Controls (ITGC)',
          'Access & change management',
          'Permissions & data integrity',
          'GDPR',
          'ISO 27001',
        ],
      },
    ],
  },
  experience: {
    title: 'Experience',
    subtitle: 'Where I’ve delivered',
    items: [
      {
        role: 'IT Audit & Compliance Analyst (Internship)',
        company: 'BDO Spain, Technology Risk Assurance',
        period: 'Jan 2026 → Jun 2026',
        bullets: [
          'Executed ITGC audits for large enterprise and financial-services clients (incl. LIDL, Grupo Ebro, Honda and banking clients), covering access controls, change management and data integrity aligned with GDPR and ISO 27001.',
          'Performed deep-dive analysis on enterprise accounting journals, some exceeding 14M rows, using SQL, advanced Excel and Power BI; identified exceptions, segregation-of-duties conflicts and anomalous transaction patterns across complex ERP environments.',
          'Participated in client walkthroughs and stakeholder meetings; produced structured risk documentation, mapped data flows and identified control gaps for senior leadership.',
        ],
        tags: ['ITGC', 'SQL', 'Power BI', 'GDPR', 'ISO 27001'],
      },
      {
        role: 'Sales & Operations Lead',
        company: 'Motos Turó, Terrassa',
        period: 'Nov 2024 → Sep 2025',
        bullets: [
          'Managed the full lifecycle of second-hand motorcycle trading (~100 units/month): valuation, sourcing, negotiation with private sellers, documentation, financing coordination and after-sales support.',
          'Launched and ran the dealership’s official accounts on Wallapop, TikTok and Instagram from scratch; produced organic content that drove a measurable uplift in qualified leads and showroom footfall.',
          'Coordinated daily with financing partners, administrative agents and suppliers; improved internal CRM hygiene and pipeline tracking.',
        ],
        tags: ['C2B operations', 'Negotiation', 'CRM', 'Social media'],
      },
      {
        role: 'Web & Digital Operations Manager',
        company: 'Moments per Mi (Wellness business)',
        period: '2023 → Present',
        bullets: [
          'Built the business website from scratch (35 services online) with online payments and automated PDF gift-voucher generation.',
          'Manage all ongoing digital operations (~7 services/day), SEO, content and technical maintenance.',
        ],
        tags: ['Web', 'E-commerce', 'Automation', 'SEO'],
      },
      {
        role: 'Marketing & Digital Strategy Lead',
        company: 'JS Trans S.L. (Transport & Logistics)',
        period: 'Oct 2023 → Jul 2024',
        bullets: [
          'Designed and executed a multi-channel digital strategy (corporate LinkedIn + website end-to-end).',
          'Co-developed proprietary driver-operations apps that improved traceability and internal communication; coordinated external lead-generation agencies.',
        ],
        tags: ['Digital strategy', 'Internal tooling', 'LinkedIn'],
      },
    ],
  },
  projects: {
    title: 'Selected projects',
    subtitle: 'Things I’ve built end-to-end',
    items: [
      {
        title: 'WhatsApp & CRM Automation System',
        subtitle: 'Multi-tenant appointment automation',
        year: '2025',
        description:
          'A multi-tenant automation connecting a booking calendar to WhatsApp: sends and tracks appointment reminders and handles confirmations and cancellations through webhooks, with per-client configuration and deduplicated logging. Deployed for a live service business.',
        tags: ['Make.com', 'Webhooks', 'Supabase', 'WhatsApp API'],
        link: { label: 'GitHub', href: 'https://github.com/truujjii' },
      },
      {
        title: 'Automated Data Pipeline & BI Dashboard',
        subtitle: 'Bachelor’s thesis',
        year: '2026',
        description:
          'A fully automated Python pipeline that scrapes, cleans and consolidates data and pushes it, via GitHub Actions and the Microsoft Graph API, into a continuously updated Power BI dashboard at zero infrastructure cost. Public repository on GitHub.',
        tags: ['Python', 'Power BI', 'GitHub Actions', 'MS Graph API'],
        link: { label: 'GitHub', href: 'https://github.com/truujjii' },
      },
    ],
  },
  education: {
    title: 'Education',
    degree: 'Bachelor’s Degree in Business & Technology',
    school: 'Universitat Autònoma de Barcelona (UAB), Spain',
    period: '2022 → 2026',
    note: 'A hybrid degree merging business management with applied technology, not a traditional business administration programme.',
    courseworkTitle: 'Key coursework',
    coursework: [
      'Data Analytics & Programming',
      'Information Systems',
      'Software Development & QA',
      'Project Management',
      'Agile Methodologies',
      'ITIL / ITSM',
      'Business Strategy & Operations',
    ],
  },
  strengths: {
    title: 'Strengths',
    subtitle: 'Anchored in real experience',
    items: [
      {
        title: 'Stakeholder communication',
        text: 'Led client walkthroughs and risk documentation for senior leadership at blue-chip BDO clients; fluent across technical and business audiences in three languages.',
      },
      {
        title: 'Teamwork under pressure',
        text: 'Years of competitive basketball built disciplined, high-trust teamwork and delivering when the stakes are high.',
      },
      {
        title: 'Ownership & learning agility',
        text: 'Launched digital operations from zero across three businesses and self-taught a modern data and automation stack, with end-to-end ownership and fast adaptation to new tools.',
      },
      {
        title: 'Negotiation & commercial drive',
        text: 'Closed and managed ~100 vehicle transactions per month with private sellers, from valuation to after-sales.',
      },
    ],
  },
  sports: {
    eyebrow: 'Beyond the desk',
    title: 'Sport & values',
    lead: 'Sport has been part of my life since I was six. I played competitive basketball for 15 years, and I’ve never stopped moving since. More than a hobby, it’s where I built the values I bring to every team.',
    items: [
      { icon: 'basketball', name: 'Basketball', detail: '15 years competing · ages 6 to 21' },
      { icon: 'boxing', name: 'Boxing', detail: 'Current focus · discipline & resilience' },
      { icon: 'padel', name: 'Padel', detail: 'Regular · agility & quick decisions' },
      { icon: 'hiking', name: 'Hiking', detail: 'Endurance & a clear head' },
      { icon: 'more', name: 'Anything, really', detail: 'An all-round sports enthusiast' },
    ],
    valuesTitle: 'What it taught me',
    values: ['Teamwork', 'Discipline', 'Resilience', 'Commitment', 'Competitive drive', 'Performing under pressure'],
  },
  contact: {
    title: 'Let’s talk',
    subtitle: 'Open to CRM & Automation roles in Dubai. The fastest way to reach me is email.',
    emailLabel: 'Email me',
    phoneLabel: 'Call',
    cta: 'Send an email',
    cvLabel: 'Download CV (PDF)',
    locationNote: 'Based in Barcelona · Ready to relocate to Dubai, UAE',
  },
  footer: { rights: 'All rights reserved.', built: 'Designed & built by Adrián Trujillo' },
}

const es: Content = {
  nav: { about: 'Sobre mí', skills: 'Skills', experience: 'Experiencia', projects: 'Proyectos', contact: 'Contacto' },
  hero: {
    eyebrow: 'CRM & Automatización · Diseño de flujos · Datos & BI',
    name: 'Adrián Trujillo',
    roles: ['Automatización que funciona.', 'CRMs que hablan con WhatsApp.', 'Datos que guían decisiones.'],
    locationPill: 'Disponible para relocalización · Dubái, EAU',
    summary:
      'Graduado en Business & Technology que construye automatizaciones de principio a fin conectando CRMs con WhatsApp, email y sistemas internos, y convierte la salida en dashboards que miden lo que importa.',
    ctaContact: 'Contactar',
    ctaCV: 'Descargar CV',
    availability: 'Ciudadano español (UE) · Elegible para visado de trabajo en EAU',
  },
  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Soy graduado en Business & Technology (Universitat Autònoma de Barcelona, 2026), especializado en automatización de flujos de trabajo y operaciones basadas en CRM.',
      'Construyo automatizaciones de principio a fin que conectan CRMs con WhatsApp, email y sistemas internos usando Make.com, n8n, webhooks y APIs de LLM, y convierto la salida en dashboards de Power BI que siguen KPIs y conversión.',
      'Aporto una fuerte mentalidad de integridad y seguridad de datos desde un rol de Technology Risk Assurance en BDO España (ITGC, gestión de accesos, RGPD, ISO 27001), además de experiencia comercial real en ventas, marketing y atención al cliente. Aprendo plataformas nuevas rápido y asumo la responsabilidad de extremo a extremo.',
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Catalán', level: 'Nativo' },
      { name: 'Inglés', level: 'Fluido · C1' },
      { name: 'Italiano', level: 'Básico' },
    ],
  },
  stats: [
    { value: 100, prefix: '~', label: 'Transacciones de vehículos gestionadas / mes' },
    { value: 35, label: 'Servicios online lanzados para un negocio real' },
    { value: 3, label: 'Negocios digitalizados desde cero' },
    { value: null, display: 'C1', label: 'Inglés · más 2 lenguas nativas' },
  ],
  skills: {
    title: 'Competencias clave',
    subtitle: 'Las herramientas con las que construyo',
    groups: [
      {
        title: 'Automatización & CRM',
        items: [
          'Make.com',
          'n8n',
          'Webhooks y triggers',
          'WhatsApp Business API',
          'Operaciones CRM e higiene de datos',
          'Integraciones de email-marketing',
          'Integraciones de plataformas de reservas',
          'Microsoft Graph API',
          'GitHub Actions (CI/CD)',
        ],
      },
      {
        title: 'IA & Analítica',
        items: [
          'Python (Pandas)',
          'SQL',
          'Power BI',
          'Tableau',
          'Excel avanzado',
          'APIs de LLM (Claude, GPT-4)',
          'Flujos asistidos por IA',
          'Dashboards de KPIs y conversión',
        ],
      },
      {
        title: 'Seguridad & Cumplimiento',
        items: [
          'IT General Controls (ITGC)',
          'Gestión de accesos y cambios',
          'Permisos e integridad de datos',
          'RGPD',
          'ISO 27001',
        ],
      },
    ],
  },
  experience: {
    title: 'Experiencia',
    subtitle: 'Donde he entregado resultados',
    items: [
      {
        role: 'Analista de Auditoría IT & Compliance (Prácticas)',
        company: 'BDO España, Technology Risk Assurance',
        period: 'Ene 2026 → Jun 2026',
        bullets: [
          'Ejecuté auditorías ITGC para grandes empresas y clientes de servicios financieros (incl. LIDL, Grupo Ebro, Honda y clientes bancarios), cubriendo controles de acceso, gestión de cambios e integridad de datos alineados con RGPD e ISO 27001.',
          'Realicé análisis en profundidad sobre asientos contables de grandes empresas, algunos de más de 14M de filas, con SQL, Excel avanzado y Power BI; identifiqué excepciones, conflictos de segregación de funciones y patrones de transacciones anómalas en entornos ERP complejos.',
          'Participé en walkthroughs con cliente y reuniones con stakeholders; elaboré documentación de riesgos estructurada, mapeé flujos de datos e identifiqué brechas de control para la dirección.',
        ],
        tags: ['ITGC', 'SQL', 'Power BI', 'RGPD', 'ISO 27001'],
      },
      {
        role: 'Responsable de Ventas y Operaciones',
        company: 'Motos Turó, Terrassa',
        period: 'Nov 2024 → Sep 2025',
        bullets: [
          'Gestioné el ciclo completo de compraventa de motos de segunda mano (~100 unidades/mes): tasación, captación, negociación con vendedores particulares, documentación, coordinación de financiación y posventa.',
          'Lancé y gestioné desde cero las cuentas oficiales del concesionario en Wallapop, TikTok e Instagram; produje contenido orgánico que generó un aumento medible de leads cualificados y visitas a la tienda.',
          'Coordiné a diario con socios financieros, gestores administrativos y proveedores; mejoré la higiene del CRM interno y el seguimiento del pipeline.',
        ],
        tags: ['Operaciones C2B', 'Negociación', 'CRM', 'Redes sociales'],
      },
      {
        role: 'Responsable Web y Operaciones Digitales',
        company: 'Moments per Mi (Centro de bienestar)',
        period: '2023 → Actualidad',
        bullets: [
          'Construí la web del negocio desde cero (35 servicios online) con pagos online y generación automática de vales regalo en PDF.',
          'Gestiono todas las operaciones digitales (~7 servicios/día), SEO, contenido y mantenimiento técnico.',
        ],
        tags: ['Web', 'E-commerce', 'Automatización', 'SEO'],
      },
      {
        role: 'Responsable de Marketing y Estrategia Digital',
        company: 'JS Trans S.L. (Transporte y Logística)',
        period: 'Oct 2023 → Jul 2024',
        bullets: [
          'Diseñé y ejecuté una estrategia digital multicanal (LinkedIn corporativo + web de principio a fin).',
          'Co-desarrollé apps propias de operaciones para conductores que mejoraron la trazabilidad y la comunicación interna; coordiné agencias externas de generación de leads.',
        ],
        tags: ['Estrategia digital', 'Tooling interno', 'LinkedIn'],
      },
    ],
  },
  projects: {
    title: 'Proyectos destacados',
    subtitle: 'Cosas que he construido de principio a fin',
    items: [
      {
        title: 'Sistema de Automatización WhatsApp & CRM',
        subtitle: 'Automatización de citas multi-tenant',
        year: '2025',
        description:
          'Una automatización multi-tenant que conecta un calendario de reservas con WhatsApp: envía y rastrea recordatorios de citas y gestiona confirmaciones y cancelaciones mediante webhooks, con configuración por cliente y registro deduplicado. Desplegado para un negocio de servicios real.',
        tags: ['Make.com', 'Webhooks', 'Supabase', 'WhatsApp API'],
        link: { label: 'GitHub', href: 'https://github.com/truujjii' },
      },
      {
        title: 'Pipeline de Datos Automatizado & Dashboard BI',
        subtitle: 'Trabajo de fin de grado',
        year: '2026',
        description:
          'Un pipeline en Python totalmente automatizado que extrae, limpia y consolida datos y los envía, vía GitHub Actions y la Microsoft Graph API, a un dashboard de Power BI actualizado en continuo, con coste de infraestructura cero. Repositorio público en GitHub.',
        tags: ['Python', 'Power BI', 'GitHub Actions', 'MS Graph API'],
        link: { label: 'GitHub', href: 'https://github.com/truujjii' },
      },
    ],
  },
  education: {
    title: 'Formación',
    degree: 'Grado en Business & Technology',
    school: 'Universitat Autònoma de Barcelona (UAB), España',
    period: '2022 → 2026',
    note: 'Un grado híbrido que fusiona gestión empresarial con tecnología aplicada, no un programa tradicional de administración de empresas.',
    courseworkTitle: 'Asignaturas clave',
    coursework: [
      'Análisis de Datos y Programación',
      'Sistemas de Información',
      'Desarrollo de Software y QA',
      'Gestión de Proyectos',
      'Metodologías Ágiles',
      'ITIL / ITSM',
      'Estrategia y Operaciones de Negocio',
    ],
  },
  strengths: {
    title: 'Fortalezas',
    subtitle: 'Ancladas en experiencia real',
    items: [
      {
        title: 'Comunicación con stakeholders',
        text: 'Lideré walkthroughs con cliente y documentación de riesgos para la dirección en clientes blue-chip de BDO; fluido con audiencias técnicas y de negocio en tres idiomas.',
      },
      {
        title: 'Trabajo en equipo bajo presión',
        text: 'Años de baloncesto competitivo forjaron un trabajo en equipo disciplinado y de alta confianza, y la capacidad de rendir cuando lo que está en juego es alto.',
      },
      {
        title: 'Responsabilidad y agilidad de aprendizaje',
        text: 'Lancé operaciones digitales desde cero en tres negocios y aprendí de forma autodidacta un stack moderno de datos y automatización, con responsabilidad de extremo a extremo y adaptación rápida.',
      },
      {
        title: 'Negociación e impulso comercial',
        text: 'Cerré y gestioné ~100 transacciones de vehículos al mes con vendedores particulares, de la tasación a la posventa.',
      },
    ],
  },
  sports: {
    eyebrow: 'Más allá del escritorio',
    title: 'Deporte y valores',
    lead: 'El deporte forma parte de mi vida desde los seis años. Jugué al baloncesto de competición durante 15 años y desde entonces no he parado de moverme. Más que un hobby, es donde forjé los valores que aporto a cualquier equipo.',
    items: [
      { icon: 'basketball', name: 'Baloncesto', detail: '15 años compitiendo · de los 6 a los 21' },
      { icon: 'boxing', name: 'Boxeo', detail: 'Mi foco actual · disciplina y resiliencia' },
      { icon: 'padel', name: 'Pádel', detail: 'Habitual · agilidad y decisión rápida' },
      { icon: 'hiking', name: 'Senderismo', detail: 'Resistencia y cabeza despejada' },
      { icon: 'more', name: 'Cualquier deporte', detail: 'Aficionado al deporte en general' },
    ],
    valuesTitle: 'Lo que me ha enseñado',
    values: ['Trabajo en equipo', 'Disciplina', 'Resiliencia', 'Compromiso', 'Espíritu competitivo', 'Rendir bajo presión'],
  },
  contact: {
    title: 'Hablemos',
    subtitle: 'Abierto a roles de CRM & Automatización en Dubái. La forma más rápida de contactarme es el email.',
    emailLabel: 'Escríbeme',
    phoneLabel: 'Llamar',
    cta: 'Enviar un email',
    cvLabel: 'Descargar CV (PDF)',
    locationNote: 'Basado en Barcelona · Listo para trasladarme a Dubái, EAU',
  },
  footer: { rights: 'Todos los derechos reservados.', built: 'Diseñado y construido por Adrián Trujillo' },
}

export const content: Record<Locale, Content> = { en, es }

/** Static contact details (locale-independent) */
export const contactInfo = {
  email: 'adri.truji.pregin@gmail.com',
  phone: '+34 691 769 754',
  phoneHref: '+34691769754',
  linkedin: 'https://linkedin.com/in/adriantrujillop',
  github: 'https://github.com/truujjii',
  cvFile: '/Adrian-Trujillo-CV.pdf',
}
