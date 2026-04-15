<script setup lang="ts">
const codeSnippets = [
  {
    filename: 'developer.ts',
    lines: [
      { text: 'const developer = {', color: 'text-violet-600 dark:text-violet-400' },
      { text: '  name: "Arland Pratama",', color: 'text-emerald-600 dark:text-green-400' },
      { text: '  role: "AI Product Engineer",', color: 'text-emerald-600 dark:text-green-400' },
      { text: '  stack: ["Next", "TS", "Py"],', color: 'text-amber-600 dark:text-amber-400' },
      { text: '  ships: "real products"', color: 'text-pink-600 dark:text-pink-400' },
      { text: '};', color: 'text-violet-600 dark:text-violet-400' },
    ]
  },
  {
    filename: 'systems.ts',
    lines: [
      { text: 'class ProductBuilder {', color: 'text-violet-600 dark:text-violet-400' },
      { text: '  build(problem) {', color: 'text-sky-600 dark:text-sky-400' },
      { text: '    return solve(', color: 'text-emerald-600 dark:text-green-400' },
      { text: '      problem, fast', color: 'text-emerald-600 dark:text-green-400' },
      { text: '    )', color: 'text-amber-600 dark:text-amber-400' },
      { text: '  }', color: 'text-violet-600 dark:text-violet-400' },
    ]
  },
  {
    filename: 'markets.ts',
    lines: [
      { text: 'const focus = [', color: 'text-violet-600 dark:text-violet-400' },
      { text: '  "automation",', color: 'text-sky-600 dark:text-sky-400' },
      { text: '  "ml systems",', color: 'text-emerald-600 dark:text-green-400' },
      { text: '  "trading tools"', color: 'text-emerald-600 dark:text-green-400' },
      { text: ']', color: 'text-amber-600 dark:text-amber-400' },
      { text: '', color: 'text-violet-600 dark:text-violet-400' },
    ]
  },
]

const currentSnippetIndex = ref(0)
const currentLineIndex = ref(0)
const showCursor = ref(true)
const isTransitioning = ref(false)

onMounted(() => {
  setInterval(() => {
    if (codeSnippets[currentSnippetIndex.value] && currentLineIndex.value < codeSnippets[currentSnippetIndex.value]!.lines.length + 1) {
      currentLineIndex.value++
    } else {
      isTransitioning.value = true
      setTimeout(() => {
        currentSnippetIndex.value = (currentSnippetIndex.value + 1) % codeSnippets.length
        currentLineIndex.value = 0
        isTransitioning.value = false
      }, 500)
    }
  }, 600)

  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
})

const currentSnippet = computed(() => codeSnippets[currentSnippetIndex.value] || codeSnippets[0])
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, scale: 0.95 }"
    :enter="{ opacity: 1, scale: 1, transition: { delay: 500, duration: 800 } }"
    class="relative mx-auto h-[400px] w-[400px] lg:h-[480px] lg:w-[480px]"
  >
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div class="absolute h-80 w-80 rounded-full border border-accent-500/20 animate-spin-slow lg:h-96 lg:w-96" />
      <div class="absolute h-64 w-64 rounded-full bg-gradient-to-br from-accent-500/10 to-violet-500/10 animate-pulse lg:h-80 lg:w-80" style="animation-duration: 3s;" />

      <div class="absolute top-4 left-6 animate-float" style="animation-delay: 0s;">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-900/20 bg-slate-900/10 shadow-lg backdrop-blur-md dark:border-white/20 dark:bg-white/10">
          <Icon name="simple-icons:nextdotjs" class="h-5 w-5 text-slate-900 dark:text-white" />
        </div>
      </div>
      <div class="absolute top-12 -right-2 animate-float" style="animation-delay: 0.5s;">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3178C6]/40 bg-[#3178C6]/20 shadow-lg backdrop-blur-md">
          <Icon name="simple-icons:typescript" class="h-5 w-5 text-[#3178C6]" />
        </div>
      </div>
      <div class="absolute bottom-28 left-4 animate-float z-30" style="animation-delay: 1s;">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-[#4169E1]/40 bg-[#4169E1]/20 shadow-lg backdrop-blur-md">
          <Icon name="simple-icons:postgresql" class="h-5 w-5 text-[#4169E1]" />
        </div>
      </div>
      <div class="absolute top-1/2 -right-4 mt-8 animate-float z-30" style="animation-delay: 1.5s;">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-[#06B6D4]/40 bg-[#06B6D4]/20 shadow-lg backdrop-blur-md">
          <Icon name="simple-icons:tailwindcss" class="h-5 w-5 text-[#06B6D4]" />
        </div>
      </div>
    </div>

    <div class="absolute inset-8 z-10 overflow-hidden rounded-[3rem] border border-slate-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-transform duration-700 hover:scale-[1.02] dark:border-slate-700/50 lg:inset-10 lg:bottom-16">
      <img
        src="/profile.jpg"
        alt="Profile Avatar"
        class="h-full w-full object-cover transition-all duration-700 hover:scale-105"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
    </div>

    <div
      class="code-editor absolute -bottom-4 right-0 z-20 w-64 overflow-hidden rounded-2xl border border-slate-200/50 bg-white/90 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.3)] dark:border-slate-700/50 dark:bg-slate-900/90 lg:-right-4 lg:w-72"
      :class="isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
    >
      <div class="flex items-center gap-2 border-b border-slate-200/50 bg-slate-100/30 px-3 py-2.5 dark:border-slate-800/50 dark:bg-slate-800/30">
        <div class="flex gap-1.5">
          <div class="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div class="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div class="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <span class="ml-2 text-[11px] font-medium tracking-wide text-slate-500 transition-all duration-300 dark:text-slate-400">
          {{ currentSnippet?.filename }}
        </span>
      </div>

      <div class="p-4 font-mono text-[11px] leading-relaxed sm:text-xs">
        <div
          v-for="(line, index) in currentSnippet?.lines"
          :key="index"
          class="flex items-center transition-all duration-300"
          :class="index < currentLineIndex ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'"
        >
          <span class="mr-3 w-4 text-right opacity-50">{{ index + 1 }}</span>
          <span :class="line.color">{{ line.text }}</span>
          <span
            v-if="index === currentLineIndex - 1 && showCursor && currentLineIndex <= (currentSnippet?.lines.length || 0)"
            class="ml-0.5 inline-block h-4 w-0.5 bg-accent-500 animate-pulse"
          />
        </div>
      </div>
    </div>

    <div class="absolute top-16 left-16 z-30 h-1 w-1 rounded-full bg-accent-400 animate-ping" style="animation-duration: 2s;" />
    <div class="absolute bottom-28 right-32 z-30 h-1.5 w-1.5 rounded-full bg-violet-400 animate-ping" style="animation-duration: 2.5s; animation-delay: 0.5s;" />
    <div class="absolute top-1/2 -right-4 z-30 h-1.5 w-1.5 rounded-full bg-pink-400 animate-ping" style="animation-duration: 3s; animation-delay: 1s;" />
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.code-editor {
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.4),
    0 0 40px -10px rgba(139, 92, 246, 0.2);
}
</style>
