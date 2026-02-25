<script setup lang="ts">
import clsx from 'clsx'

const props = defineProps<{
  title: string
  href: string
}>()

const route = useRoute()

// Check if current route matches this link
const isActive = computed(() => {
  return route.path === props.href || route.path.startsWith(props.href + '/')
})
</script>

<template>
  <NuxtLink
    :to="href"
    class="relative group flex h-9 items-center justify-center gap-1 rounded-full px-4 text-[13px] font-medium transition-all duration-300"
    :class="[
      isActive
        ? 'text-accent-600 dark:text-accent-400'
        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
    ]"
  >
    <!-- Hover Background -->
    <div 
      class="absolute inset-0 rounded-full bg-slate-100/0 dark:bg-slate-800/0 transition-colors duration-300 pointer-events-none"
      :class="!isActive ? 'group-hover:bg-slate-100/80 dark:group-hover:bg-slate-800/50' : ''"
    ></div>
    
    <!-- Text Content -->
    <span class="relative z-10">{{ title }}</span>
    
    <!-- Active Indicator (Glowing Dot) -->
    <Transition name="fade-slide-up">
      <div v-if="isActive" class="absolute -bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div class="h-1 w-1 rounded-full bg-accent-500 dark:bg-accent-400 shadow-[0_0_8px_rgba(139,92,246,0.8)]"></div>
      </div>
    </Transition>
  </NuxtLink>
</template>

<style scoped>
.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-slide-up-enter-from,
.fade-slide-up-leave-to {
  opacity: 0;
  transform: translate(-50%, 4px);
}
</style>
