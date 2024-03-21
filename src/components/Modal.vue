<template>
    <div @click.self="closeModal" class="modal-backdrop">
      <figure class="modal">
        <img @click="closeModal" class="modal__close" src="../assets/icons/close.png" alt="Close">
        <h1 class="modal__title">{{ project.title }}</h1>
        <section class="modal__container">
          <div class="modal__slider-wrapper">
            <div class="modal__slider">
              <img v-for="(imgSrc, index) in project.imgSrc" :key="'slide-' + index" :id="'slide-' + index " :src="imgSrc">
            </div>
            <div class="modal__slider-nav">
              <a v-for="(img, index) in project.imgSrc" :key="'nav-' + index" :href="'#slide-' + index"></a>
            </div>
          </div>
        </section>
        <div class="modal__project-info">
          <h2>Date de création : <time>{{ project.date }}</time></h2>
          <h3>Les technologies utilisées :</h3>
          <ul class="modal__technology-list">
            <li v-for="technologie in project.technologies" :key="technologie" class="modal__technology">{{ technologie }}</li>
          </ul>
          <span class="modal__project-link">
            Lien vers le projet:
            <a :href="project.link" target="_blank" class="modal__project-link-icon"><i class="ri-link"></i></a>
          </span>
        </div>
      </figure>
    </div>
  </template>
  
  <script>
  export default {
    props: ['project'],
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style scoped>
  .modal-backdrop {
    z-index: 20;
    top: 0;
    left: 0;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background-image: url('../assets/decorations/background.png');
    background-size: cover;
    background-position: center;
    position: relative;
    width: 850px;
    padding: 20px;
    margin: 100px auto;
    background-color: #fff;
    border: 2px solid #751cc9;
    border-radius: 10px;
    overflow-y: auto;
    max-height: calc(100% - 40px);
    animation: fade-down 0.5s;
  }
  
  .modal__title {
    max-width: 400px;
    padding-left: 1rem;
    background: #e5e5e5;
    border: 2px solid #18181b;
    border-radius: 15px;
  }
  
  .modal__project-info {
    background-color: #e5e5e5;
    border: 2px solid #18181b;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 1.5rem 3rem -0.75rem hsla(0, 0%, 0%, 1);
  }
  
  .modal__technology-list {
    margin: 0 2.5rem 0 2.5rem;
    padding-top: 0.3rem;
  }
  
  .modal__close {
    max-width: 24px;
    position: absolute;
    top: 30px;
    right: 50px;
    transform: translate(50%, -50%);
  }
  
  .modal__close:hover {
    cursor: pointer;
  }
  
  .modal__project-info a {
    color: inherit;
  }
  
  .modal__project-info span {
    font-weight: 600;
    padding-top: 0.3rem;
  }
  
  .modal__project-link-icon {
    margin-left: 0.4rem;
    text-decoration: none;
  }
  
  .modal__container {
    padding: 2rem;
  }
  
  .modal__slider-wrapper {
    position: relative;
    max-width: 48rem;
    margin: 0 auto;
  }
  
  .modal__slider {
    display: flex;
    aspect-ratio: 16 / 9;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    box-shadow: 0 1.5rem 3rem -0.75rem hsla(0, 0%, 0%, 1);
    border-radius: 0.5rem;
    -ms-overflow-style: none; /* Hide scrollbar IE and Edge */
    scrollbar-width: none; /* Hide scrollbar Firefox */
  }
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  .modal__slider::-webkit-scrollbar {
    display: none;
  }
  
  .modal__slider img {
    flex: 1 0 100%;
    scroll-snap-align: start;
    object-fit: cover;
  }
  
  .modal__slider-nav {
    display: flex;
    column-gap: 1rem;
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 21;
  }
  
  .modal__slider-nav a {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #18181b;
    opacity: 0.75;
    transition: opacity ease 250ms;
  }
  
  .modal__slider-nav a:hover {
    opacity: 1;
  }
  </style>