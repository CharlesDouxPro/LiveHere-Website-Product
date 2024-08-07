<template>
  <section id="testimonials-students">
    <h1>Ce que pensent les étudiants</h1>
    <div class="carousel">
      <div class="testimonial" v-for="testimonial in testimonials1" :key="testimonial.id">
        <blockquote>{{ testimonial.quote }}</blockquote>
        <cite>{{ testimonial.name }}</cite>
      </div>
    </div>
  </section>
  <section id="testimonials-coordinators">
    <h1>Ce que pensent les coordinateurs</h1>
    <div class="carousel">
      <div class="testimonial" v-for="testimonial in testimonials2" :key="testimonial.id">
        <blockquote>{{ testimonial.quote }}</blockquote>
        <cite>{{ testimonial.name }}</cite>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">

import { ref } from "vue";

// Définitions des témoignages
const testimonials1 = ref([
  { id: 1, quote: 'I didn’t know much about the study program and I had very little infromation about the subjects. Now I already know a bit how are the study programs structured and I would probably pick different subjects based on that knowledge.', name: 'Dominik Vaca - Etudiant étranger en France' },
  { id: 2, quote: 'The events happening in school were not introduced to us clearly. When there was something happening there were no explanation in English. That restrained us from integrating with other students.', name: 'Mehmetonur Akbulut - Etudiant étranger en France ' }
]);

const testimonials2 = ref([
  { id: 1, quote: "Live Here est l'outil qui permet non seulement d'optimizer la charge de travail des coordinateurs mais aussi d'améliorer l'expérience du mêtier.", name: 'Anna Lebas Signora -  Coordinatrice à EIVP Paris' },
  { id: 2, quote: "Favoriser l'intégration des étudiants et combattre le communautarisme est primordial pour une école. Intégrer les étudiants étrangers avec les locaux, c'est créer un réseau professionnel international pour nos étudiants.", name: 'Jean baptiste Caule - Directeur developpement ESIEE Paris' },
  { id: 3, quote: "Pouvoir centraliser l'information est un vrai gains de temps pour les coordinateurs. Je passe beaucoup moins de temps sur les questions par mails répétitives.", name: 'Sabrina Clément - Coordinatrice à Esiee Paris' }
]);
</script>

<style scoped>
section {
  padding: 60px 20px;
}
h1 {
  font-size: 1.9em;
  text-align: left;
  color: #333;
  padding: 60px 20px
}
.carousel {
  display: flex;
  overflow-x: scroll;
  gap: 20px;
}
.testimonial {
  min-width: 300px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px;
  background-color: rgba(34, 32, 32, 0.8); 
  border-radius: 10px; /* Coins arrondis pour un meilleur aspect visuel */
}
blockquote {
  font-size: 1.2em;
  color: white;
  text-align: top;
  
}
cite {
  display: block;
  margin-top: 10px;
  color: #b0b0b0; /* Gris clair pour un bon contraste */
}
</style>
