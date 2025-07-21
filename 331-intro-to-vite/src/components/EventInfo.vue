<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  category: string
  organizer: string
}>()
</script>

<template>
  <div class="event-info">
    <span class="category">{{ props.category }}</span>
    <span class="organizer">{{ props.organizer }}</span>
  </div>
</template>

<style scoped>
.event-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;
}

.category,
.organizer {
  font-size: 14px;
  margin-bottom: 5px;
}
</style>
