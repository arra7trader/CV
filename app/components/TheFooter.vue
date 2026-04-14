<script setup lang="ts">
import clsx from 'clsx'
import { contactConfig } from '~/config/contact'

interface FooterLinkItem {
  title: string
  href: string
  isInternal?: boolean
}

interface FooterGroup {
  title: string
  links: FooterLinkItem[]
}

const footerGroups: FooterGroup[] = [
  {
    title: 'Work',
    links: [
      { title: 'Projects', href: '/projects' },
      { title: 'Skills and Tools', href: '/skills-and-tools' },
      { title: 'Experience', href: '/experience' },
      { title: 'Contact', href: '/contact' },
    ]
  },
  {
    title: 'Profiles',
    links: [
      { title: 'GitHub', href: 'https://github.com/arra7trader', isInternal: false },
      { title: 'LinkedIn', href: 'https://www.linkedin.com/in/arland-p-41598595/', isInternal: false },
    ]
  },
  {
    title: 'This Site',
    links: [
      { title: 'Source Code', href: 'https://github.com/arra7trader/CV', isInternal: false },
    ]
  }
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    :class="clsx(
      'background-grid background-grid--fade-in border-divider-light mt-24 pt-16 text-sm text-slate-900',
      'dark:border-divider-dark dark:text-slate-200'
    )"
  >
    <div :class="clsx('content-wrapper')">
      <div :class="clsx('py-10 font-semibold')">
        <div :class="clsx('flex flex-col-reverse gap-16', 'lg:flex-row')">
          <div :class="clsx('flex-1')">
            <div :class="clsx('max-w-[360px]')">
              <div
                :class="clsx(
                  'mb-3 text-[13px] text-slate-600',
                  'dark:text-slate-400'
                )"
              >
                About Me
              </div>
              <p :class="clsx('mb-4 font-normal leading-relaxed')">
                I'm {{ contactConfig.name }}, a <strong>fullstack developer</strong> building product-focused web apps, AI tools, and trading systems.
              </p>
              <ul :class="clsx('-ml-2 flex gap-1')">
                <li v-for="social in contactConfig.socialLinks" :key="social.name">
                  <a
                    :href="social.url"
                    target="_blank"
                    rel="noreferrer nofollow"
                    :class="clsx('flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-slate-800')"
                    :aria-label="`My ${social.name} profile`"
                    :title="`My ${social.name} profile`"
                  >
                    <Icon :name="social.icon" class="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            :class="clsx(
              '-mx-2 flex flex-1 flex-col gap-8',
              'sm:flex-row sm:gap-16 lg:mx-0'
            )"
          >
            <div v-for="group in footerGroups" :key="group.title" class="flex-1">
              <div
                :class="clsx(
                  'mb-2 px-2 text-[13px] text-slate-600',
                  'dark:text-slate-400'
                )"
              >
                {{ group.title }}
              </div>
              <ul :class="clsx('flex flex-col')">
                <li v-for="link in group.links" :key="link.href">
                  <template v-if="link.isInternal === false">
                    <a
                      :href="link.href"
                      target="_blank"
                      rel="noreferrer nofollow"
                      :class="clsx('footer-link')"
                    >
                      {{ link.title }}
                      <Icon name="heroicons:arrow-top-right-on-square-20-solid" class="h-3.5 w-3.5" />
                    </a>
                  </template>
                  <template v-else>
                    <NuxtLink :to="link.href" :class="clsx('footer-link')">
                      {{ link.title }}
                    </NuxtLink>
                  </template>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        :class="clsx(
          'border-divider-light flex justify-between border-t py-6 text-xs',
          'dark:border-divider-dark'
        )"
      >
        <div :class="clsx('font-semibold')">
          © {{ currentYear }}, {{ contactConfig.name }}
        </div>
        <div :class="clsx('text-slate-500', 'dark:text-slate-400')">
          Built with care in Indonesia
        </div>
      </div>
    </div>
  </footer>
</template>
