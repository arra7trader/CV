<script setup lang="ts">
// Logic Matrix (Problem Solver) Component
</script>

<template>
  <div class="relative flex h-[350px] w-full max-w-sm items-center justify-center p-4">
    <!-- Ambient Background Glow -->
    <div class="absolute h-48 w-48 rounded-full bg-accent-500/10 opacity-40 blur-3xl mix-blend-screen animate-pulse dark:bg-accent-500/10" style="animation-duration: 5s;"></div>

    <!-- Main Container -->
    <div class="relative h-[250px] w-[280px] rounded-2xl border border-divider-light bg-slate-50/50 p-6 shadow-xl backdrop-blur-sm dark:border-divider-dark dark:bg-slate-900/50 overflow-hidden flex items-center justify-center">
      
      <!-- Abstract Dot Grid Background -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiM2NDc0OGIiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] [mask-image:radial-gradient(circle_at_center,white,transparent_80%)]"></div>

      <!-- The Node Graph SVG -->
      <svg class="relative z-10 h-full w-full overflow-visible" viewBox="0 0 100 100">
        <!-- Static Grid/Connections (Dim) -->
        <g stroke="currentColor" class="text-slate-300 dark:text-slate-700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <!-- Horizontal -->
          <line x1="10" y1="30" x2="90" y2="30" opacity="0.3" />
          <line x1="10" y1="70" x2="90" y2="70" opacity="0.3" />
          <!-- Vertical -->
          <line x1="30" y1="10" x2="30" y2="90" opacity="0.3" />
          <line x1="70" y1="10" x2="70" y2="90" opacity="0.3" />
          <!-- Diagonals -->
          <line x1="10" y1="30" x2="30" y2="70" opacity="0.3" />
          <line x1="30" y1="30" x2="70" y2="70" opacity="0.3" />
          <line x1="70" y1="30" x2="90" y2="70" opacity="0.3" />
        </g>

        <!-- The "Correct" Solution Path (Background Track) -->
        <path d="M 10 70 L 30 70 L 30 30 L 70 70 L 70 30 L 90 30" fill="none" class="stroke-slate-300 dark:stroke-slate-600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Animated Solution Pulse (Traveling light) -->
        <path d="M 10 70 L 30 70 L 30 30 L 70 70 L 70 30 L 90 30" fill="none" class="stroke-accent-400 dark:stroke-accent-500 animate-draw-solution drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />

        <!-- Nodes -->
        <!-- Starting Node (Problem) -->
        <circle cx="10" cy="70" r="4" class="fill-rose-400 shadow-[0_0_10px_#fb7185] animate-pulse" />
        <circle cx="10" cy="70" r="10" class="fill-rose-400/20 animate-ping" style="animation-duration: 2s;" />

        <!-- Intermediate Connection Nodes -->
        <circle cx="30" cy="30" r="2.5" class="fill-slate-400 dark:fill-slate-500" />
        <circle cx="30" cy="70" r="2.5" class="fill-slate-400 dark:fill-slate-500" />
        <circle cx="70" cy="30" r="2.5" class="fill-slate-400 dark:fill-slate-500" />
        <circle cx="70" cy="70" r="2.5" class="fill-slate-400 dark:fill-slate-500" />
        
        <circle cx="90" cy="70" r="2.5" class="fill-slate-400 dark:fill-slate-500" />
        <circle cx="10" cy="30" r="2.5" class="fill-slate-400 dark:fill-slate-500" />

        <!-- Ending Node (Solution) -->
        <circle cx="90" cy="30" r="5" class="fill-emerald-400 drop-shadow-[0_0_12px_#34d399]" />
        
        <!-- Expanding ring on success (synced with path animation) -->
        <circle cx="90" cy="30" r="1.5" class="fill-transparent stroke-emerald-400 stroke-[1.5] animate-success-ring" />
      </svg>
      
    </div>
  </div>
</template>

<style scoped>
/* Path drawing animation for the data flow */
.animate-draw-solution {
  stroke-dasharray: 40 300;
  stroke-dashoffset: 340;
  animation: trace-path 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes trace-path {
  0% { stroke-dashoffset: 340; opacity: 0; }
  10% { opacity: 1; }
  85% { opacity: 1; }
  100% { stroke-dashoffset: -40; opacity: 0; }
}

/* Success ring expanding when the pulse reaches the end */
.animate-success-ring {
  animation: success-ping 3.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes success-ping {
  0%, 75% { transform: scale(1); opacity: 0; transform-origin: 90px 30px; }
  85% { opacity: 1; }
  100% { transform: scale(4); opacity: 0; transform-origin: 90px 30px; }
}
</style>
