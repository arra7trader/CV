<script setup lang="ts">
import { homeConfig } from '~/config/home'
import { computed } from 'vue'

const quoteWords = computed(() => {
  return homeConfig.quote.text.split(' ')
})
</script>

<template>
  <div class="content-wrapper">
    <div class="flex items-center justify-center py-8">
      <blockquote 
        class="relative max-w-xl text-center"
      >
        <!-- Quote icon -->
        <Icon
          v-motion
          :initial="{ scale: 0, opacity: 0, rotate: -45 }"
          :visibleOnce="{ scale: 1, opacity: 1, rotate: 0, transition: { type: 'spring', delay: 100 } }"
          name="heroicons:chat-bubble-bottom-center-text-20-solid"
          class="absolute -left-2 -top-2 h-8 w-8 text-slate-200 dark:text-slate-800"
        />
        
        <!-- Staggered word text -->
        <p class="text-lg font-medium italic text-slate-700 dark:text-slate-300 min-h-[4rem] leading-relaxed">
          <span 
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="inline-block mr-1"
          >
            "
          </span>
          <span 
            v-for="(word, index) in quoteWords" 
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200 + (index * 50) } }"
            class="inline-block mr-1"
          >
            {{ word }}
          </span>
          <span 
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 200 + (quoteWords.length * 50) } }"
            class="inline-block"
          >
            "
          </span>
        </p>
        
        <!-- Author -->
        <footer 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 400 + (quoteWords.length * 50) } }"
          class="mt-4 text-sm text-slate-500 dark:text-slate-400"
        >
          — {{ homeConfig.quote.author }}
        </footer>
      </blockquote>
    </div>
  </div>
</template>
