<template>
  <main class="home-view__container" id="presentation">
    <div class="home-view__content">
      <h1 class="home-view__title">CRÉE VOTRE SITE WEB COMME UN PROFESSIONNEL</h1>
      <h2 class="home-view__subtitle">Bonjour, je suis <span class="home-view__subtitle-highlight">Milouah Mohammed</span>, un développeur web junior</h2>
      <p class="home-view__description">
        Dynamique et flexible, je suis animé par la volonté de mettre en pratique mes compétences au sein de votre équipe tout
         en enrichissant mon expérience dans le domaine du développement web et mobile. Structuré, ponctuel et toujours prêt
          à relever de nouveaux défis, je possède une maîtrise trilingue (français, anglais, arabe) et je suis déterminé
           à apporter une contribution significative. Mon objectif est 
           d'apprendre et de participer à la réussite de vos projet.
      </p>
      <router-link to="/jobForum" class="home-view__btn">Commencer</router-link>
    </div>
    <div class="home-view__image">
      <img src="../assets/decorations/header.png" alt="Header Image">
    </div>
  </main>

  <section @mouseenter="mouseInProject" @mouseleave="mouseOutOfProject" class="home-view__achievements-container" id="achievements">
    <h3 class="home-view__header">MES RÉALISATIONS</h3>
    <div class="home-view__achievements">
      <div class="home-view__card">
        <span class="home-view__icon"><img class="home-view__icon-image" src="../assets/icons/cv.png" alt="CV Icon"></span>
        <h4 class="home-view__card-title">Mon CV En HTML Et CSS</h4>
        <img v-show="projectFocused" class="home-view__sample" src="../assets/project_img/cv/cv_sample.png" alt="CV Sample">
        <p class="home-view__details" @click="openModal(1)"> Plus de details <i class="ri-arrow-right-line"></i></p> 
      </div>

      <div class="home-view__card">
        <span class="home-view__icon"><img class="home-view__icon-image" src="../assets/icons/write.png" alt="Notebook Icon"></span>
        <h4 class="home-view__card-title">Cahier des charges</h4>
        <img v-show="projectFocused" class="home-view__sample" src="../assets/project_img/cahier_des_charges/cdc_sample.png" alt="Cahier des charges Sample">
        <p class="home-view__details" @click="openModal(2)"> Plus de details <i class="ri-arrow-right-line"></i></p> 
      </div>

      <div class="home-view__card">
        <span class="home-view__icon"><img class="home-view__icon-image" src="../assets/icons/icons-comment-100.png" alt="Comment Icon"></span>
        <h4 class="home-view__card-title">Espace de commentaire</h4>
        <img v-show="projectFocused" class="home-view__sample" src="../assets/project_img/comments/comment_sample.png" alt="Comment Sample">
        <p class="home-view__details" @click="openModal(3)"> Plus de details <i class="ri-arrow-right-line"></i></p> 
      </div>
    </div>
  </section>

  <section class="home-view__form" id="contact">
    <h5 class="home-view__form-header">Contact Me</h5>
    <form action="https://formspree.io/f/xqkrdkwe" method="POST">
      <p v-show="error" class="home-view__error" ref="errorMessage">Tout les champ sont obligatoire</p>

      <input name="firstname" type ="text" placeholder = "Firstname" ref="firstName" required>
      <input name="lastname" type ="text" placeholder = "Lastname" ref="lastName" required>
      <input name="email" type ="email" placeholder = "Email" ref="email" required>

      <textarea name="message" placeholder="Message" ref="message" required></textarea>
      <button @click="checkfields" class="home-view__btn" type="submit">submit</button>
    </form>
  </section>
  <Modal v-if="showModal" :project="project" @close="openModal()"></Modal>
</template>

<script>
import Modal from '../components/Modal.vue'
import { projectsData } from '@/data/projects_data'

export default {
  name: 'HomeView',
  components: { Modal },
  data() {
      return {
        error: false,
        projectFocused: false,
        project: null,
        showModal: false
      }
    },
    methods: {
      checkfields() {
        if (this.$refs.firstName.value.trim().length === 0 || this.$refs.lastName.value.trim().length === 0 || this.$refs.email.value.trim().length === 0 || this.$refs.message.value.trim().length === 0) {
          this.error = true
          this.$refs.errorMessage.classList.add("home-view__shake");
          setTimeout(() => {
            this.$refs.errorMessage.classList.remove('home-view__shake');
          }, 250);
        } else {
          this.error = false
        }
      },

      mouseInProject() {
        const cards = document.querySelectorAll('.home-view__card');
        const details = document.querySelectorAll(".home-view__details")
        const samples = document.querySelectorAll(".home-view__sample")

        setTimeout(() => {
          this.projectFocused = true
        }, 100);

        cards.forEach((card) => {
          card.classList.add('home-view__scroll-down');
        });
        details.forEach((detail) => {
          detail.classList.add("home-view__details-fade-in");
        });
        samples.forEach((sample) => {
          sample.classList.add("home-view__fade-down");
        });

        setTimeout(() => {
          details.forEach((detail) => {
            detail.classList.remove("home-view__details-fade-in");
          });
          cards.forEach((card) => {
            card.classList.remove('home-view__scroll-down');
          });
          samples.forEach((sample) => {
            sample.classList.remove("home-view__fade-down");
          });
        }, 300);
      },

      mouseOutOfProject() {
        const cards = document.querySelectorAll('.home-view__card');
        const details = document.querySelectorAll(".home-view__details")
        const samples = document.querySelectorAll(".home-view__sample")

        cards.forEach((card) => {
          card.classList.add('home-view__scroll-up');
        });

        details.forEach((detail) => {
          detail.classList.add("home-view__details-fade-out");
        });

        samples.forEach((sample) => {
          sample.classList.add("home-view__removing");
        });

        setTimeout(() => {
          this.projectFocused = false
          cards.forEach((card) => {
            card.classList.remove('home-view__scroll-up');
          });

          details.forEach((detail) => {
            detail.classList.remove("home-view__details-fade-out");
          });

          samples.forEach((sample) => {
            sample.classList.remove("home-view__removing");
          });
        }, 300);
      },

      openModal(projectId) {
        this.project = Object.values(projectsData).filter(item => item.id === projectId)[0]
        this.showModal = !this.showModal
      }
    }
}
</script>

