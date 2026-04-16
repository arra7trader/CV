// Contact page configuration

export interface SocialLink {
  name: string
  url: string
  icon: string
  iconColor?: string
  handle: string
}

export interface ContactInfo {
  icon: string
  label: string
  value: string
  subValue?: string
}

export const contactConfig = {
  meta: {
    title: 'Contact',
    description: "Let's build something useful together.",
    caption: 'Work'
  },

  name: 'Arland Pratama Muldiawan',
  email: 'arlandpratama@gmail.com',

  location: {
    city: 'Bandung',
    region: 'West Java',
    country: 'Indonesia',
    timezone: 'GMT+7',
    flag: 'ID'
  },

  intro: {
    title: "Let's build something useful.",
    description: 'Open to AI Engineer, AI Product Engineer, and related opportunities focused on AI products, LLM integration, intelligent automation, and machine learning systems.'
  },

  contactInfo: [
    {
      icon: 'heroicons:map-pin-20-solid',
      label: 'Location',
      value: 'Bandung',
      subValue: 'West Java, Indonesia'
    },
    {
      icon: 'heroicons:envelope-20-solid',
      label: 'Email',
      value: 'arlandpratama@gmail.com',
      subValue: 'Primary contact'
    },
    {
      icon: 'heroicons:clock-20-solid',
      label: 'Timezone',
      value: 'GMT+7',
      subValue: 'Western Indonesia Time (WIB)'
    }
  ] as ContactInfo[],

  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/arra7trader',
      icon: 'simple-icons:github',
      iconColor: 'text-slate-900 dark:text-white',
      handle: '@arra7trader'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/arland-p-41598595/',
      icon: 'simple-icons:linkedin',
      iconColor: 'text-[#0A66C2]',
      handle: 'arland-p-41598595'
    }
  ] as SocialLink[],

  availability: {
    status: 'available',
    message: 'Open to AI Engineer, AI Product Engineer, and practical ML-backed software opportunities.'
  }
}
