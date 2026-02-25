<script setup lang="ts">
// Animated Knowledge Core component
</script>

<template>
  <div class="relative flex h-[350px] w-full max-w-sm items-center justify-center p-4">
    <!-- Outer ambient glow -->
    <div class="absolute h-56 w-56 rounded-full bg-accent-500/10 opacity-50 blur-3xl mix-blend-screen animate-pulse dark:bg-accent-500/20" style="animation-duration: 5s;"></div>

    <div class="relative h-64 w-64 flex items-center justify-center">
      
      <!-- Orbiting planetary rings -->
      <div class="absolute inset-0 rounded-full border border-slate-300/40 dark:border-slate-600/40 animate-spin-orbit-1" style="transform-style: preserve-3d; transform: rotateX(60deg) rotateY(20deg);">
        <div class="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]"></div>
      </div>
      
      <div class="absolute inset-0 rounded-full border border-slate-300/40 dark:border-slate-600/40 animate-spin-orbit-2" style="transform-style: preserve-3d; transform: rotateX(70deg) rotateY(-30deg);">
        <div class="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"></div>
      </div>

      <div class="absolute inset-4 rounded-full border border-accent-400/30 dark:border-accent-600/40 animate-spin-orbit-3" style="transform-style: preserve-3d; transform: rotateX(50deg) rotateY(40deg);">
        <div class="absolute top-1/2 -right-1 h-2 w-2 -translate-y-1/2 rounded-full bg-violet-400 shadow-[0_0_10px_#8b5cf6]"></div>
      </div>

      <!-- The Core -->
      <div class="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent-400 to-indigo-600 shadow-[0_0_40px_rgba(139,92,246,0.5)]">
        <!-- Core inner pulse -->
        <div class="absolute inset-0 rounded-full bg-white/20 animate-ping" style="animation-duration: 2s;"></div>
        
        <!-- Core Icon -->
        <Icon name="heroicons:sparkles-solid" class="relative z-20 h-10 w-10 text-white drop-shadow-md animate-pulse" style="animation-duration: 3s;" />
        
        <!-- Radiating Data Particles (Ascending) -->
        <div class="absolute inset-0 z-0">
          <div class="particle absolute -top-8 left-1/4 h-1.5 w-1.5 rounded-full bg-accent-200 shadow-glow" style="animation-delay: 0s;"></div>
          <div class="particle absolute -top-12 left-1/2 h-2 w-2 rounded-full bg-white shadow-glow" style="animation-delay: 0.5s;"></div>
          <div class="particle absolute -top-6 right-1/4 h-1 w-1 rounded-full bg-accent-300 shadow-glow" style="animation-delay: 1.2s;"></div>
          <div class="particle absolute -top-16 left-1/3 h-1.5 w-1.5 rounded-full bg-indigo-200 shadow-glow" style="animation-delay: 1.8s;"></div>
        </div>
      </div>

      <!-- Connecting nodes -->
      <svg class="absolute inset-0 h-full w-full -z-10" viewBox="0 0 100 100">
        <line x1="50" y1="50" x2="20" y2="20" stroke="currentColor" stroke-width="0.5" class="text-slate-300 dark:text-slate-600 animate-pulse" />
        <line x1="50" y1="50" x2="80" y2="30" stroke="currentColor" stroke-width="0.5" class="text-slate-300 dark:text-slate-600 animate-pulse" style="animation-delay: 0.5s" />
        <line x1="50" y1="50" x2="15" y2="70" stroke="currentColor" stroke-width="0.5" class="text-slate-300 dark:text-slate-600 animate-pulse" style="animation-delay: 1s" />
        <line x1="50" y1="50" x2="85" y2="80" stroke="currentColor" stroke-width="0.5" class="text-slate-300 dark:text-slate-600 animate-pulse" style="animation-delay: 1.5s" />
        
        <!-- Node dots -->
        <circle cx="20" cy="20" r="1.5" class="fill-accent-400 animate-pulse" />
        <circle cx="80" cy="30" r="2" class="fill-sky-400 animate-pulse" style="animation-delay: 0.5s" />
        <circle cx="15" cy="70" r="1.5" class="fill-emerald-400 animate-pulse" style="animation-delay: 1s" />
        <circle cx="85" cy="80" r="2" class="fill-indigo-400 animate-pulse" style="animation-delay: 1.5s" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.animate-spin-orbit-1 {
  animation: orbit1 10s linear infinite;
}

.animate-spin-orbit-2 {
  animation: orbit2 14s linear infinite reverse;
}

.animate-spin-orbit-3 {
  animation: orbit3 8s linear infinite;
}

@keyframes orbit1 {
  from { transform: rotateX(60deg) rotateY(20deg) rotateZ(0deg); }
  to { transform: rotateX(60deg) rotateY(20deg) rotateZ(360deg); }
}

@keyframes orbit2 {
  from { transform: rotateX(70deg) rotateY(-30deg) rotateZ(0deg); }
  to { transform: rotateX(70deg) rotateY(-30deg) rotateZ(360deg); }
}

@keyframes orbit3 {
  from { transform: rotateX(50deg) rotateY(40deg) rotateZ(0deg); }
  to { transform: rotateX(50deg) rotateY(40deg) rotateZ(360deg); }
}

.shadow-glow {
  box-shadow: 0 0 8px currentColor;
}

/* Ascending Particles from Core */
.particle {
  animation: ascend 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  opacity: 0;
}

@keyframes ascend {
  0% { transform: translateY(20px) scale(0.5); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 0.8; }
  100% { transform: translateY(-60px) scale(1.5); opacity: 0; }
}
</style>
