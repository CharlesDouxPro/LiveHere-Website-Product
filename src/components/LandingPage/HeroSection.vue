<template>
  <section class="hero">
    <div class="logo">
      <img src="@/assets/icons/LogoBlack.png" alt="LiveHere Logo" />
    </div>
    <div class="content">
      <p>
        Live Here permet aux coordinateurs internationaux des écoles d'envoyer plus facilement leurs informations aux étudiants étrangers. Grace à un dashboard web pour les coordinateurs et une applicaiton mobile pour les étudiants
      </p>
      <button @click="scrollToContact">Découvrez Nos Offres</button>
    </div>
    <div class="video-wrapper">
      <video autoplay muted loop class="background-video">
        <source src="@/assets/icons/back-video.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="title">
      <h1>Live Here</h1>
      <h3>Facilitez l'intégration des étudiants étrangers</h3>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { scrollToContact } from './scrollToContacts'
const router = useRouter()

function goNext() {
  router.push('/Login')
}
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background-mute);
}

.logo {
  display: none;
}

.content {
  position: absolute;
  bottom: 100px;
  left: 20px;
  z-index: 1;
  text-align: left;
  color: #333;
  padding: 20px;
  max-width: 500px;
}

.title {
  position: absolute;
  top: 80px;
  right: 10px;
  z-index: 1;
  text-align: right;
  color: #333;
  padding: 5px;
  max-width: 480px;
}

h1 {
  max-width: 500px;
  font-size: 3em;
  font-weight: 800;
}
h3{
  max-width: 1000px;
  font-size: 1.5em;
  font-weight: 600;
}

p {
  margin: 20px 0;
  font-size: 1.4em;
  max-width: 1000px;
  text-align: left;
}

.video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 60% 0, 80% 100%, 0 20%);
  overflow: hidden;
  z-index: 0;
  animation: fadeIn 10s ease-in-out;
  opacity: 0.6;
}

.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes fadeIn {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 0.6;
  }
}

button {
  background-color: #1abc9c;
  border: none;
  padding: 15px 30px;
  color: white;
  cursor: pointer;
  font-size: 1.2em;
  border-radius: 50px;
  margin-top: 10px;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

button:hover {
  background-color: #16a085;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .content {
    bottom: 20px;
    left: 10px;
    max-width: 100%;
    text-align: center;
    margin: 0px;
  }

  .title {
    top: 150px;
    right: 10px;
    padding: 10px;
    text-align: center;
  }

  .login {
    display: inline;
    background-color: #1abc9c;
    border: none;
    padding: 15px 30px;
    color: white;
    cursor: pointer;
    font-size: 1.2em;
    border-radius: 50px;
  }

  h1 {
    font-size: 2em;
    max-width: 100%;
  }

  p {
    font-size: 1.2em;
    max-width: 100%;
    text-align: center;
  }

  .video-wrapper {
    display: none;
  }

  .logo {
    display: flex;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    height: 100px;
  }
}
</style>
