<script setup lang="ts">
import { RouterLink } from 'vue-router'
import supabaseAuther from '@/components/Auth/supabaseAuther.vue'
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
        <div class="b4 f5"><p>oui</p></div>
        <div class="b5 f5 p-30"><supabaseAuther /></div>
      </div>
    </div>
    <footer class="b4">
      <h2>je suis un pied</h2>
    </footer>
  </div>
</template>

<style lang="scss">
@use '@/assets/style.scss';
@use '@/assets/debug.scss';
</style>
