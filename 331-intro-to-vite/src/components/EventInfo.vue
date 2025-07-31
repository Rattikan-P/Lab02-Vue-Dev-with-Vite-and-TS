<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  category: string
  organizer: string
}>()
</script>

<template>
  <div class="flex flex-col items-end mt-[10px]">
  <!-- items-end: เรียง items ไปทางขวา (เalign-items: flex-end;) -->
  <span class="text-[14px] mb-[5px]">{{ props.category }}</span>
  <span class="text-[14px] mb-[5px]">{{ props.organizer }}</span>
</div>
</template>

<style scoped>
/* .event-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;
}

.category,
.organizer {
  font-size: 14px;
  margin-bottom: 5px;
} */
</style>
