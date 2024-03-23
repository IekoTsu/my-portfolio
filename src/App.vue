<template>
  <header class="header">
    <nav class="header__nav">
      <div class="header__nav-logo">
        <a href="#">
          <img src="./assets/icons/logo.png" alt="Logo">
        </a>
      </div>
      <span class="header__nav-blur"></span>
      <span class="header__nav-blur"></span>
      <ul class="header__nav-links">
        <li class="header__nav-link"><router-link to="/">Home</router-link></li>
        <li class="header__nav-link"><a @click="menuFocusUpdate" href="#presentation">Présentation</a></li>
        <li class="header__nav-link"><a @click="menuFocusUpdate" href="#achievements">Réalisations</a></li>
        <li class="header__nav-link"><a @click="menuFocusUpdate" href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" class="header__btn">Hire Me</a>
    </nav>
  </header>

  <div class="page-content">
    <router-view></router-view>
  </div>

  <footer class="footer">
    <div class="footer__professional-media">
      <a href="https://www.linkedin.com/in/milouah-mohammed/" target="_blank"><img class="footer__media-icon" alt="Icône Linkedin" src="./assets/icons/linkedin.png"></a>
      <a href="https://github.com/IekoTsu" target="_blank"><img class="footer__media-icon" alt="Icône GitHub" src="./assets/icons/GitHub.png"></a>
    </div>
    <p class="footer__update">Dernière mise à jour le <time class="footer__update-time" datetime="2024-02-27">21 mars 2024</time></p>
  </footer>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {
    menuFocusUpdate() {
      setTimeout(() => {
        console.log("hi");
        const hash = window.location.hash;
        const navLinks = document.querySelectorAll('.header__nav-links .header__nav-link a');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if ((hash && href === hash)) {
            link.parentNode.classList.add('header__nav-link--active');
          } else {
            link.parentNode.classList.remove('header__nav-link--active');
          }
        });
      }, 1);
    }
  },
  mounted() {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
* {
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  box-sizing: border-box;
}
.page-content {
  flex: 1;
  padding-bottom: 250px;
}
img {
  width: 100%;
  display: flex;
}
a {
  text-decoration: none;
}
body {
  font-family: 'Poppins', sans-serif;
  background-color: #18181b;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #18181b;
  z-index: 10;
  border-bottom: 1px solid #ffffff46;
}
.header__nav {
  max-width: 1200px;
  max-height: 170px;
  margin: auto;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
.header__nav-logo {
  max-width: 200px;
}
.header__nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3rem;
}
.header__nav-link a {
  position: relative;
  padding-bottom: 0.75rem;
  color: #ffffff;
}
.header__nav-link a::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 0;
  bottom: 0;
  left: 0;
  background-color: #751cc9;
  transition: all 0.3s ease;
}
.header__nav-link a:hover {
  cursor: pointer;
}
.header__nav-link a:hover::after {
  width: 95%;
}
.header__nav-link--active a::after {
  width: 95%;
}
.header__nav-links a.router-link-exact-active::after {
  width: 100%;
}
.header__btn {
  padding: 1rem 2rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #751cc9;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.header__btn:hover {
  background-color: rgb(90, 0, 173);
}

.header__nav-blur{
  position: fixed;
  box-shadow: 0 0 1000px 50px #751cc9 ;
  z-index: -100;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #18181b;
  position: absolute;
  gap: 10px;
  margin-top: auto;
  width: 100%;
  height: 7%;
  bottom: 0;
}
.footer__update {
  color: #ffffff;
}
.footer__professional-media {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 20px;
}
.footer__media-icon {
  width: 60px;
  height: auto;
  transition: all 0.3s ease;
}
.footer__media-icon:hover {
  opacity: 70%;
  width: 64px;
  height: auto;
}
</style>
