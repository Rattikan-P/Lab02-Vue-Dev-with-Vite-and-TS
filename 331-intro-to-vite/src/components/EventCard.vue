<script setup lang="ts">
import { type Event } from '@/types'
import EventInfo from './EventInfo.vue'
defineProps<{
  event: Event
}>()
// const event = ref ({
//   id: 5928101,
//   category: 'animal  welfare',
//   title: 'Cat Adoption Day',
//   description: 'Find your new feline friend at this event.',
//   location: 'Meow Town',
//   date: 'January 28, 2022',
//   time: '12:00',
//   petsAllowed: true,
//   organizer: 'Kat Laydee'
// })
</script>

<template>
  <RouterLink class="no-underline text-[#2c3e50]" :to="{ name: 'event-detail-view', params: { id: event.id } }">
      <!-- 5 -->
      <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
      <EventInfo :category="event.category" :organizer="event.organizer" />
    </div>
  </RouterLink>
</template>

<style scoped>
/* .event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
} */

/* .event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 0 rgb(0, 0, 0, 0.2);
} */

/* .event-link {
  text-decoration: none;
  color: #2c3e50;
} */
</style>
