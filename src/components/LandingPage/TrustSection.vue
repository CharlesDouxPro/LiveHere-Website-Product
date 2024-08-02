<template>
    <section class="trust-section ">

      <div class="logos">
        <img src="@/assets/icons/EivpLogoWb.png" alt="Logo 3" class="logo1">
        <img src="@/assets/icons/PepiteLogoWb.png" alt="Logo 4" class="logo">
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
<style scoped>
.trust-section {
  padding: 60px 20px;
  text-align: center;

}

h2 {
  color : #333;
  font-size: 2em;
  margin-bottom: 40px;
}

.logos {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
}

.logo {
  max-width: auto;
  height: auto;
}
.logo1 {
  max-width: 150px;
  height: auto;
}
</style>
  