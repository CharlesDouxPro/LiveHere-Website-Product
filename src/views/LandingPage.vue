<script setup>
import HeaderLanding from '../components/LandingPage/HeaderLanding.vue'
import HeroSection from '../components/LandingPage/HeroSection.vue'
import WhyLv from '../components/LandingPage/WhyLv.vue'
import ServiceLv from '../components/LandingPage/ServiceLv.vue'
import TestimonialsLv from '../components/LandingPage/TestimonialsLv.vue'
import ContactLv from '../components/LandingPage/ContactLv.vue'
import FooterLv from '../components/LandingPage/FooterLv.vue'
import TrustSection from '../components/LandingPage/TrustSection.vue'
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<template>
  <div id="app">
    <HeaderLanding />
    <HeroSection />
    <ServiceLv />
    <WhyLv />
    <TestimonialsLv />
    <TrustSection />
    <ContactLv />
    <FooterLv />
  </div>
</template>
