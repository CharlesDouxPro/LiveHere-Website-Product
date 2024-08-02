<template>
  <header class="navbar">
    <div class="logo d-flex flex-row content-center">
      <img src="@/assets/icons/LogoBlack.png" alt="LiveHere Logo" />
      <h1 class="ml-10" style="font-weight: 700;">Live Here</h1>
    </div>
    <nav>
      <ul>
        <li><a href="#home">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <button class="login-button" @click="goNext">Connexion</button>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goNext() {
  router.push('/Auth');
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5em 2em;
  background-color: var(--white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo img {
  height: 40px;
  cursor: pointer;
}

nav ul {
  display: flex;
  gap: 2em;
  list-style: none;
}

nav a {
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  color: var(--text-light-1);
  transition: color 0.3s ease;
}

nav a:hover {
  color: var(--indigo);
}

.login-button {
  background-color: var(--color-background-soft);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 5px;
  padding: 10px 20px;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    border-color 0.3s,
    color 0.3s,
    box-shadow 0.3s;
}

.login-button:hover {
  background-color: var(--color-border-hover);
  border-color: var(--color-border-hover);
  color: var(--color-background);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  nav ul {
    flex-direction: column;
    gap: 1em;
    width: 100%;
  }

  .login-button {
    align-self: flex-end;
  }
}
</style>
