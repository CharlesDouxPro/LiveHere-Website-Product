import { defineStore } from 'pinia'
import { supabase } from '@/backend/supabase'

interface User {
  student_id: string
  stu_first_name: string
  stu_last_name: string
  stu_email: string
  stu_sexe: string
  stu_university_id: number
  stu_semester: string
  stu_study_level: string
  stu_home_coordinator_email: string
  countries: { name: string }
  stu_user_university : string
}

interface UserInterface {
  userData: User[] | User
  uid: string | undefined
  uniId: number | null
  studentsInSchool: User[]
}

export const useUserStore = defineStore('user', {
  state: (): UserInterface => ({
    userData: [],
    uid: undefined,
    uniId: null,
    studentsInSchool: []
  }),
  actions: {
    async fetchCurrentUser() {
      const {
        data: { user },
        error
      } = await supabase.auth.getUser()
      if (error) {
        console.error('Error fetching user:', error)
        return null
      }
      return user
    },
    async initialize() {
      const user = await this.fetchCurrentUser()
      if (user) {
        this.uid = user.id
        await this.getConnectedUser()
        await this.getStudentsSchool()
        this.saveUserToSession()
      }
    },
    async getConnectedUser() {
      if (!this.uid) return

      const { data, error } = await supabase
        .from('students')
        .select('*, countries(name)')
        .eq('student_id', this.uid)

      if (error) {
        console.error('Error fetching student data:', error)
        return
      }

      if (data && data.length > 0) {
        this.userData = data[0]
        const uniId = data[0].stu_university_id
        this.uniId = uniId ? Number(uniId) : null
      }
    },
    async getStudentsSchool() {
      if (!this.uniId) return

      const { data, error } = await supabase
        .from('students')
        .select('*, countries(name)')
        .eq('user_role', 6)
        .eq('stu_university_id', this.uniId)

      if (error) {
        console.error('Error fetching student data:', error)
        return
      }

      this.studentsInSchool = data || []
    },
    saveUserToSession() {
      const userData = {
        userData: this.userData,
        uid: this.uid,
        uniId: this.uniId,
        studentsInSchool: this.studentsInSchool
      }
      sessionStorage.setItem('user', JSON.stringify(userData))
    },
    loadUserFromSession() {
      const user = sessionStorage.getItem('user')
      if (user) {
        const userData = JSON.parse(user)
        this.userData = userData.userData
        this.uid = userData.uid
        this.uniId = userData.uniId
        this.studentsInSchool = userData.studentsInSchool
      }
    },
    clearUserSession() {
      this.userData = []
      this.uid = undefined
      this.uniId = null
      this.studentsInSchool = []
      sessionStorage.removeItem('user')
    }
  }
})
