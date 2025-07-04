<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import type { Event } from '@/type'
import { ref, onMounted } from 'vue'
import axios from 'axios'
const events = ref<Event[]>([])


onMounted(() => {
  axios
    .get('https://my-json-server.typicode.com/Rattikan-P/Lab02-Vue-Dev-with-Vite-and-TS-db-/events')
    .then((response) => {
      console.log(response.data)
      // events.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Events For Good</h1>
  <!-- new element-->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>