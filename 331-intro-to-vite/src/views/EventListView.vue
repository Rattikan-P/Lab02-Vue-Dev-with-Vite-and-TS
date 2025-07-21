<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { type Event } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService.ts'

const events = ref<Event[] | null>(null)
const totalEvents = ref(0)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / pageSize.value) //ceil -> ปัดเศษขึ้น
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
    events.value = null
    EventService.getEvents(pageSize.value, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  })
})
</script>

<template>
  <h1>Events For Good</h1>
  <!-- new element-->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
  <div class="page-size-links">
    <RouterLink :to="{ name: 'event-list-view', query: { page: 1, pageSize: 2 } }">2</RouterLink> |
    <RouterLink :to="{ name: 'event-list-view', query: { page: 1, pageSize: 4 } }">4</RouterLink> |
    <RouterLink :to="{ name: 'event-list-view', query: { page: 1, pageSize: 6 } }">6</RouterLink>
  </div>
  <div class="pagination">
    <RouterLink
      id="page-prev"
      :to="{ name: 'event-list-view', query: { page: page - 1, pageSize: pageSize } }"
      rel="prev"
      v-if="page != 1"
      >&#60; Prev Page</RouterLink
    >
    <RouterLink
      id="page-next"
      :to="{ name: 'event-list-view', query: { page: page + 1, pageSize: pageSize } }"
      rel="next"
      v-if="hasNextPage"
      >Next Page &#62;</RouterLink
    >
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
  margin: 0 auto;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
.pagination a:hover {
  text-decoration: underline;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
.page-size-links {
  margin: 20px auto;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #2c3e50;
}

.page-size-links a {
  display: inline-block;
  margin: 0 6px;
  padding: 6px 14px;
  background-color: #42b983;
  color: white;
  border-radius: 20px; 
  text-decoration: none;
  font-weight: bold;
}
.page-size-links a:hover {
  background-color: #2c3e50;
}
</style>
