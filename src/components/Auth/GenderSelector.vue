<template>
  <div class="gender-selector">
    <select v-model="selectedGender" @change="emitGender" class="select-box">
      <option v-for="(gender, index) in genders" :key="index" :value="gender">
        {{ gender }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const genders = ['Female', 'Male', 'Other']

const selectedGender = ref(null)

const emit = defineEmits(['updateGender'])

const emitGender = () => {
  emit('updateGender', selectedGender.value)
}
</script>

<style scoped lang="scss">
.select-box {
  width: 40%;
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
</style>