<style>
.home-view__container {
  position: relative;
  display:grid ;
  grid-template-columns: repeat(2,1fr);
  align-items: center ;
  gap: 2rem;
  max-width: 1200px;
  margin: auto;
  padding: 15rem 2rem 5rem;
}

.home-view__title {
  margin-bottom: 1rem;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
}

.home-view__subtitle {
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: 700;
  line-height: 4rem;
}

.home-view__subtitle-highlight {
  color: #18181b;
  -webkit-text-stroke: 1px #ffffff;
}

.home-view__description {
  margin-bottom: 2rem;
  color: #ffffff;
}

.home-view__image {
  position: relative;
}

.home-view__image::before {
  content: "o";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 38rem;
  font-weight: 400;
  line-height: 16rem;
  color: #751cc9;
  opacity: 0.2;
  z-index: -100;
}

.home-view__image img {
  max-width: 600px;
  margin: auto; 
}

.home-view__card .home-view__icon {
  max-width: 24px;
  height: auto;
}

.home-view__sample {
  max-width: 400px;
  max-height: 200px;
  margin-bottom: 0.5rem;
  height: auto;
  overflow: hidden;
  display: block;
  border-radius: 10px;
  object-fit: cover;
}

.home-view__fade-down {
  animation: fade-down 0.3s;
}

.home-view__removing {
  animation: fade-up 0.3s;
}

@keyframes fade-up {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  10% {
    opacity: 1;
  }
  30% {
    opacity: 0.1;
  }
  100% {
    opacity: 0;
    transform: translateY(-30px) scale(0.9);
  }
}

@keyframes fade-down {
  0% {
    opacity: 0;
    transform: translateY(-30px) scale(0.9);
  }
  10% {
    opacity: 0;
  }
  30% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
}

.home-view__achievements-container {
  max-width: 1200px;
  margin: auto;
  padding: 15rem 2rem 5rem;
}

.home-view__header {
  margin-bottom: 1rem;
  color: #fff;
  text-align: center;
  font-size: 2.25rem;
  font-weight: 600;
}

.home-view__achievements {
  margin-top: 4rem;
  padding-bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.home-view__scroll-down {
  animation: scroll-down 0.1s;
}

.home-view__scroll-up {
  animation: scroll-up 0.3s;
}

@keyframes scroll-up {
  0% {
    height: 19.416rem;
  }
  100% {
    height: 11.125rem;
  }
}

@keyframes scroll-down {
  0% {
    height: 10.688rem;
  }
  100% {
    height: 23.345rem;
  }
}

.home-view__card {
  background-color: #27272a;
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 15px;
}

.home-view__card:hover {
  background-color: #323232;
  border-color: #fff;
  box-shadow: 20px 40px 70px 25px #751cc979;
}

.home-view__icon-image {
  max-width:42px ;
  max-height: 28px;
  display: inline-block;
  background-color: #751cc9;
  padding: 2px 9px;
  margin-bottom: 1rem;
  font-size: 1.75rem;
  color: #fff;
  border-radius: 5px;
}

.home-view__card-title {
  margin-bottom: 0.5rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
}

.home-view__details {
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.home-view__details-fade-in{
  animation: fade-down 0.3s;
}

.home-view__details-fade-out{
  animation: fade-out 0.3s;
}

@keyframes fade-out{
  0%{
    opacity: 0.9;
  }
  70%{
    opacity: 0;
  }
  100%{
    opacity: 0;
  }
}

.home-view__form {
  max-width: 600px;
  margin: auto;
  padding: 1.6rem ;
  width: 50%;
  background-color: #323232;
  border-radius: 15px;
}

.home-view__form form {
  margin: auto;
  max-width: 550px;
  display: grid;
  gap: 2rem;
}

.home-view__form form input, textarea{
  width: 100%;
  height: 100%;
  padding: 0.5rem 0 0.5rem 0.4rem;
  background-color:#18181b ;
  border-radius: 15px;
  color: #fff;
  font-size: 1.2rem;
  resize: vertical;
}

.home-view__form-header {
  margin-bottom: 0.7rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
}

.home-view__error {
  color: rgb(255, 255, 255);  
  border: 1px solid rgb(255, 0, 0);
  border-radius: 5px;
  padding: 5px; 
  background-color:#2b1111 ;
  text-align: center;
}

.home-view__btn {
  background-color: #751cc9;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;
}

.home-view__btn:hover {
  background-color: #5a0c8a;
}

.home-view__shake {
  animation: shake 0.2s;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}

@media (width < 900px) {
  .home-view__container {
    grid-template-columns: repeat(1,1fr);
  }
  .home-view__image {
    grid-area: 1/1/2/2;
  }
  .home-view__achievements{
    grid-template-columns: repeat(2,1fr);
  }
}

@media (width < 600px) {
  .home-view__image::before {
    display: none;
  }
  .home-view__achievements{
    grid-template-columns: repeat(1,1fr);
  }
}
</style>

