<template>
  <section id="contact">
    <h1>Contactez-nous</h1>
    <form ref="contactForm" @submit.prevent="handleSubmit">
      <div>
        <label for="name">Nom</label>
        <input type="text" id="name" name="from_name" v-model="form.user_name" required />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="from_email" v-model="form.user_email" required />
      </div>
      <div>
        <label for="message">Message</label>
        <textarea id="message" name="message" v-model="form.message" required></textarea>
      </div>
      <input type="submit" value="Envoyer" />
    </form>
    <div v-if="showSuccessMessage" class="success-message">
      E-mail envoyé avec succès!
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { sendEmail } from '@/backend/emailServices';

const form = ref({
  user_name: '',
  user_email: '',
  message: ''
});

const contactForm = ref<HTMLFormElement | null>(null);
const showSuccessMessage = ref(false);

const handleSubmit = () => {
  if (contactForm.value) {
    sendEmail(contactForm.value)
      showSuccessMessage.value = true;
      form.value = {
        user_name: '',
        user_email: '',
        message: ''
      };
      setTimeout(() => {
        showSuccessMessage.value = false;
      }, 3000);

  }
};
</script>

<style scoped>
section {
  padding: 60px 20px;

}

h1 {
  text-align: left;
  color: #333;
  font-size: 3em;
}

label {
  color: #333;
  margin: 3px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
}

form div {
  display: flex;
  flex-direction: column;
}

input, textarea {
  border: 1px solid #ccc;
  border-radius: 13px; 
  padding: 10px;
  font-family: Helvetica, sans-serif; 
}

textarea {
  height: 200px;
}

input[type="submit"] {
  background-color: #1abc9c;
  border: none;
  padding: 10px 20px;
  color: #333;
  cursor: pointer;
  border-radius: 20px; 
}

.success-message {
  color: #1abc9c;
  font-size: 1.5em;
  text-align: center;
  margin-top: 20px;
}
</style>
