<script setup lang="ts">
<<<<<<< HEAD
import { RouterLink, RouterView } from 'vue-router'
<<<<<<< HEAD
import StudentTable from './components/app/StudentTable.vue'
=======
import studentDataTable from './components/studentDataTable.vue'
import supabaseAuther from './components/supabaseAuther.vue'
>>>>>>> b4d5381 (auth + tableau basique)
</script>

<template>
  <div id="app">
    <header class="b1">
      <h1>salut</h1>
    </header>
    <div class="b2 d-flex flex-row">
      <div class="b3 f1 content-center">
        <p>navbar</p>
      </div>
      <div class="b3 d-flex flex-col min-h-100 f9">
<<<<<<< HEAD
        <div class="b4 f5 content-center"><h1>oui</h1></div>
        <StudentTable />
=======
        <div class="b4 f5 content-center"><supabaseAuther /></div>
        <div class="b5 f5 content-center p-30"><studentDataTable /></div>
>>>>>>> b4d5381 (auth + tableau basique)
      </div>
    </div>
    <footer class="b4">
      <h2>je suis un pied</h2>
    </footer>
  </div>
=======
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
>>>>>>> 2a39e74 (datatable done)
</template>

<style lang="scss">
@use './assets/style.scss' as *;
@use './assets/debug.scss' as *;
</style>
