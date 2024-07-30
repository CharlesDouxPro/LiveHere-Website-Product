// useMailDestinationStore.js
import { defineStore } from 'pinia'

interface Mail {
  uid: string | undefined
  email: string | null
}

export const useMailDestinationStore = defineStore('mailDestination', {
  state: () => ({
    selectedStudents: [] as Mail[]
  }),
  actions: {
    addStudent(uid: string, email: string) {
      this.selectedStudents.push({ uid, email })
    },
    removeStudentByEmail(email: string) {
      this.selectedStudents = this.selectedStudents.filter((student) => student.email !== email)
    },
    clearSelectedStudents() {
      this.selectedStudents = []
    },
    addMultipleStudents(students: Mail[]) {
      this.selectedStudents.push(...students)
    },
    removeAllStudents() {
      this.selectedStudents = []
    }
  },
  getters: {
    getSelectedUids: (state) => {
      return state.selectedStudents.map(student => student.uid)
    },
    getSelectedEmails : (state) => {
        return state.selectedStudents.map(student => student.email)
    }
  }
})
