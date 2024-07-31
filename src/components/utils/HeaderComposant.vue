<template>
<header >
    <div class="d-flex flex-row ">
        <div class="d-flex flex-row content-center ">
        <img src="@/assets/icons/LogoBlack.png" alt="Logo" class="logo-header">
        <h1 class="title-header mr-50"> Live Here</h1>
        <img src="@/assets/icons/hamburgerDrawer.svg" alt="Drawer Bouton" @click="toggleDrawer"  class="logo-drawer"/>

        <div>
        <NavBarComposant :isOpen="isOpen" @toggleDrawer="toggleDrawer" />
    </div>
    </div>
        


    </div>

  </header>
</template>

<script setup >

import { ref } from 'vue';
import NavBarComposant from './NavBarComposant.vue';
const isOpen = ref(false);

function toggleDrawer() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped lang="scss">

header{
    background-color: var(--color-background-mute);
}

.logo-header{
    width: 50px;
    height: auto;
}

.title-header{
    font-weight: 800;
}

.logo-drawer {
  width: 20px;
  height: auto;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
}
</style>