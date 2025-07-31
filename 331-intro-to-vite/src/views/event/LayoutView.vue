<script setup lang="ts">
// import { ref, onMounted } from 'vue'
// import { type Event } from '@/types'
// import EventService from '@/services/EventService'
// import { useRouter } from 'vue-router'
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'

// const event = ref<Event | null>(null)

// const props = defineProps({
//   id: {
//     type: String,
//     required: true,
//   },
// })

// const router = useRouter()

const store = useEventStore()
const { event } = storeToRefs(store)

// onMounted(() => {
//   EventService.getEvent(parseInt(props.id))
//     .then((response) => {
//       event.value = response.data
//     })
//     .catch((error) => {
//       if(error.response && error.response.status === 404) {
//         router.push ({
//           name: '404-resource-view',
//           params: { resource: ' event' }
//         })
//       } else {
//         router.push({ name: 'network-error-view'})
//       }
//     })
// })
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav class="justify-center space-x-1 py-6">
      <RouterLink
        :to="{ name: 'event-detail-view' }"
        class="font-bold text-gray-700"
        exact-active-class="text-green-500"
      >Details</RouterLink> |
      <RouterLink
        :to="{ name: 'event-register-view' }"
        class="font-bold text-gray-700"
        exact-active-class="text-green-500"
      >Register</RouterLink> |
      <RouterLink
        :to="{ name: 'event-edit-view' }"
        class="font-bold text-gray-700"
        exact-active-class="text-green-500"
      >Edit</RouterLink>
    </nav>
    <RouterView :event="event" />
  </div>
</template>

