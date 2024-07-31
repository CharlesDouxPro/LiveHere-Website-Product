<template>
  <div class="p-10 main-block m-20">
    <h1>1. Choose the students you want to send informaitons</h1>
    <div class="mt-20">
      <div class="d-flex flex-row">
        <input v-model="filters.global.value" placeholder="Search students" class="minimal-input mb-20 mr-20" />
        <div class="d-flex flex-row ml-auto">
          <button class="clean-button mr-20">➕ add many students</button>
          <button class="clean-button mr-20">➕ add one student</button>
        </div>
      </div>
      <table class="custom-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" @change="toggleSelectAll" :checked="isAllSelected" />
            </th>
            <th @click="sortTable('stu_first_name')">First Name</th>
            <th @click="sortTable('stu_last_name')">Last Name</th>
            <th @click="sortTable('stu_email')">E-mail</th>
            <th @click="sortTable('stu_sexe')">Sex</th>
            <th @click="sortTable('countries.name')">Nationality</th>
            <th @click="sortTable('stu_semester')">Semester</th>
            <th @click="sortTable('stu_study_level')">Study Level</th>
            <th @click="sortTable('stu_home_coordinator_email')">HC - Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filteredRows" :key="row.student_id">
            <td>
              <input type="checkbox" :value="row.stu_email" :checked="isSelected(row.stu_email)" @change="toggleStudentSelection(row)" />
            </td>
            <td>{{ row.stu_first_name }}</td>
            <td>{{ row.stu_last_name }}</td>
            <td>{{ row.stu_email }}</td>
            <td>{{ row.stu_sexe }}</td>
            <td>{{ row.countries?.name }}</td>
            <td>{{ row.stu_semester }}</td>
            <td>{{ row.stu_study_level }}</td>
            <td>{{ row.stu_home_coordinator_email }}</td>
          </tr>
        </tbody>
      </table>
      <div class="selected-emails mt-20">
        <ul>
          <li v-for="email in mailStore.getSelectedEmails" :key="email">{{ email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useMailDestinationStore } from '@/stores/mailStore'

const userStore = useUserStore()
const mailStore = useMailDestinationStore()

userStore.loadUserFromSession()

const students = ref(userStore.studentsInSchool)

const filters = ref({
  global: { value: null, matchMode: 'contains' }
})

const columns = [
  { label: 'First Name', field: 'stu_first_name' },
  { label: 'Last Name', field: 'stu_last_name' },
  { label: 'E-mail', field: 'stu_email' },
  { label: 'Sex', field: 'stu_sexe' },
  { label: 'Nationality', field: 'countries.name' },
  { label: 'Semester', field: 'stu_semester' },
  { label: 'Study Level', field: 'stu_study_level' },
  { label: 'HC - Email', field: 'stu_home_coordinator_email' }
]

const filteredRows = computed(() => {
  if (!filters.value.global.value) {
    return students.value
  }
  const searchTerm = filters.value.global.value.toLowerCase()
  return students.value.filter((student) =>
    columns.some((column) => {
      const fieldValue = String(student[column.field] || '').toLowerCase()
      return fieldValue.includes(searchTerm)
    })
  )
})

const sortTable = (key: string) => {
  students.value.sort((a, b) => {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return 1
    return 0
  })
}

const isAllSelected = computed(() => {
  return (
    filteredRows.value.length &&
    filteredRows.value.every((row) => mailStore.getSelectedEmails.includes(row.stu_email))
  )
})

const toggleSelectAll = () => {
  if (isAllSelected.value) {
    filteredRows.value.forEach((row) => {
      mailStore.removeStudentByEmail(row.stu_email)
    })
  } else {
    filteredRows.value.forEach((row) => {
      if (!mailStore.getSelectedEmails.includes(row.stu_email)) {
        mailStore.addStudent(row.student_id, row.stu_email)
      }
    })
  }
}

const isSelected = (email: string) => {
  return mailStore.getSelectedEmails.includes(email)
}

const toggleStudentSelection = (row: any) => {
  if (isSelected(row.stu_email)) {
    mailStore.removeStudentByEmail(row.stu_email)
  } else {
    mailStore.addStudent(row.student_id, row.stu_email)
  }
}
</script>

<style scoped lang="scss">
.custom-card {
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.custom-input {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid var(--color-border);
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
}

.custom-table th,
.custom-table td {
  border: 1px solid var(--color-border);
  padding: 8px;
  text-align: left;
}

.custom-table th {
  background-color: var(--color-background-mute);
  cursor: pointer;
}

.selected-emails {
  margin-top: 20px;
}

.selected-emails ul {
  list-style-type: none;
  padding: 0;
  font-size: 12px;
  color: var(--text-light-2);
}

.selected-emails li {
  background-color: var(--color-background-mute);
  padding: 5px;
  border-radius: 4px;
  margin-bottom: 5px;
}
</style>
