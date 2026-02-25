<script setup lang="ts">
defineProps<{
  href?: string
  title: string
}>()
</script>

<template>
  <NuxtLink
    :to="href || '/'"
    :title="title"
    class="group flex h-9 items-center justify-center gap-1.5 rounded-xl px-2 transition-transform duration-300 hover:scale-[1.03]"
  >
    <div class="relative flex items-center justify-center">
      <!-- Glow effect on hover -->
      <div class="absolute inset-0 rounded-full bg-accent-500/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      
      <!-- Minimalist A Logo -->
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 40 40" 
        class="relative h-6 w-6"
        fill="none"
      >
        <!-- The 'A' shape - drawn from bottom left, up to peak, down to right -->
        <path 
          d="M8 32 L20 8 L32 32" 
          stroke="currentColor" 
          stroke-width="4.5" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          class="text-accent-500 path-draw drop-shadow-sm"
        />
        <!-- Tech node / crossbar of the A -->
        <circle 
          cx="20" 
          cy="22.5" 
          r="3.5" 
          fill="currentColor" 
          class="text-accent-500 animate-pulse dot-fade"
        />
      </svg>
    </div>
    
    <!-- Text Logomark -->
    <span class="font-sans text-lg font-extrabold tracking-widest text-slate-800 dark:text-slate-100 transition-colors duration-300 group-hover:text-accent-600 dark:group-hover:text-accent-400">
      ALDY<span class="text-accent-500">.</span>
    </span>
  </NuxtLink>
</template>

<style scoped>
/* SVG Drawing Animation */
.path-draw {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: drawPath 1.2s cubic-bezier(0.8, 0, 0.2, 1) forwards;
}

@keyframes drawPath {
  to {
    stroke-dashoffset: 0;
  }
}

/* Delay the dot appearance until line is drawn */
.dot-fade {
  opacity: 0;
  animation: fadeInPulse 2s ease-out forwards;
  animation-delay: 1.2s;
}

@keyframes fadeInPulse {
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
}
</style>
