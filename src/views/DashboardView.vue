<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import studentDataTable from '@/components/studentDataTable.vue'
import mailList from '@/components/mailList.vue'
import editorComposant from '@/components/editorComposant.vue'
</script>

<template>
  <div id="app">
    <header class="b1">
      <h1>salut</h1>
    </header>
    <div class="d-flex flex-row">
      <div class="b3 f1 content-center">
        <p>navbar</p>
      </div>
      <div class="d-flex flex-col min-h-100 f9">
        <h1 class="m-20 max-w-500">🎓 Dashboard vue</h1>
        <p class="ml-20 mr-20">
          <strong style="font-weight: 700">Welcome to the Student Dashboard!</strong> To effectively
          communicate with students at your school, follow these simple steps. First, navigate to
          the student table and select the students you wish to send information to. Next, use the
          provided text editor to write the information you want to convey. Your message will be
          stored in the LiveHere application and automatically sent to the selected students' email
          addresses. By following these steps, you ensure that students receive important
          information both within the app and in their email inboxes. Happy communicating!
        </p>
        <div class="f5 p-30"><studentDataTable /></div>
        <div class="d-flex flex-row f5">
          <div class="f5"><editorComposant /></div>
          <div class="f5 mail-list"><mailList /></div>
        </div>
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
