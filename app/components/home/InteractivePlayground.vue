<script setup lang="ts">
const colorMode = useColorMode()

const accentColors = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose'
]

const applyThemeShift = () => {
  const nextMode = colorMode.value === 'dark' ? 'light' : 'dark'
  const nextAccent = accentColors[Math.floor(Math.random() * accentColors.length)] || 'indigo'

  colorMode.preference = nextMode
  document.documentElement.setAttribute('data-primary', nextAccent)
  localStorage.setItem('theme-primary', nextAccent)
}

const cards = [
  {
    title: 'Career Journey',
    description: 'Walk through the milestones behind my transition from operations and commercial roles into AI product engineering.',
    cta: 'Open Journey',
    icon: 'heroicons:rocket-launch-solid',
    to: '/journey',
    gradient: 'from-indigo-500/18 via-violet-500/10 to-transparent',
    iconClass: 'text-violet-200',
    borderClass: 'border-violet-400/25 hover:border-violet-300/50'
  },
  {
    title: 'AI Projects',
    description: 'Explore the products I have built across LLM apps, trading systems, automation workflows, and machine learning experiments.',
    cta: 'Browse Projects',
    icon: 'heroicons:cpu-chip-20-solid',
    to: '/projects',
    gradient: 'from-cyan-500/18 via-sky-500/10 to-transparent',
    iconClass: 'text-cyan-200',
    borderClass: 'border-cyan-400/25 hover:border-cyan-300/50'
  }
]
</script>

<template>
  <section class="relative overflow-hidden bg-[#111a2d] py-20 text-white lg:py-24">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),transparent_38%)]" />
    <div class="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />

    <div class="content-wrapper relative z-10">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
          Interactive <span class="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">Playground</span>
        </h2>
        <p class="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
          A more hands-on way to explore my journey, the AI systems I build, and the interface settings behind this portfolio.
        </p>
      </div>

      <div class="mt-10 h-px w-full bg-gradient-to-r from-transparent via-slate-500/30 to-transparent" />

      <div class="mt-10 grid gap-6 lg:grid-cols-3">
        <NuxtLink
          v-for="card in cards"
          :key="card.title"
          :to="card.to"
          class="group relative overflow-hidden rounded-[2rem] border bg-slate-950/45 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.45)]"
          :class="card.borderClass"
        >
          <div class="absolute inset-0 bg-gradient-to-br opacity-90 transition-opacity duration-500 group-hover:opacity-100" :class="card.gradient" />
          <div class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/6 blur-3xl transition-transform duration-500 group-hover:scale-110" />

          <div class="relative z-10 flex h-full min-h-[18rem] flex-col">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/8 shadow-lg backdrop-blur-md">
              <Icon :name="card.icon" class="h-6 w-6" :class="card.iconClass" />
            </div>

            <h3 class="mt-8 text-3xl font-extrabold tracking-[-0.03em] text-white">
              {{ card.title }}
            </h3>

            <p class="mt-4 max-w-xs text-lg leading-relaxed text-slate-300">
              {{ card.description }}
            </p>

            <div class="mt-auto pt-8 text-lg font-semibold text-violet-300 transition-transform duration-300 group-hover:translate-x-1">
              {{ card.cta }}
              <Icon name="heroicons:arrow-right-20-solid" class="ml-2 inline h-5 w-5" />
            </div>
          </div>
        </NuxtLink>

        <button
          type="button"
          @click="applyThemeShift"
          class="group relative overflow-hidden rounded-[2rem] border border-fuchsia-400/25 bg-slate-950/45 p-8 text-left transition-all duration-500 hover:-translate-y-1 hover:border-fuchsia-300/50 hover:shadow-[0_16px_40px_rgba(15,23,42,0.45)]"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-fuchsia-500/18 via-purple-500/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
          <div class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/6 blur-3xl transition-transform duration-500 group-hover:scale-110" />

          <div class="relative z-10 flex min-h-[18rem] flex-col">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/8 shadow-lg backdrop-blur-md">
              <Icon name="heroicons:swatch-20-solid" class="h-6 w-6 text-fuchsia-200 transition-transform duration-500 group-hover:rotate-12" />
            </div>

            <h3 class="mt-8 text-3xl font-extrabold tracking-[-0.03em] text-white">
              Theme Switcher
            </h3>

            <p class="mt-4 max-w-xs text-lg leading-relaxed text-slate-300">
              Instantly flip between light and dark mode while rotating the accent palette used across the site.
            </p>

            <div class="mt-auto pt-8 text-lg font-semibold text-fuchsia-300 transition-transform duration-300 group-hover:translate-x-1">
              Change Theme
              <Icon name="heroicons:paint-brush-20-solid" class="ml-2 inline h-5 w-5" />
            </div>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>
