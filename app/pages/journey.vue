<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { experienceConfig } from '~/config/experience'
import type { TimelineItem } from '~/config/experience'

definePageMeta({
  layout: false
})

useSeoMeta({
  title: 'Journey | Arland P',
  description: 'An interactive journey through the projects and learning experiences behind my work.',
})

const router = useRouter()

interface ParsedTimelineItem extends TimelineItem {
  parsedDate: Date
}

const allItems: ParsedTimelineItem[] = [
  ...experienceConfig.timeline,
  ...experienceConfig.education,
  ...experienceConfig.internship
].map(item => {
  let parsedDate = new Date()
  if (item.periodStart && item.periodStart.includes('-')) {
    const [year, month] = item.periodStart.split('-')
    if (year && month) {
      parsedDate = new Date(parseInt(year), parseInt(month) - 1)
    }
  } else if (item.periodStart) {
    parsedDate = new Date(parseInt(item.periodStart), 0)
  }
  return { ...item, parsedDate }
})

const sortedJourney = allItems.sort((a, b) => a.parsedDate.getTime() - b.parsedDate.getTime())

const currentIndex = ref(0)
const isWarping = ref(true)
const hasStarted = ref(false)

onMounted(() => {
  setTimeout(() => {
    hasStarted.value = true
    setTimeout(() => {
      isWarping.value = false
    }, 500)
  }, 800)
})

const currentStory = computed(() => sortedJourney[currentIndex.value])
const isLast = computed(() => currentIndex.value === sortedJourney.length - 1)

const handleNext = () => {
  if (isLast.value) return

  isWarping.value = true

  setTimeout(() => {
    currentIndex.value++
    setTimeout(() => {
      isWarping.value = false
    }, 500)
  }, 800)
}

const handleFinish = () => {
  isWarping.value = true
  setTimeout(() => {
    router.push('/')
  }, 1000)
}

const generateStoryText = (item: ParsedTimelineItem) => {
  let intro = ''
  if (item.type === 'education') {
    intro = `In ${item.periodStart.substring(0, 4)}, I focused on learning through ${item.company}.`
  } else if (item.type === 'internship') {
    intro = `I began my practical journey as a ${item.role} at ${item.company}.`
  } else if (item.type === 'freelance') {
    intro = `I moved deeper into product building as a ${item.role} through ${item.company}.`
  } else {
    intro = `I took on the role of ${item.role} at ${item.company}.`
  }

  const tasks = item.tasks && item.tasks.length > 0
    ? '\n\nKey highlights:\n- ' + item.tasks.join('\n- ')
    : ''

  return `${intro}\n\n${item.description}${tasks}`
}
</script>

<template>
  <div class="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black font-sans text-slate-100">
    <JourneySpaceBackground :is-warping="isWarping" />

    <div
      class="relative z-10 w-full px-4 transition-all duration-700"
      :class="isWarping ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-none'"
    >
      <div class="absolute top-4 left-4 z-50 md:top-8 md:left-8">
        <button
          @click="router.push('/')"
          class="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white backdrop-blur-md"
        >
          <Icon name="heroicons:arrow-left-20-solid" class="h-4 w-4" />
          Back to Home
        </button>
      </div>

      <JourneyStoryNode
        v-if="currentStory && hasStarted"
        :key="currentIndex"
        :title="currentStory.role"
        :subtitle="currentStory.company"
        :date="currentStory.period"
        :text="generateStoryText(currentStory)"
        :is-last="isLast"
        @next="handleNext"
        @finish="handleFinish"
      />
    </div>
  </div>
</template>
