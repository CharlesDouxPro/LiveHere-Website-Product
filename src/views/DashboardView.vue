<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import studentDataTable from '@/components/Dashboard/studentDataTable.vue'
import mailList from '@/components/Dashboard/mailList.vue'
import editorComposant from '@/components/Dashboard/editorComposant.vue'
import HeaderComposant from '@/components/utils/HeaderComposant.vue'
import NavBarComposant from '@/components/utils/NavBarComposant.vue'
import { ref } from 'vue'
const isOpen = ref(false)

function toggleDrawer() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div id="app">
    <HeaderComposant />
    <div class="d-flex flex-row p-50">
      <div>
        <NavBarComposant :isOpen="isOpen" @toggleDrawer="toggleDrawer" />
      </div>
      <div class="d-flex flex-col min-h-100 p-20">
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
  </div>
</template>

<style lang="scss">
@use '@/assets/style.scss';
@use '@/assets/debug.scss';
</style>
