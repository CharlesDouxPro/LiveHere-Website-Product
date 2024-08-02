<template>
  <div class="form-container">
    <h1 class="mb-20">Add a student</h1>
    <form @submit.prevent="submitForm">
      <div class="form-row">
        <div class="form-group">
          <label for="stu_first_name">First Name</label>
          <input type="text" id="stu_first_name" v-model="formData.stu_first_name" />
        </div>
        <div class="form-group">
          <label for="stu_last_name">Last Name</label>
          <input type="text" id="stu_last_name" v-model="formData.stu_last_name" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="stu_email">Email</label>
          <input type="email" id="stu_email" v-model="formData.stu_email" />
        </div>
        <div class="form-group">
          <label for="stu_phone_number">Phone Number</label>
          <input type="text" id="stu_phone_number" v-model="formData.stu_phone_number" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="stu_date_of_birth">Date of Birth</label>
          <input type="date" id="stu_date_of_birth" v-model="formData.stu_date_of_birth" />
        </div>
        <div class="form-group">
          <label for="stu_sexe">Sexe</label>
          <input type="text" id="stu_sexe" v-model="formData.stu_sexe" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="stu_nationality_id">Nationality ID</label>
          <input type="text" id="stu_nationality_id" v-model="formData.stu_nationality_id" />
        </div>
        <div class="form-group">
          <label for="stu_home_coordinator_email">Coordinator Email</label>
          <input type="email" id="stu_home_coordinator_email" v-model="formData.stu_home_coordinator_email" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="stu_study_level">Study Level</label>
          <input type="text" id="stu_study_level" v-model="formData.stu_study_level" />
        </div>
        <div class="form-group">
          <label for="stu_semester">Semester</label>
          <input type="text" id="stu_semester" v-model="formData.stu_semester" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="stu_home_university">Home University</label>
          <input type="text" id="stu_home_university" v-model="formData.stu_home_university" />
        </div>
      </div>
      <button type="submit" class="clean-button mt-20">Ajouter</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { supabase } from '@/backend/supabase';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';

const router = useRouter()
const userStore = useUserStore()

userStore.loadUserFromSession()
const formData = reactive({
  stu_university_id: '',
  stu_date_of_birth: '',
  stu_email: '',
  stu_first_name: '',
  stu_last_name: '',
  stu_picture: '',
  student_id: '',
  stu_nationality_id: '',
  student__uni_com_id: '',
  created_at: '',
  stu_phone_number: '',
  user_role: '',
  student_region_com_id: '',
  stu_sexe: '',
  stu_home_coordinator_email: '',
  stu_study_level: '',
  stu_semester: '',
  stu_home_university: ''
});

const fields = [
  { name: 'stu_university_id', label: 'University ID', type: 'text' },
  { name: 'stu_date_of_birth', label: 'Date of Birth', type: 'date' },
  { name: 'stu_email', label: 'Email', type: 'email' },
  { name: 'stu_first_name', label: 'First Name', type: 'text' },
  { name: 'stu_last_name', label: 'Last Name', type: 'text' },
  { name: 'stu_picture', label: 'Picture URL', type: 'text' },
  { name: 'student_id', label: 'Student ID', type: 'text' },
  { name: 'stu_nationality_id', label: 'Nationality ID', type: 'text' },
  { name: 'student__uni_com_id', label: 'University Com ID', type: 'text' },
  { name: 'created_at', label: 'Created At', type: 'datetime-local' },
  { name: 'stu_phone_number', label: 'Phone Number', type: 'text' },
  { name: 'user_role', label: 'User Role', type: 'text' },
  { name: 'student_region_com_id', label: 'Region Com ID', type: 'text' },
  { name: 'stu_sexe', label: 'Sexe', type: 'text' },
  { name: 'stu_home_coordinator_email', label: 'Coordinator Email', type: 'email' },
  { name: 'stu_study_level', label: 'Study Level', type: 'text' },
  { name: 'stu_semester', label: 'Semester', type: 'text' },
  { name: 'stu_home_university', label: 'Home University', type: 'text' }
];
function generatePassword(length = 12) {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  const allChars = uppercase + lowercase + numbers + specialChars;

  let password = '';

  // Ensure the password contains at least one character from each character set
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += specialChars[Math.floor(Math.random() * specialChars.length)];

  // Fill the rest of the password length with random characters
  for (let i = password.length; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Shuffle the password to ensure randomness
  return password.split('').sort(() => Math.random() - 0.5).join('');
}

async function submitForm() {
  let { data: SignUpUser, error } = await supabase.auth.signUp({
  email: formData.stu_email,
  password: generatePassword()
})
  if (error){
    console.error("error for loggin")
  }else {
    const {data : InsertUser, error} = await supabase
      .from('students')
      .insert([
        { stu_university_id: userStore.uniId},
        { stu_date_of_birth: formData.stu_date_of_birth},
        { stu_email: formData.stu_email},
        { stu_first_name: formData.stu_first_name},
        { stu_last_name: formData.stu_last_name},
        { stu_picture:"https://plwisydqyvslmicabqpi.supabase.co/storage/v1/object/public/profilPic/default_profile_pic.jpg"},
        { student_id: SignUpUser.user?.id},
        { stu_nationality_id: formData.stu_nationality_id},
        { student__uni_com_id: null},
        { stu_phone_number: formData.stu_phone_number},
        { user_role: 6 },
        { student_region_com_id: null},
        { stu_sexe: formData.stu_sexe },
        { stu_home_coordinator_email: formData.stu_home_coordinator_email},
        { stu_study_level: formData.stu_study_level },
        { stu_semester: formData.stu_semester},
        { stu_home_university: formData.stu_home_university },
  ]).select()
          
  }
}
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

form {
  width: 100%;
  max-width: 800px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}



.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}




@media (max-width: 600px) {
  form {
    padding: 10px;
  }

  input {
    font-size: 0.9em;
  }

  button {
    font-size: 0.9em;
  }

  .form-row {
    flex-direction: column;
  }
}
</style>
