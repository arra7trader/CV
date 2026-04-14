// Projects page configuration

export interface Project {
  title: string
  description: string
  image?: string      // Optional: path to image e.g. '/assets/images/projects/project-name.png'
  technologies: string[]
  type: 'freelance' | 'fulltime' | 'internship' | 'personal'
  category: string
  link?: string       // Optional: live website URL e.g. 'https://example.com'
  github?: string     // Optional: github repo URL
}

export const projectsConfig = {
  meta: {
    title: 'Selected Projects',
    description: 'A selection of product builds, experiments, and systems I have been shaping recently.',
    caption: 'Work'
  },

  projects: [
    {
      title: 'Reclipa',
      description: 'Local-first content clipping workspace that combines transcript analysis, hook research, and clip generation into one practical workflow.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'SQLite', 'FFmpeg'],
      type: 'personal',
      category: 'AI Tool',
    },
    {
      title: 'PICA ERP',
      description: 'Modern ERP platform covering CRM, sales, inventory, finance, and HR workflows with a modular fullstack architecture.',
      technologies: ['Next.js', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL'],
      type: 'personal',
      category: 'ERP Platform',
    },
    {
      title: 'XAUUSD Extreme Expert',
      description: 'A focused analysis platform for XAUUSD with market structure, liquidity behavior, session context, and scenario planning.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity'],
      type: 'personal',
      category: 'Trading Platform',
      github: 'https://github.com/arra7trader/XAUUSD',
    },
    {
      title: 'Crypto Telegram Desk',
      description: 'Next.js-based crypto desk with landing pages, admin approval flow, payment confirmation, and Telegram webhook integration.',
      technologies: ['Next.js', 'TypeScript', 'Turso', 'Telegram', 'Tailwind CSS'],
      type: 'personal',
      category: 'Trading Tool',
      github: 'https://github.com/arra7trader/Telebot-Crypto',
    },
    {
      title: 'ARRA Private Telegram Bot',
      description: 'Invite-only trading bot service with watchlist alerts, journaling, risk helpers, and webhook-ready architecture.',
      technologies: ['TypeScript', 'Express', 'libSQL', 'Zod'],
      type: 'personal',
      category: 'Automation',
    },
    {
      title: 'Arra Tujuh Kreasi',
      description: 'A polished commerce website and admin flow built with a modern storefront experience and strong visual presentation.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      type: 'freelance',
      category: 'Commerce Website',
      github: 'https://github.com/arratujuhkreasi/Arra-Tujuh-Kreasi',
    },
    {
      title: 'CreatorCore AI',
      description: 'Agentic AI dashboard baseline for UMKM workflows with authentication, orchestration flow, and monitoring-first UX.',
      technologies: ['Next.js', 'TypeScript', 'Better Auth', 'SQLite'],
      type: 'personal',
      category: 'AI Product',
    },
    {
      title: 'MrVGFX',
      description: 'Market visualization experiment for MT5 depth-of-market and real-time trading context display.',
      technologies: ['HTML', 'JavaScript', 'libSQL'],
      type: 'personal',
      category: 'Trading Visualization',
      github: 'https://github.com/arra7trader/MrVGFX',
    }
  ] as Project[]
}
