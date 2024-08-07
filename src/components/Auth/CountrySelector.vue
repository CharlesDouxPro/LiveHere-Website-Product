<template>
  <div class="country-selector">
    <select v-model="selectedCountry" @change="emitNationality" class="select-box">
      <option v-for="country in countries" :key="country.id" :value="country.id">
        {{ country.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/backend/supabase'
import { ref, computed, onMounted } from 'vue'
import type { Ref } from 'vue'

interface Country {
  id: number
  name: string
}

const countries: Ref<Country[]> = ref([])
const selectedCountry: Ref<number | null> = ref(null)

async function getCountryList() {
  const { data, error } = await supabase.from('countries').select('id, name')
  if (data) {
    countries.value = data
  } else if (error) {
    console.error(error)
  }
}

onMounted(() => {
  getCountryList()
})

const selectedCountryName = computed(() => {
  const country = countries.value.find((c) => c.id === selectedCountry.value)
  return country?.id
})

const emit = defineEmits(['updateNationality'])

const emitNationality = () => {
  emit('updateNationality', selectedCountryName.value)
  console.log(selectedCountryName.value)
}
</script>

<style scoped lang="scss">
.select-box {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ffffff;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
}

.selected-country {
  font-size: 18px;
  color: #333;
}
</style>
