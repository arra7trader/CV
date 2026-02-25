<script setup lang="ts">
// Detail Oriented Section
</script>

<template>
  <div class="content-wrapper relative">
    <!-- Deep Ambient Glow Background -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none"></div>

    <div class="relative z-10 flex flex-col gap-8 lg:flex-row-reverse lg:gap-16">
      <div class="flex-1 lg:py-12">
        <h2 
          v-motion
          :initial="{ x: 20, opacity: 0 }"
          :visibleOnce="{ x: 0, opacity: 1, transition: { delay: 100 } }"
          class="mb-4 text-2xl font-bold text-slate-800 dark:text-slate-200 md:text-3xl"
        >
          Problem Solver
        </h2>
        <p 
          v-motion
          :initial="{ x: 20, opacity: 0 }"
          :visibleOnce="{ x: 0, opacity: 1, transition: { delay: 200 } }"
          class="text-slate-600 dark:text-slate-400 mb-8 lg:text-lg leading-relaxed"
        >
          Breaking down complex challenges into manageable solutions. 
          I love analyzing problems and finding the most efficient approach
          to solve them.
        </p>

        <!-- Logic Badges -->
        <div 
          v-motion
          :initial="{ y: 20, opacity: 0 }"
          :visibleOnce="{ y: 0, opacity: 1, transition: { delay: 400 } }"
          class="flex flex-wrap gap-3"
        >
          <div class="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
            <Icon name="heroicons:magnifying-glass" class="h-3.5 w-3.5 text-blue-400" /> Analytical
          </div>
          <div class="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
            <Icon name="heroicons:code-bracket" class="h-3.5 w-3.5 text-emerald-400" /> Algorithmic
          </div>
          <div class="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-300">
             <Icon name="heroicons:cpu-chip" class="h-3.5 w-3.5 text-violet-400" /> System Design
          </div>
        </div>
      </div>
      <div class="flex flex-1 items-center justify-center lg:justify-start">
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visibleOnce="{ opacity: 1, scale: 1, transition: { delay: 300, duration: 800 } }"
          class="w-full max-w-sm flex justify-center"
        >
          <HomeAnimatedMaze />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes wiggle {
  0%, 100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
}

@keyframes pulse-x {
  0%, 100% {
    transform: translateX(0);
    opacity: 1;
  }
  50% {
    transform: translateX(4px);
    opacity: 0.7;
  }
}

.animate-wiggle {
  animation: wiggle 2s ease-in-out infinite;
}

.animate-pulse-x {
  animation: pulse-x 1.5s ease-in-out infinite;
}
</style>
