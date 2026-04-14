// Experience page configuration

export interface TimelineItem {
  company: string
  role: string
  period: string
  periodStart: string
  periodEnd: string
  description: string
  tasks: string[]
  type: 'freelance' | 'fulltime' | 'education' | 'internship'
}

export const experienceConfig = {
  meta: {
    title: 'Experience',
    description: 'A snapshot of the products, experiments, and technical direction I am building right now.',
    caption: 'Work'
  },

  timeline: [
    {
      company: 'ARRA7 Independent Projects',
      role: 'Fullstack Developer & Product Builder',
      period: '2025 - Present',
      periodStart: '2025-12',
      periodEnd: 'present',
      description: 'Building a portfolio of web products across AI tooling, ERP workflows, trading systems, and automation-heavy internal tools.',
      tasks: [
        'Shipped products such as Reclipa, XAUUSD Extreme Expert, Crypto Telegram Desk, and PICA ERP.',
        'Focused on end-to-end delivery: interface design, route handlers, database design, and product architecture.',
        'Worked mostly with Next.js, TypeScript, Prisma, PostgreSQL, SQLite, and workflow automation patterns.'
      ],
      type: 'freelance'
    }
  ] as TimelineItem[],

  education: [
    {
      company: 'Self-Directed Learning',
      role: 'Web, AI, and Trading Systems',
      period: 'Ongoing',
      periodStart: '2024',
      periodEnd: 'present',
      description: 'Continuously sharpening product thinking and execution across modern web engineering, automation, analytics, and domain-specific trading tools.',
      tasks: [
        'Exploring system design through real builds instead of isolated demos.',
        'Studying practical AI workflows, research tooling, and local-first product patterns.',
        'Using each shipped project as a lab for architecture, usability, and business-oriented problem solving.'
      ],
      type: 'education'
    }
  ] as TimelineItem[],

  internship: [] as TimelineItem[],
}
