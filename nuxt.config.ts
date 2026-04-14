// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  
  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/motion/nuxt',
    '@nuxt/icon',
    '@nuxtjs/sitemap'
  ],

  // Sitemap - auto-generates from pages
  sitemap: {},

  css: [
    '~/assets/css/base.css',
    '~/assets/css/components.css'
  ],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Arland P | Fullstack Developer',
      titleTemplate: '%s | Arland P',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Fullstack developer building product-focused web apps, AI tools, and trading systems.' },
        { name: 'author', content: 'Arland P' },
        { name: 'keywords', content: 'Arland P, ARRA7, Fullstack Developer, Next.js, TypeScript, Prisma, AI tools, trading systems, portfolio' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Arland P | Fullstack Developer' },
        { property: 'og:description', content: 'Fullstack developer building product-focused web apps, AI tools, and trading systems.' },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:site_name', content: 'Arland P' },
        { property: 'og:locale', content: 'en_US' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Arland P | Fullstack Developer' },
        { name: 'twitter:description', content: 'Fullstack developer building product-focused web apps, AI tools, and trading systems.' },
        { name: 'twitter:image', content: '/og-image.jpg' },
        { name: 'twitter:creator', content: '@arra7trader' },
        
        // Additional SEO
        { name: 'theme-color', content: '#8b5cf6' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'msapplication-TileColor', content: '#8b5cf6' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // Robots
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap' 
        }
      ],
      script: [
        // JSON-LD Structured Data
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Arland P',
            url: 'https://github.com/arra7trader/CV',
            jobTitle: 'Fullstack Developer',
            knowsAbout: ['Web Development', 'AI Tools', 'Trading Systems', 'Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
            sameAs: [
              'https://github.com/arra7trader',
              'https://www.linkedin.com/in/arland-p-41598595/'
            ]
          })
        }
      ]
    }
  }
})
