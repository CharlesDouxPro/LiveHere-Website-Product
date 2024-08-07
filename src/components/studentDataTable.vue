<template>
  <DataTable
    v-model:filters="filters"
    v-model:selection="selectedStudents"
    removableSort
    stripedRows
    size="large"
    :value="students"
    dataKey="student_id"
  >
    <Column field="stu_first_name" header="First Name" sortable></Column>
    <Column field="stu_last_name" header="Last Name" sortable></Column>
    <Column field="stu_email" header="E-mail" sortable></Column>
    <Column field="stu_sexe" header="Sex" sortable></Column>
    <Column field="countries.name" header="Nationality" sortable></Column>
    <Column field="stu_semester" header="Semester" sortable></Column>
    <Column field="stu_study_level" header="Study Level" sortable></Column>
    <Column field="stu_home_coordinator_email" header="HC - Email" sortable></Column>
  </DataTable>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const userStore = useUserStore()
userStore.saveUserToSession()
userStore.loadUserFromSession()
const students = userStore.studentsInSchool
const selectedStudents = ref([])
const filters = ref({
  global: { value: null, matchMode: 'contains' }
})
</script>

<style scoped lang="scss"></style>
