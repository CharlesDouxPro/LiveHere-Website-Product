<template>
  <div class="container">
    <div :class="['drawer', { open: isOpen }]">
      <div class="header d-flex flex-row">
        <img src="@/assets/icons/LogoBlack.png" alt="Logo" class="logo" />
        <h1 style="font-weight: 800">Live Here</h1>
      </div>
      <div class="content">
        <ul>
          <li>Communication</li>
          <li>Events</li>
          <li>Informations</li>
        </ul>
      </div>
      <div class="footer">
        <div class="user-info">
          <span>{{ userName }}</span>
          <button @click="logout" class="logout-btn">Déconnexion</button>
        </div>
      </div>
    </div>
    <div v-if="isOpen" class="backdrop" @click="toggleDrawer"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['toggleDrawer'])

const userName = ref('John Doe')

function toggleDrawer() {
  emit('toggleDrawer')
}

function logout() {
  // Logic to handle logout
  console.log('User logged out')
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');

.container {
  position: relative;

  .drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: var(--color-background);
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;

    &.open {
      transform: translateX(0);
    }

    .header {
      padding: 20px;
      text-align: center;

      .logo {
        width: 50px;
        cursor: pointer;
        transition:
          background-color 0.3s,
          border-color 0.3s,
          color 0.3s,
          box-shadow 0.3s;

        &:hover {
          background-color: var(--color-border-hover);
          border-color: var(--color-border-hover);
          color: var(--color-background);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
      }
    }

    .content {
      ul {
        list-style: none;
        padding: 20px;
        font-size: 22px;
        margin-top: 40px;
        color: var(--color-heading);
        font-weight: 700;

        li {
          padding: 10px 0;
          border-bottom: 1px solid var(--divider-light-1);
          margin-top: 10px;
          cursor: pointer;
          transition:
            background-color 0.3s,
            border-color 0.3s,
            color 0.3s,
            box-shadow 0.3s;

          &:hover {
            background-color: var(--color-border-hover);
            border-color: var(--color-border-hover);
            color: var(--color-background);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          img {
            margin-right: 10px;
          }
        }
      }
    }

    .footer {
      position: absolute;
      bottom: 20px;
      width: 100%;
      padding: 20px;
      border-top: 1px solid var(--divider-light-2);

      .user-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logout-btn {
          background-color: var(--color-border-hover);
          color: var(--color-heading);
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          cursor: pointer;
          transition:
            background-color 0.3s,
            border-color 0.3s,
            color 0.3s,
            box-shadow 0.3s;

          &:hover {
            background-color: var(--color-heading);
            color: var(--color-background);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
  }

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
}
</style>
