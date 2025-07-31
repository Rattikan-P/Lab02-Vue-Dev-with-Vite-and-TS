<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import EventCard from './components/EventCard.vue'
import { useMessageStore } from './stores/message';
import { storeToRefs } from 'pinia';
import { SpeedInsights } from '@vercel/speed-insights/next';
const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <SpeedInsights />
  <!-- 3.3 -->
  <div class="text-center font-sans text-gray-700 antialias"> 
    <header>
      <div id="flashMessage" class="animate-fade" v-if="message">
        <h4>{{ message }}</h4>
      </div>

      <h1>Deploy with Vercel</h1>

      <div class="wrapper">
        <nav class="py-6">
          <!-- py-6 เพิ่ม padding 24px บน-ล่างของ(top-bottom) element -->
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'event-list-view' }">Event</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'about' }">About</RouterLink> |
          <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{ name: 'student-list' }">Students</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
/* #layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* nav {
  padding: 30px;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */

h2 {
  font-size: 20px;
}

/* @keyframes yellofade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}

#flashMessage {
  animation: yellofade 3s ease-in-out;
} */
</style>
