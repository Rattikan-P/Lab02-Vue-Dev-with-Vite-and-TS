<script setup lang="ts">
import EventStudent from '@/components/EventStudent.vue'
import { ref, onMounted } from 'vue'
import type { Student } from '@/types'
import StudentService from '@/services/StudentService'

const students = ref<Student[]>([])

onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      console.log('loaded:', response.data)
      students.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Our Students</h1>
  <div class="flex flex-col items-center">
    <EventStudent v-for="student in students" :key="student.id" :student="student" />
  </div>
</template>

<style scoped>
/* .student {
  display: flex;
  flex-direction: column;
  align-items: center;
} */
</style>
