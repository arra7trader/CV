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
      title: 'ARRA 7 Trading Platform',
      description: 'Full-stack AI-powered trading platform with market analysis, XAUUSD Neural Lab, DOM visualization, Fibonacci Kanji tools, sentiment analysis, copy-trade bridge, and multi-language support.',
      technologies: ['Next.js', 'TypeScript', 'React', 'AI SDK', 'Supabase', 'LibSQL'],
      type: 'personal',
      category: 'AI Trading Platform',
    },
    {
      title: 'ARRA 7 Mobile App',
      description: 'Cross-platform mobile companion for the ARRA 7 ecosystem with real-time forex analysis, Bookmap DOM view, stock screening, and Fibonacci Kanji charting — built natively with Flutter.',
      technologies: ['Flutter', 'Dart', 'Provider', 'FL Chart', 'WebView'],
      type: 'personal',
      category: 'Mobile App',
    },
    {
      title: 'PICA ERP',
      description: 'Enterprise Resource Planning system with CRM, sales, inventory, finance, and HRM modules. Monorepo architecture with NestJS API, Next.js frontend, JWT auth, RBAC, and Docker deployment.',
      technologies: ['Next.js', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL'],
      type: 'personal',
      category: 'ERP Platform',
    },
    {
      title: 'Bitcoin MSE Model Training',
      description: 'Deep learning training pipeline comparing Bi-LSTM, LSTM, GRU, and Conv1D architectures for Bitcoin price prediction using 7 macro and on-chain parameters (Halving cycle, Hashrate, MVRV Z-Score, etc.).',
      technologies: ['Python', 'TensorFlow', 'LSTM', 'GRU', 'Pandas'],
      type: 'personal',
      category: 'Machine Learning',
    },
    {
      title: 'Cryptologic V1',
      description: 'Crypto market intelligence engine with CoinGecko data harvesting, Monte Carlo forecasting, seasonality analysis, and OHLC hypertable storage via FastAPI backend.',
      technologies: ['Python', 'FastAPI', 'TensorFlow', 'SQLAlchemy', 'Docker'],
      type: 'personal',
      category: 'Quant / AI',
    },
    {
      title: 'Cryptologic V2',
      description: 'Next-generation crypto analytics app with astronomy-based timing engine, Framer Motion UI, and LibSQL persistence for advanced market pattern recognition.',
      technologies: ['Next.js', 'TypeScript', 'React', 'Framer Motion', 'LibSQL'],
      type: 'personal',
      category: 'Crypto Analytics',
    },
    {
      title: 'Bookmap DOM Visualizer',
      description: 'Real-time depth-of-market heatmap with animated order flow visualization, built as a lightweight Vite app for ultra-fast rendering of live trading data.',
      technologies: ['Vite', 'HTML', 'JavaScript', 'CSS'],
      type: 'personal',
      category: 'Trading Visualization',
    },
    {
      title: 'VGCorps MT5 Bridge',
      description: 'Python-powered bridge connecting MetaTrader 5 to web-based DOM visualization via REST API, with real-time market depth streaming, heatmap rendering, and desktop client distribution.',
      technologies: ['Python', 'FastAPI', 'MetaTrader 5', 'JavaScript', 'WebSocket'],
      type: 'personal',
      category: 'Trading Infrastructure',
    },
    {
      title: 'Arra Tujuh Kreasi',
      description: 'Modern e-commerce storefront with product catalog, dark mode, contact forms, and animated UI — built as a freelance project with Next.js 15 and Framer Motion.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      type: 'freelance',
      category: 'Commerce Website',
      github: 'https://github.com/arratujuhkreasi/Arra-Tujuh-Kreasi',
    },
    {
      title: 'Zadhifa Farm',
      description: 'Agricultural management web app for Zadhifa Farm with inventory tracking, sales analytics (Recharts), Prisma ORM on Turso/LibSQL, and Vercel Blob for image storage.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Turso', 'Recharts'],
      type: 'freelance',
      category: 'Farm Management',
    },
    {
      title: 'ARRA Website (Legacy)',
      description: 'Trading community portal with session-based authentication, payment flow integration, membership tiers, and admin dashboard — built with vanilla PHP and custom CSS.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
      type: 'personal',
      category: 'Web Portal',
    },
    {
      title: 'Indicator Maker',
      description: 'AI-powered trading indicator generator with Gemini/Groq LLM integration, user authentication, and admin panel. React + Vite frontend with Express + Prisma backend.',
      technologies: ['React', 'Vite', 'Express', 'Prisma', 'Gemini AI'],
      type: 'personal',
      category: 'AI Tool',
    },
    {
      title: 'CreatorCore AI',
      description: 'Agentic AI dashboard for UMKM workflows with Better Auth authentication, SQLite persistence, and orchestration-first UX for small business automation.',
      technologies: ['Next.js', 'TypeScript', 'Better Auth', 'SQLite'],
      type: 'personal',
      category: 'AI Product',
    },
    {
      title: 'Aether Auto SaaS',
      description: 'Autonomous self-evolving SaaS experiment — an AI-driven entity that pilots its own codebase via GitHub Octokit, generates revenue strategies, and deploys itself.',
      technologies: ['Next.js', 'TypeScript', 'OpenAI', 'LibSQL', 'Octokit'],
      type: 'personal',
      category: 'AI Experiment',
    },
    {
      title: 'Fibonacci Kanji Expert Advisor',
      description: 'Custom MetaTrader 5 Expert Advisor and TradingView indicator suite implementing Fibonacci-based entry systems with ICT concepts for automated forex execution.',
      technologies: ['MQL5', 'Pine Script', 'MetaTrader 5'],
      type: 'personal',
      category: 'Algo Trading',
    },
    {
      title: 'Bookmap Arra',
      description: 'Advanced order book visualization app with React 19, real-time heatmap rendering, and Tailwind CSS styling for professional-grade depth-of-market analysis.',
      technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
      type: 'personal',
      category: 'Trading Visualization',
    }
  ] as Project[]
}
