<script setup lang="ts">
import type { Student } from '@/types'

defineProps<{
  student: Student
}>()
</script>

<template>
  <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp">
    <h2>{{ student.name }} {{ student.surname }}</h2>
    <p>GPA: {{ student.gpa }}</p>
  </div>
</template>

<style scoped>
/* .student-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.student-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 0 rgb(0, 0, 0, 0.2);
} */
</style>
