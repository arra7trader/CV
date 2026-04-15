<script setup lang="ts">
import { experienceConfig } from '~/config/experience'
import clsx from 'clsx'

useSeoMeta({
  title: experienceConfig.meta.title,
  description: experienceConfig.meta.description
})

const freelanceItems = experienceConfig.timeline.filter(item => item.type === 'freelance')
const fulltimeItems = experienceConfig.timeline.filter(item => item.type === 'fulltime')
const educationItems = experienceConfig.education
const internshipItems = experienceConfig.internship

const sections = [
  { id: 'education', label: 'Learning', icon: 'heroicons:academic-cap-20-solid', items: educationItems },
  { id: 'internship', label: 'Internship', icon: 'heroicons:building-library-20-solid', items: internshipItems },
  { id: 'freelance', label: 'Independent Work', icon: 'heroicons:briefcase-20-solid', items: freelanceItems },
  { id: 'fulltime', label: 'Full-time Work', icon: 'heroicons:building-office-2-20-solid', items: fulltimeItems },
].filter(section => section.items.length > 0)

const activeSection = ref(sections[0]?.id || '')

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    }
  )

  sections.forEach((item) => {
    const element = document.getElementById(item.id)
    if (element) observer.observe(element)
  })

  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <div class="relative">
    <aside class="fixed top-32 right-[max(2rem,calc((100vw-1200px)/2+1rem))] z-50 hidden w-56 lg:block">
      <div
        :class="clsx(
          'rounded-xl border border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur-sm',
          'dark:border-slate-700 dark:bg-slate-900/95'
        )"
      >
        <h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          On this page
        </h3>
        <nav class="space-y-1">
          <button
            v-for="item in sections"
            :key="item.id"
            @click="scrollToSection(item.id)"
            :class="clsx(
              'group flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-all duration-200',
              activeSection === item.id
                ? ['bg-accent-50 text-accent-700', 'dark:bg-accent-900/30 dark:text-accent-400']
                : ['text-slate-600 hover:bg-slate-100 hover:text-slate-900', 'dark:text-slate-400 dark:hover:bg-slate-700/50 dark:hover:text-slate-200']
            )"
          >
            <span
              :class="clsx(
                'flex h-7 w-7 items-center justify-center rounded-lg transition-colors',
                activeSection === item.id
                  ? ['bg-accent-100 dark:bg-accent-800/50']
                  : ['bg-slate-100 group-hover:bg-slate-200', 'dark:bg-slate-700 dark:group-hover:bg-slate-600']
              )"
            >
              <Icon
                :name="item.icon"
                :class="clsx(
                  'h-3.5 w-3.5',
                  activeSection === item.id ? 'text-accent-600 dark:text-accent-400' : 'text-slate-500 dark:text-slate-400'
                )"
              />
            </span>
            {{ item.label }}
            <span
              v-if="activeSection === item.id"
              class="ml-auto h-1.5 w-1.5 rounded-full bg-accent-500"
            />
          </button>
        </nav>
      </div>
    </aside>

    <header class="background-grid background-grid--fade-out pb-10 pt-32 lg:pb-14 lg:pt-40">
      <div class="content-wrapper">
        <div class="max-w-3xl">
          <div class="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400 lg:mb-4">
            {{ experienceConfig.meta.caption }}
          </div>
          <h1 class="text-2xl font-extrabold text-slate-700 dark:text-slate-300 md:text-4xl">
            {{ experienceConfig.meta.title }}
          </h1>
          <p class="mt-2 text-slate-600 dark:text-slate-400">
            {{ experienceConfig.meta.description }}
          </p>
        </div>
      </div>
    </header>

    <div class="pb-20" id="page-content">
      <div class="content-wrapper">
        <div class="page-content max-w-3xl">
          <p class="mb-8">
            This page captures the broader journey behind my work, from early operational and commercial roles to my current focus on AI product engineering, fullstack delivery, and machine learning-driven systems.
          </p>

          <NuxtLink
            to="/journey"
            class="group relative mb-12 block w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-500 hover:border-accent-500/50 hover:shadow-[0_10px_30px_rgba(var(--color-primary-500),0.15)] dark:border-slate-800 dark:bg-slate-900 dark:hover:border-accent-500/50 dark:hover:shadow-[0_0_30px_rgba(var(--color-primary-500),0.15)] sm:p-8"
          >
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100 dark:from-accent-900/30 dark:via-slate-900 dark:to-black" />
            <div class="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent-600/10 blur-3xl transition-colors duration-500 group-hover:bg-accent-500/20 dark:bg-accent-600/20 dark:group-hover:bg-accent-500/30" />

            <div class="relative z-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div class="flex items-center gap-5">
                <div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-accent-500/20 bg-accent-500/10 text-accent-600 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 dark:border-accent-500/30 dark:bg-accent-500/10 dark:text-accent-400">
                  <Icon name="heroicons:rocket-launch-solid" class="h-7 w-7" />
                </div>
                <div>
                  <h3 class="mb-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-300">Want a more immersive look?</h3>
                  <p class="text-sm text-slate-600 dark:text-slate-400 sm:text-base">Explore this story through the interactive journey view.</p>
                </div>
              </div>

              <div class="flex flex-shrink-0 items-center justify-center rounded-full border border-accent-500/20 bg-accent-500/10 px-5 py-2.5 font-medium text-accent-700 transition-colors group-hover:bg-accent-500/20 dark:border-white/10 dark:bg-white/10 dark:text-white dark:group-hover:bg-white/20">
                Launch <Icon name="heroicons:arrow-right-20-solid" class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </NuxtLink>

          <div class="mt-6 mb-6 lg:hidden">
            <div
              :class="clsx(
                'rounded-xl border border-slate-200 bg-slate-50 p-4',
                'dark:border-slate-700 dark:bg-slate-800/50'
              )"
            >
              <h3 class="mb-3 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Jump to section
              </h3>
              <nav class="flex flex-wrap gap-2">
                <button
                  v-for="item in sections"
                  :key="item.id"
                  @click="scrollToSection(item.id)"
                  :class="clsx(
                    'flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                    activeSection === item.id
                      ? ['bg-accent-500 text-white']
                      : ['bg-slate-200 text-slate-700 hover:bg-slate-300', 'dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600']
                  )"
                >
                  <Icon :name="item.icon" class="h-4 w-4" />
                  {{ item.label }}
                </button>
              </nav>
            </div>
          </div>

          <section
            v-for="section in sections"
            :id="section.id"
            :key="section.id"
            class="mt-10 scroll-mt-24"
          >
            <h2>{{ section.label }}</h2>
            <WorkTimeline :items="section.items" />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
