<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { signIn } from '@/backend/UserAuth'
const router = useRouter()
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const userStore = useUserStore()

async function handleSignIn() {
  const { data, error } = await signIn(email.value, password.value)

  if (error) {
    console.error('Login failed', error)
    return
  }

  if (data?.user?.aud === 'authenticated') {
    await userStore.initialize()
    console.log(userStore.studentsInSchool)
    goNext()
  } else {
    console.error('Login failed', error)
  }
}

function goNext() {
  router.push('/Dashboard')
}
</script>
<template>
  <div class="login-container">
    <div class="login-card">
      <div class="logo">
        <img src="@/assets/icons/LogoBlack.png" alt="LiveHere Logo" />
      </div>
      <h1>Connexion</h1>
      <form @submit.prevent="handleSignIn">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="login-button">Connexion</button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--color-background-soft);
}

.login-card {
  background-color: var(--white);
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.logo img {
  height: 60px;
  margin-bottom: 1em;
}

h1 {
  margin-bottom: 1em;
  font-family: 'Lato', sans-serif;
  color: var(--text-light-1);
}

.form-group {
  margin-bottom: 1.5em;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
  color: var(--text-light-1);
}

input {
  width: 100%;
  padding: 0.75em;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  background-color: var(--color-background-soft);
  color: var(--text-light-1);
  transition: border-color 0.3s;
}

input:focus {
  border-color: var(--color-border-hover);
  outline: none;
}

.login-button {
  background-color: #1abc9c;
  color: white;
  border: none;
  padding: 0.75em 1.5em;
  border-radius: 50px;
  font-family: 'Lato', sans-serif;
  font-size: 1.2em;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.login-button:hover {
  background-color: #16a085;
  transform: scale(1.05);
}

.error-message {
  color: #e74c3c;
  margin-top: 1em;
  font-family: 'Lato', sans-serif;
}
</style>
