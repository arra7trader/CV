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
    description: 'A fuller view of my professional journey across AI product engineering, commercial leadership, operations, and early industry experience.',
    caption: 'Work'
  },

  timeline: [
    {
      company: 'PT Arra Tujuh Kreasi',
      role: 'AI Product Engineer Full Stack',
      period: 'November 2023 - Present',
      periodStart: '2023-11',
      periodEnd: 'present',
      description: 'Leading the implementation of AI-powered product features and end-to-end applications that connect modern web development, agentic AI workflows, and machine learning experimentation into deployable business solutions.',
      tasks: [
        'Built LLM-powered applications with agent workflows, prompt engineering, orchestration logic, and tool-calling architecture.',
        'Delivered fullstack systems covering frontend interfaces, backend APIs, authentication flows, dashboard experiences, and database integrations.',
        'Implemented AI provider abstraction so products could scale across multiple model vendors and OpenAI-compatible services.',
        'Prepared neural network pipelines for time-series prediction using LSTM and Bi-LSTM models, including preprocessing, feature engineering, evaluation, and inference integration.',
        'Translated product, engineering, and business requirements into practical AI-enabled applications for trading intelligence, recommendation systems, PRD generation, and automation.'
      ],
      type: 'fulltime'
    },
    {
      company: 'PT. Arindra Wibowo Jaya',
      role: 'Area Sales Promotion Supervisor',
      period: 'July 2018 - January 2021',
      periodStart: '2018-07',
      periodEnd: '2021-01',
      description: 'Handled field execution and regional promotion strategy for the Bandung area, combining on-ground sales operations with digital marketing support to strengthen demand generation and brand visibility.',
      tasks: [
        'Conducted regular outlet visits to monitor execution quality, product readiness, and market opportunities.',
        'Planned and executed regional promotions to improve customer acquisition, demand generation, and shelf visibility.',
        'Managed target call planning, area mapping, and route prioritization for more effective territory coverage.',
        'Built strong relationships with customers and channel partners while preparing sales and activity reports for performance review.',
        'Ran online promotion and paid advertising through Google Ads, Facebook, and Instagram to support commercial growth.'
      ],
      type: 'fulltime'
    },
    {
      company: 'PT. United Family Food (UNIFAM)',
      role: 'Area Sales Supervisor',
      period: 'August 2017 - June 2018',
      periodStart: '2017-08',
      periodEnd: '2018-06',
      description: 'Managed area sales performance for Bogor and Depok, with responsibility for target achievement, distribution growth, product rollout support, and commercial reporting.',
      tasks: [
        'Improved sales performance and ensured target achievement across assigned territories.',
        'Developed sales strategies to expand distribution and improve market penetration.',
        'Prepared weekly, monthly, and annual reports to monitor performance and business movement.',
        'Introduced new products to market and supported launch execution in the field.',
        'Monitored customer payments to help maintain healthy receivables management.'
      ],
      type: 'fulltime'
    },
    {
      company: 'PT. Leuwijaya Utama Textile Group',
      role: 'Production Supervisor',
      period: 'March 2017 - May 2017',
      periodStart: '2017-03',
      periodEnd: '2017-05',
      description: 'Supervised production execution on the shop floor with a focus on target achievement, quality control, operator discipline, and process improvement.',
      tasks: [
        'Ensured production targets were achieved in line with daily and monthly plans.',
        'Maintained product quality according to company standards and production requirements.',
        'Supervised operators to ensure compliance with SOP, ISO 9001, and GMP requirements.',
        'Applied kaizen principles to support continuous improvement on the production floor.'
      ],
      type: 'fulltime'
    },
    {
      company: 'PT AIA Financial',
      role: 'Financial Consultant',
      period: 'October 2015 - April 2016',
      periodStart: '2015-10',
      periodEnd: '2016-04',
      description: 'Worked in customer-facing financial advisory, helping clients understand health protection and insurance planning needs while strengthening communication and consultative selling skills.',
      tasks: [
        'Advised customers on health protection and insurance planning solutions.',
        'Built trust through direct consultation and needs-based recommendation approaches.',
        'Used structured presentation and documentation workflows supported by Microsoft Office.'
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
      description: 'Completed undergraduate study in Industrial Engineering at Indonesian Computer University, building a foundation in systems thinking, process analysis, and operational problem solving.',
      tasks: [
        'Built a foundation in analysis, production systems, and structured problem solving.',
        'Developed the discipline to connect operational thinking with product and process improvement.',
        'Later translated that systems mindset into software, AI workflows, and technical product work.'
      ],
      type: 'education'
    }
  ] as TimelineItem[],

  internship: [
    {
      company: 'PT Central Texindo Knit Processing',
      role: 'Product Market Control Intern',
      period: 'February 2015 - March 2015',
      periodStart: '2015-02',
      periodEnd: '2015-03',
      description: 'Started my practical industry experience by supporting product inspection and shipment readiness while learning how human, machine, and material factors affect quality control.',
      tasks: [
        'Inspected products and coordinated shipment readiness before dispatch.',
        'Monitored human factors affecting product quality and workflow consistency.',
        'Reviewed machine-related factors that influenced operational efficiency and output quality.',
        'Evaluated material-related factors to help maintain product standards before shipment.'
      ],
      type: 'internship'
    }
  ] as TimelineItem[],
}
