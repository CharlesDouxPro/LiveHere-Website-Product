<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { signIn } from '@/backend/UserAuth'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()
const emailUser = ref<string>('')
const passwordUser = ref<string>('')
const userStore = useUserStore()

async function handleSignIn() {
  const { data, error } = await signIn(emailUser.value, passwordUser.value)

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
  <div class="login-page">
    <div class="login-container">
      <form @submit.prevent="handleSignIn" class="login-form">
        <h1>Connexion</h1>
        <div class="input-group">
          <label for="email">Adresse Email</label>
          <input type="text" id="email" v-model="emailUser" required />
        </div>
        <div class="input-group">
          <label for="password">Mot de passe</label>
          <input type="password" id="password" v-model="passwordUser" required />
        </div>
        <button type="submit" class="submit-button">Se connecter</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
/* votre style */
</style>
