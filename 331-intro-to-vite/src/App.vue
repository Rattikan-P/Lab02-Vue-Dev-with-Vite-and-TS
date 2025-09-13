<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
// import { Analytics } from "@vercel/analytics/next"

const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <div class="text-center font-sans text-gray-700 antialiased">
    <header>
      <div class="animate-fade" v-if="message">
        <h4 class="text-green-700 text-lg font-medium">{{ message }}</h4>
      </div>
      <!-- <h1>Deploy with Vercel</h1> -->
      <div class="wrapper">
        <nav class="py-6 space-x-4">
  <RouterLink 
    class="font-bold text-gray-700" 
    exact-active-class="text-green-500"
    :to="{ name: 'event-list-view' }"
  >
    Event
  </RouterLink>

  <RouterLink 
    class="font-bold text-gray-700" 
    exact-active-class="text-green-500" 
    :to="{ name: 'about' }"
  >
    About
  </RouterLink>

  <RouterLink 
    class="font-bold text-gray-700" 
    exact-active-class="text-green-500" 
    :to="{ name: 'add-event' }"
  >
    New Event
  </RouterLink>

  <!-- <RouterLink 
    class="font-bold text-gray-700" 
    exact-active-class="text-green-500" 
    :to="{ name: 'organization-form-view' }"
  >
    New Organization
  </RouterLink> -->
</nav>

      </div>
    </header>

    <RouterView />
  </div>
</template>
<SpeedInsights />