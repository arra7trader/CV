// Skills and Tools page configuration

export interface Skill {
  name: string
  indicator: number
  icon?: string // nuxt-icon name for colored logos
  iconColor?: string // brand color for the icon
}

export interface Role {
  title: string
  icon: string
  description: string
  color: string
}

export interface TechCard {
  name: string
  icon: string
  description: string
  gradient: string
  iconBg: string
  iconColor: string
}

export const skillsConfig = {
  meta: {
    title: 'Skills and Tools',
    description: 'A closer look at the languages, frameworks, databases, and tools behind my recent product builds.',
    caption: 'Work'
  },

  yearsOfExperience: () => 3,
  
  roles: [
    {
      title: 'AI Product Engineer',
      icon: 'heroicons:globe-alt-20-solid',
      description: 'Building production-ready AI products from interface to backend',
      color: 'accent'
    },
    {
      title: 'Machine Learning Builder',
      icon: 'heroicons:cpu-chip-20-solid',
      description: 'Designing training pipelines, forecasting models, and inference-ready workflows',
      color: 'accent'
    },
    {
      title: 'Trading Systems Builder',
      icon: 'heroicons:chart-bar-square-20-solid',
      description: 'Shipping market-focused tools, bots, and decision-support products',
      color: 'accent'
    }
  ] as Role[],

  techCards: [
    {
      name: 'Next.js',
      icon: 'simple-icons:nextdotjs',
      description: 'The main framework I reach for when building ambitious product interfaces and app flows.',
      gradient: 'from-slate-50 dark:from-slate-900/20',
      iconBg: 'bg-slate-100 dark:bg-slate-900/50',
      iconColor: 'text-slate-900 dark:text-white'
    },
    {
      name: 'TypeScript',
      icon: 'simple-icons:typescript',
      description: 'My default language for shipping safer frontends, backends, and tooling.',
      gradient: 'from-blue-50 dark:from-blue-900/20',
      iconBg: 'bg-blue-100 dark:bg-blue-900/50',
      iconColor: 'text-[#3178C6]'
    },
    {
      name: 'Python',
      icon: 'simple-icons:python',
      description: 'The language I use for model training, data preparation, and ML service workflows.',
      gradient: 'from-emerald-50 dark:from-emerald-900/20',
      iconBg: 'bg-emerald-100 dark:bg-emerald-900/50',
      iconColor: 'text-[#3776AB]'
    },
    {
      name: 'PostgreSQL',
      icon: 'simple-icons:postgresql',
      description: 'My go-to database for systems that need structure, scale, and confidence.',
      gradient: 'from-indigo-50 dark:from-indigo-900/20',
      iconBg: 'bg-indigo-100 dark:bg-indigo-900/50',
      iconColor: 'text-[#4169E1]'
    }
  ] as TechCard[],

  programmingLanguages: [
    { name: 'TypeScript', indicator: 95, icon: 'simple-icons:typescript', iconColor: 'text-[#3178C6]' },
    { name: 'Python', indicator: 90, icon: 'simple-icons:python', iconColor: 'text-[#3776AB]' },
    { name: 'JavaScript', indicator: 90, icon: 'simple-icons:javascript', iconColor: 'text-[#F7DF1E]' },
    { name: 'SQL', indicator: 85, icon: 'simple-icons:postgresql', iconColor: 'text-[#4169E1]' },
    { name: 'PHP', indicator: 70, icon: 'simple-icons:php', iconColor: 'text-[#777BB4]' },
    { name: 'HTML/CSS', indicator: 90, icon: 'simple-icons:html5', iconColor: 'text-[#E34F26]' },
  ] as Skill[],

  frameworks: [
    { name: 'Next.js', indicator: 95, icon: 'simple-icons:nextdotjs', iconColor: 'text-slate-900 dark:text-white' },
    { name: 'React', indicator: 90, icon: 'simple-icons:react', iconColor: 'text-[#61DAFB]' },
    { name: 'FastAPI', indicator: 80, icon: 'simple-icons:fastapi', iconColor: 'text-[#009688]' },
    { name: 'Tailwind CSS', indicator: 90, icon: 'simple-icons:tailwindcss', iconColor: 'text-[#06B6D4]' },
    { name: 'Express', indicator: 80, icon: 'simple-icons:express', iconColor: 'text-slate-700 dark:text-slate-200' },
    { name: 'NestJS', indicator: 75, icon: 'simple-icons:nestjs', iconColor: 'text-[#E0234E]' },
    { name: 'Flutter', indicator: 70, icon: 'simple-icons:flutter', iconColor: 'text-[#02569B]' },
    { name: 'Nuxt.js', indicator: 65, icon: 'simple-icons:nuxtdotjs', iconColor: 'text-[#00DC82]' },
  ] as Skill[],

  databases: [
    { name: 'SQLite', indicator: 90, icon: 'simple-icons:sqlite', iconColor: 'text-[#003B57]' },
    { name: 'PostgreSQL', indicator: 85, icon: 'simple-icons:postgresql', iconColor: 'text-[#4169E1]' },
    { name: 'Turso', indicator: 85, icon: 'simple-icons:turso', iconColor: 'text-[#4FF8D2]' },
    { name: 'MySQL', indicator: 70, icon: 'simple-icons:mysql', iconColor: 'text-[#4479A1]' },
  ] as Skill[],

  tools: [
    { name: 'VS Code', indicator: 95, icon: 'simple-icons:visualstudiocode', iconColor: 'text-[#007ACC]' },
    { name: 'Git', indicator: 90, icon: 'simple-icons:git', iconColor: 'text-[#F05032]' },
    { name: 'GitHub', indicator: 90, icon: 'simple-icons:github', iconColor: 'text-slate-900 dark:text-white' },
    { name: 'TensorFlow', indicator: 80, icon: 'simple-icons:tensorflow', iconColor: 'text-[#FF6F00]' },
    { name: 'OpenAI API', indicator: 85, icon: 'simple-icons:openai', iconColor: 'text-slate-800 dark:text-slate-100' },
    { name: 'Postman', indicator: 80, icon: 'simple-icons:postman', iconColor: 'text-[#FF6C37]' },
    { name: 'Sanity', indicator: 70, icon: 'simple-icons:sanity', iconColor: 'text-[#F03E2F]' },
    { name: 'FFmpeg', indicator: 70, icon: 'simple-icons:ffmpeg', iconColor: 'text-[#007808]' },
    { name: 'Docker', indicator: 60, icon: 'simple-icons:docker', iconColor: 'text-[#2496ED]' },
  ] as Skill[],
}
