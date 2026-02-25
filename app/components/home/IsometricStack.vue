<script setup lang="ts">
// Isometric Tech Stack SVG Component
</script>

<template>
  <div class="relative flex h-[350px] w-full items-center justify-center">
    <!-- Glow behind the stack -->
    <div class="absolute h-48 w-48 rounded-full bg-accent-500/10 opacity-70 blur-3xl mix-blend-screen animate-pulse dark:bg-accent-500/20" style="animation-duration: 4s;"></div>
    
    <!-- 3D Transform Container -->
    <div class="isometric-container relative h-[300px] w-[280px]">
      
      <!-- Top Layer: Frontend (Vue) -->
      <div class="layer layer-frontend absolute top-[20%] left-0 right-0 h-[80px] rounded-xl border border-emerald-400/40 bg-emerald-500/10 shadow-[0_10px_30px_-10px_rgba(52,211,153,0.3)] backdrop-blur-sm group cursor-pointer transition-all duration-300">
        <!-- Top Face (Gloss) -->
        <div class="absolute inset-x-0 -top-2 h-4 rounded-t-xl bg-gradient-to-b from-white/20 to-transparent dark:from-white/10"></div>
        <div class="absolute inset-0 flex items-center justify-center gap-3">
          <Icon name="simple-icons:vuedotjs" class="h-8 w-8 text-emerald-500 transition-transform duration-300 group-hover:scale-110 drop-shadow-md" />
          <span class="font-bold tracking-wider text-emerald-600 dark:text-emerald-400">FRONTEND</span>
        </div>
      </div>

      <!-- Connecting Lines Frontend -> Backend -->
      <svg class="absolute top-[40%] left-1/2 h-[60px] w-2 -translate-x-1/2 overflow-visible" viewBox="0 0 8 60">
        <!-- Static background line -->
        <line x1="4" y1="0" x2="4" y2="60" stroke="#94a3b8" stroke-width="2" stroke-opacity="0.2" stroke-linecap="round" />
        <!-- Animated data pulse -->
        <line x1="4" y1="0" x2="4" y2="60" stroke="#34d399" stroke-width="2" stroke-linecap="round" class="animate-pulse-down shadow-[0_0_8px_#34d399]" />
      </svg>

      <!-- Middle Layer: Backend (Go) -->
      <div class="layer layer-backend absolute top-[50%] left-0 right-0 h-[80px] rounded-xl border border-sky-400/40 bg-sky-500/10 shadow-[0_10px_30px_-10px_rgba(56,189,248,0.3)] backdrop-blur-sm group cursor-pointer transition-all duration-300">
        <div class="absolute inset-x-0 -top-2 h-4 rounded-t-xl bg-gradient-to-b from-white/20 to-transparent dark:from-white/10"></div>
        <div class="absolute inset-0 flex items-center justify-center gap-3">
          <Icon name="simple-icons:go" class="h-10 w-10 text-sky-500 transition-transform duration-300 group-hover:scale-110 drop-shadow-md" />
          <span class="font-bold tracking-wider text-sky-600 dark:text-sky-400">BACKEND</span>
        </div>
      </div>

      <!-- Connecting Lines Backend -> Database -->
      <svg class="absolute top-[70%] left-1/2 h-[60px] w-2 -translate-x-1/2 overflow-visible" viewBox="0 0 8 60">
        <line x1="4" y1="0" x2="4" y2="60" stroke="#94a3b8" stroke-width="2" stroke-opacity="0.2" stroke-linecap="round" />
        <line x1="4" y1="0" x2="4" y2="60" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" class="animate-pulse-down shadow-[0_0_8px_#38bdf8]" style="animation-delay: 1s;" />
      </svg>

      <!-- Bottom Layer: Database (PostgreSQL) -->
      <div class="layer layer-database absolute top-[80%] left-0 right-0 h-[80px] rounded-xl border border-indigo-400/40 bg-indigo-500/10 shadow-[0_10px_30px_-10px_rgba(99,102,241,0.3)] backdrop-blur-sm group cursor-pointer transition-all duration-300">
        <div class="absolute inset-x-0 -top-2 h-4 rounded-t-xl bg-gradient-to-b from-white/20 to-transparent dark:from-white/10"></div>
        <div class="absolute inset-0 flex items-center justify-center gap-3">
          <Icon name="simple-icons:postgresql" class="h-8 w-8 text-indigo-500 transition-transform duration-300 group-hover:scale-110 drop-shadow-md" />
          <span class="font-bold tracking-wider text-indigo-600 dark:text-indigo-400">DATABASE</span>
        </div>
      </div>
      
    </div>
    
    <!-- Floating Orbit particles -->
    <div class="absolute top-12 right-10 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-float-slow"></div>
    <div class="absolute bottom-16 left-8 h-3 w-3 rounded-full bg-indigo-400 shadow-[0_0_12px_#6366f1] animate-float-slow" style="animation-delay: 1.5s;"></div>
    <div class="absolute top-1/2 left-4 h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-float-slow" style="animation-delay: 2.5s;"></div>
  </div>
</template>

<style scoped>
/* 3D Isometric Projection */
.isometric-container {
  transform: rotateX(50deg) rotateZ(-30deg) translate3d(0, 0, 0);
  transform-style: preserve-3d;
}

/* Base layer interactions */
.layer {
  transform-style: preserve-3d;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.layer:hover {
  transform: translateZ(20px) scale(1.05);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
}

/* Levitation Animations */
.layer-frontend {
  animation: levitate 4s ease-in-out infinite alternate;
  animation-delay: 0s;
  z-index: 30;
}

.layer-backend {
  animation: levitate 4s ease-in-out infinite alternate;
  animation-delay: -1.3s;
  z-index: 20;
}

.layer-database {
  animation: levitate 4s ease-in-out infinite alternate;
  animation-delay: -2.6s;
  z-index: 10;
}

@keyframes levitate {
  0% { transform: translateZ(0px); }
  100% { transform: translateZ(15px); }
}

/* Data pulse down lines */
.animate-pulse-down {
  stroke-dasharray: 20 60;
  stroke-dashoffset: 80;
  animation: dash-flow 2s linear infinite;
}

@keyframes dash-flow {
  to {
    stroke-dashoffset: 0;
  }
}

/* Ambient particles */
@keyframes float-ambient {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
  50% { transform: translateY(-30px) scale(1.2); opacity: 1; }
}

.animate-float-slow {
  animation: float-ambient 5s ease-in-out infinite;
}
</style>
