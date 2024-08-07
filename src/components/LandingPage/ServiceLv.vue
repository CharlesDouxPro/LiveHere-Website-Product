<template>
  <section id="services">
    <div class="service-group content-center">
    <div class = " d-flex flex-col max-w-500 content-Web">
      <h1>Site web pour les coordinateurs.</h1>
      <p> Notre site web aux fonctionalités imaginés avec des coordinateurs, permet l'intégration des informations et ressources ainsi que la gestion des étudiants avec un design
        épuré et simple.</p>
    </div>
    <div class = "imageWeb">
      <img src="@/assets/icons/screenWeb.png" alt="Image of a computer">
    </div>
  </div>

  <div class="service-group content-center ">
    <div class = "d-flex flex-col max-w-500 mr-50">
      <h1>Application mobile pour les étudiants.</h1>
      <p> Notre application mobile est utilisable gratuitement par les étudiants étrangers. Ils pourront lire et retrouver les ressources intégré dans le site web par leurs coordinateurs en une minute.</p>
    </div>
    
    <div class = "">
      <img src="@/assets/icons/mobileApp.png" alt="Image of a computer">
    </div>
  </div>
    <div class="service-group content-center">
    <div class = "d-flex flex-col max-w-500 mr-50">
      <h1>Coaching étudiants</h1>
      <p> Faites appel à notre service d'intervention en école pour sensibiliser vos étudiants aux comportements à adopter afin de maximiser les bénéfices de leurs échanges internationaux. Ils prendront conscience de l'importance de développer leur réseau, d'améliorer leurs compétences linguistiques, de découvrir de nouvelles cultures, d'enrichir leurs expériences de voyage et d'optimiser leur parcours éducatif. Offrez-leur une richesse d'opportunités inestimables !</p>
    </div>
    <div class = "">
      <img src="@/assets/icons/PresentationService.png" alt="Image of a computer">
    </div>
  </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
section {
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.service-group{
  display: flex;
  flex-direction: row;
  margin: 50px;
}

.contentService{
  z-index: 1;
  color: #333;
  padding: 20px;
  max-width: 500px;
  margin-top: 120px;
  margin-left: 100px;
}

.content-Web {
  z-index: 1;
  color: #333;
  margin-right: 150px;
  max-width: 500px;

}
.contentApp {
  z-index: 1;
  color: #333;
  padding: 20px;
  max-width: 500px;
  margin-top: 120px;
  margin-left: 100px;
}


.imageWeb {
  z-index: 1;
  color: #333;
  padding: 20px;
  width: 300px;
  height: auto;
}

.imageService {
  z-index: 1;
  color: #333;
  padding: 20px;
  margin-top: 200px;
  border-radius: 40px;
}

.imageApp {
  z-index: 1;
  color: #333;
  padding: 20px;
  margin-top: 200px;
}

h1 {
  text-align: left;
  color: #333;
  font-size: 3em;
}

p {
  text-align: left;
  color: #333;
  font-size: 1.5em;
  max-width: 500px;
}

img {
  width: 100%;
  max-width: 400px;
  height: auto;
}

@media (max-width: 768px) {
  section {
    flex-direction: column; /* Stack elements vertically on small screens */
  }
  .service-group{
    flex-direction: column;
  }

  .contentWeb {
    padding: 10px;
    text-align: center;
    max-width: 100%;
  }
  .contentApp {
    padding: 10px;
    text-align: center;
    max-width: 100%;
    margin-left: 0px;
  }
  

h1 {
    font-size: 2em;
    text-align: center;
}

p {
    font-size: 1em;
    text-align: center;
}
}
</style>