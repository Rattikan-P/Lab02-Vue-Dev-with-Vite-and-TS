<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { type Event } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService.ts'
import { useRouter } from 'vue-router'

const events = ref<Event[] | null>(null)
const router = useRouter()
const totalEvents = ref(0)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / pageSize.value)
  return page.value < totalPages
})
const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
  pageSize: {
    type: Number,
    required: true,
  },
})

const page = computed(() => props.page)
const pageSize = computed(() => props.pageSize)

onMounted(() => {
  watchEffect(() => {
    // events.value = null
    EventService.getEvents(pageSize.value, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = parseInt(response.headers['x-total-count']) || 0
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  })
})
</script>

<template>
  <h1>Events For Good</h1>
  <div class="flex flex-col items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <div class="page-info">
      Page {{ page }} of {{ Math.ceil(totalEvents / pageSize) }}
    </div>
  <div class="my-[20px] text-center text-base font-medium text-[#2c3e50]">
    <RouterLink :to="{ name: 'event-list-view', query: { page: 1, pageSize: 2 } }"
                class="inline-block mx[6px] px-[14px] py-[6px] bg-[#42b983] text-white rounded-full no-underline font-bold hover:bg-[#2c3e50]">2</RouterLink> |
    <RouterLink :to="{ name: 'event-list-view', query: { page: 1, pageSize: 4 } }"
                class="inline-block mx-[6px] px-[14px] py-[6px] bg-[#42b983] text-white rounded-full no-underline font-bold hover:bg-[#2c3e50]">4</RouterLink> |
    <RouterLink :to="{ name: 'event-list-view', query: { page: 1, pageSize: 6 } }"
                class="inline-block mx-[6px] px-[14px] py-[6px] bg-[#42b983] text-white rounded-full no-underline font-bold hover:bg-[#2c3e50]">6</RouterLink>
  </div>
  <div class="flex w-[290px] mx-auto">
    <RouterLink
    id="page-prev"
    :to="{ name: 'event-list-view', query: { page: page - 1, pageSize: pageSize } }"
    rel="prev"
    v-if="page != 1"
    class="flex-1 text-left no-underline text-[#2c3e50] hover:underline"
    >&#60; Prev Page</RouterLink>
    <RouterLink
    id="page-next"
    :to="{ name: 'event-list-view', query: { page: page + 1, pageSize: pageSize } }"
    rel="next"
    v-if="hasNextPage"
    class="flex-1 text-right no-underline text-[#2c3e50] hover:underline"
    >Next Page &#62;</RouterLink>
</div>
</template>

<style scoped>

</style>