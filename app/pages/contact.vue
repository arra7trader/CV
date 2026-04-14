<script setup lang="ts">
import { contactConfig } from '~/config/contact'
import clsx from 'clsx'

useSeoMeta({
  title: contactConfig.meta.title,
  description: contactConfig.meta.description
})
</script>

<template>
  <div>
    <header class="background-grid background-grid--fade-out pb-10 pt-32 lg:pb-14 lg:pt-40">
      <div class="content-wrapper">
        <div class="max-w-3xl">
          <div class="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400 lg:mb-4">
            {{ contactConfig.meta.caption }}
          </div>
          <h1 class="text-2xl font-extrabold text-slate-700 dark:text-slate-300 md:text-4xl">
            {{ contactConfig.meta.title }}
          </h1>
          <p class="mt-2 text-slate-600 dark:text-slate-400">
            {{ contactConfig.meta.description }}
          </p>
        </div>
      </div>
    </header>

    <div class="pb-20" id="page-content">
      <div class="content-wrapper">
        <div class="page-content max-w-3xl">
          <p>
            {{ contactConfig.intro.description }}
          </p>

          <div class="my-4 flex items-center gap-2">
            <span class="relative flex h-2.5 w-2.5">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span class="text-sm font-medium text-green-600 dark:text-green-400">
              {{ contactConfig.availability.message }}
            </span>
          </div>

          <h2 class="mb-4 text-lg font-bold text-slate-800 dark:text-slate-200">Contact Information</h2>

          <div class="space-y-3">
            <div v-for="info in contactConfig.contactInfo" :key="info.label" class="flex items-center gap-3">
              <Icon :name="info.icon" class="h-5 w-5 shrink-0 text-accent-500" />
              <div class="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span class="text-sm text-slate-500 dark:text-slate-400">{{ info.label }}:</span>
                <span class="font-medium text-slate-800 dark:text-slate-200">
                  {{ info.value }}
                  <span v-if="info.subValue" class="font-normal text-slate-500 dark:text-slate-400">
                    · {{ info.subValue }}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <h2 class="mb-4 text-lg font-bold text-slate-800 dark:text-slate-200">Find Me On</h2>

          <div class="flex flex-wrap gap-3">
            <a
              v-for="social in contactConfig.socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :class="clsx(
                'inline-flex items-center gap-2 rounded-md border px-3 py-2',
                'bg-slate-50 border-slate-200',
                'dark:bg-slate-800/50 dark:border-slate-700',
                'hover:border-accent-300 dark:hover:border-accent-700',
                'transition-colors'
              )"
            >
              <Icon :name="social.icon" :class="clsx('h-5 w-5', social.iconColor)" />
              <span class="text-sm font-medium text-slate-700 dark:text-slate-300">{{ social.handle }}</span>
            </a>
          </div>

          <template v-if="contactConfig.email">
            <h2 class="mb-4 text-lg font-bold text-slate-800 dark:text-slate-200">Send Me a Message</h2>
            <p class="mb-4 text-slate-600 dark:text-slate-400">
              Prefer email? Drop me a message:
            </p>

            <a
              :href="`mailto:${contactConfig.email}`"
              class="inline-flex items-center gap-2 font-semibold text-accent-600 hover:underline dark:text-accent-400"
            >
              <Icon name="heroicons:envelope-20-solid" class="h-5 w-5" />
              {{ contactConfig.email }}
            </a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
