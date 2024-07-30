<template>
  <div class="p-10 main-block m-20">
    <h1>Mail List</h1>
    <div class="p-20 scrollable-container rtl">
      <div
        v-for="modality in modalitiesList"
        :key="modality.mod_id"
        class="content-center modality-block ltr"
      >
        <div class="d-flex flex-row content-center">
          <div class="flex-fill">
            <h1>{{ modality.mod_name }}</h1>
            <div class="d-flex flex-row align-items-center">
              <img :src="modality.students.stu_picture" alt="user_picture" class="picture-class" />
              <span class="ml-10"
                >{{ modality.students.stu_first_name }} {{ modality.students.stu_last_name }}</span
              >
            </div>
          </div>
          <i class="icon-class">
            <img
              src="@/assets/icons/cancel-icons.svg"
              alt="icon"
              class="icon-class"
              @click="delModality(modality.mod_id)"
            />
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/backend/supabase'
import { onMounted } from 'vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
userStore.loadUserFromSession()
const modalitiesList = ref<any[]>([])

const getModalities = async () => {
  const { data: modalities, error } = await supabase
    .from('modalities')
    .select(
      `
      mod_id,
      mod_description,
      mod_name,
      mod_university_id,
      mod_date,
      students (
        stu_first_name,
        stu_last_name,
        stu_picture
      )
    `
    )
    .eq('mod_university_id', userStore.uniId)

  if (error) {
    console.error(error)
  } else {
    modalitiesList.value = modalities
    console.log(modalitiesList.value)
  }
}

async function delModality(mod_id: number) {
  const { error } = await supabase.from('modalities').delete().eq('mod_id', mod_id)

  if (error) {
    console.error(error)
  } else {
    getModalities()
  }
}

onMounted(getModalities)
</script>

<style scoped lang="scss">
.modality-block {
  border: 1px solid var(--color-border);
  border-radius: 10px; /* Réduire la courbure pour un look plus net */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre subtile */
  padding: 10px 15px; /* Espacement intérieur plus uniforme */
  margin-bottom: 20px; /* Espacement extérieur plus serré */
  background-color: var(--color-background-soft); /* Fond doux pour contraster */
}

.icon-class {
  width: 20px;
  height: auto;
  cursor: pointer;
}

.picture-class {
  width: 30px;
  height: 30px;
  margin: 1px;
  border-radius: 20px;
}

.scrollable-container {
  height: 50vh;

  overflow-y: auto;
}
</style>
