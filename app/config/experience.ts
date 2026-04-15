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
    description: 'Professional experience across AI product engineering, sales leadership, and systems-focused product execution.',
    caption: 'Work'
  },

  timeline: [
    {
      company: 'PT Arra Tujuh Kreasi',
      role: 'AI Product Engineer Full Stack',
      period: 'November 2023 - Present',
      periodStart: '2023-11',
      periodEnd: 'present',
      description: 'Developing AI-powered product features and end-to-end applications across web interfaces, backend APIs, dashboards, and machine learning workflows.',
      tasks: [
        'Built LLM-powered applications with agent workflows, prompt engineering, orchestration logic, and tool-calling architecture.',
        'Delivered fullstack systems covering frontend, backend APIs, authentication, dashboards, and database integrations.',
        'Prepared neural network pipelines for time-series prediction using LSTM and Bi-LSTM models, including preprocessing and evaluation.'
      ],
      type: 'fulltime'
    },
    {
      company: 'PT. Arindra Wibowo Jaya',
      role: 'Area Sales Promotion Supervisor',
      period: 'July 2018 - January 2021',
      periodStart: '2018-07',
      periodEnd: '2021-01',
      description: 'Led promotion execution, area mapping, and digital marketing support for trading and plastic distribution in the Bandung area.',
      tasks: [
        'Planned regional promotions and outlet visits to improve execution quality and demand generation.',
        'Managed Google Ads, Facebook, and Instagram promotion activities to support sales growth.',
        'Prepared sales and market reports while maintaining strong customer and channel relationships.'
      ],
      type: 'fulltime'
    },
    {
      company: 'PT. United Family Food (UNIFAM)',
      role: 'Area Sales Supervisor',
      period: 'August 2017 - June 2018',
      periodStart: '2017-08',
      periodEnd: '2018-06',
      description: 'Handled sales growth, distribution expansion, and reporting for the Bogor and Depok area.',
      tasks: [
        'Improved sales performance and distribution reach across assigned territories.',
        'Introduced new products and supported market launch execution.',
        'Monitored receivables and prepared weekly to annual performance reports.'
      ],
      type: 'fulltime'
    }
  ] as TimelineItem[],

  education: [
    {
      company: 'Indonesian Computer University',
      role: 'Bachelor of Industrial Engineering',
      period: 'September 2011 - March 2017',
      periodStart: '2011-09',
      periodEnd: '2017-03',
      description: 'Completed undergraduate study in Industrial Engineering with experience in systems thinking, process analysis, and operational problem solving.',
      tasks: [
        'Built a foundation in analysis, production systems, and structured problem solving.',
        'Developed the discipline to connect operational thinking with product and process improvement.',
        'Later translated that systems mindset into software, AI workflows, and technical product work.'
      ],
      type: 'education'
    }
  ] as TimelineItem[],

  internship: [] as TimelineItem[],
}
