<template>
  <transition name="popup">
    <div v-if="visible" class="error-popup">
      <strong>❌ {{ message }}</strong>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: 15000 // Durée par défaut pour laquelle la pop-up sera visible
  }
})

const visible = ref(true)

onMounted(() => {
  setTimeout(() => {
    visible.value = false
  }, props.duration)
})
</script>

<style scoped>
.error-popup {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.9;
}

.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.5s;
}
.popup-enter, .popup-leave-to /* .popup-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
