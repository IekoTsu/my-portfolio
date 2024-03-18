<template>
  <header>
    <nav>
      <div class="nav-logo">
          <a href="#">
            <img src="./assets/icons/logo.png"></img>
          </a>
        </div>
        <span class="blur"></span>
        <span class="blur"></span>

        <ul class = "nav-links">
          <li class="link"><a herf="3">Home</a></li>
          <li class="link"><a herf="3">Features</a></li>
          <li class="link"><a herf="3">Pricing</a></li>
          <li class="link"><a herf="3">About</a></li>
        </ul>

        <button class="btn">Hire Me</button>

    </nav>
  </header>
  <main class="container">
    <div class="content">
      <h1>CRÉE VOTRE SITE WEB COMME UN PROFESSIONNEL</h1>
      <h2>Bonjour, je suis <span>Milouah Mohammed</span>, un développeur web junior</h2>
      <p>
        Dynamique et flexible, je suis animé par la volonté de mettre en pratique mes compétences au sein de votre équipe tout
         en enrichissant mon expérience dans le domaine du développement web et mobile. Structuré, ponctuel et toujours prêt
          à relever de nouveaux défis, je possède une maîtrise trilingue (français, anglais, arabe) et je suis déterminé
           à apporter une contribution significative en tant que stagiaire développeur. Mon objectif est 
           d'apprendre et de participer à la réussite de vos projet.
      </p>
      <button class="btn">Commencer</button>
    </div>
    <div class="image">
      <img src="./assets/icons/header.png">
    </div>
  </main>

  <section @mouseenter="mouseInProject" @mouseleave="mouseOutOfProject" class="container">
    <h3 class="header">MES RÉALISATIONS</h3>
    <div class="achievements">
      <div class="card">
        <span> <img class="icon" src="./assets/icons/cv.png" alt=""></span>
        <h4>Mon CV En HTML Et CSS</h4>
        <img v-show="projectFocused" class="sample" src="./assets/icons/my_cv.png">
        <p class="details"> Plus de details <i class="ri-arrow-right-line"></i></p> 
      </div>

      <div class="card">
        <span> <img class="icon" src="./assets/icons/write.png" alt=""></span>
        <h4>Cahier des charges</h4>
        <img v-show="projectFocused" class="sample" src="./assets/icons/Icon_La socketterie.png">
        <p class="details"> Plus de details <i class="ri-arrow-right-line"></i></p> 
      </div>

      <div class="card">
        <span> <img class="icon" src="./assets/icons/icons-comment-100.png" alt=""></span>
        <h4>Commentaires Dynamique</h4>
        <img v-show="projectFocused" class="sample" src="./assets/icons/commentaire_dynamique.png">
        <p class="details"> Plus de details <i class="ri-arrow-right-line"></i></p> 
      </div>
    </div>
  </section>

  <section class="form">
    <h5>Contact Me</h5>
    <form action="https://formspree.io/f/xqkrdkwe" method="POST">
      <p v-show="error" class="error" ref="errorMessage">Tout les champ sont obligatoire</p>
      <input type ="text" placeholder = "Firstname" ref="firstName" required>
      <input type ="text" placeholder = "Lastname" ref="lastName" required>
      <input name="email" type ="email" placeholder = "Email" ref="email" required>
      <textarea name="message" placeholder="Message" ref="message" required></textarea>
      <button @click="checkfields" class="btn" type="submit">submit</button>
    </form>
  </section>

<!-- ------------------------------------------------------ -->



<footer>
            <div class="professional-media">
                <a href="https://www.linkedin.com/in/milouah-mohammed/" target="_blank"><img class="media-icon" alt="Icône Linkedin" src="./assets/icons/linkedin.png"></a>
                <a href="https://github.com/IekoTsu" target="_blank"><img class="media-icon" alt="Icône GitHub" src="./assets/icons/GitHub.png"></a>
            </div>
            <p>Dernière mise à jour le <time datetime="2024-02-27">27 février 2024</time></p>
</footer>
  <router-view/>
</template>

<script>
  export default{
    data() {
      return {
        error: false,
        projectFocused: false
      }
    },
    methods: {

      checkfields(){
        if ( this.$refs.firstName.value.trim().length === 0 || this.$refs.lastName.value.trim().length === 0 || this.$refs.email.value.trim().length === 0 || this.$refs.message.value.trim().length === 0 ) {
          this.error = true

          /* ------------------error animation------------------ */
          this.$refs.errorMessage.classList.add("shake")
          
          setTimeout(() => {
            this.$refs.errorMessage.classList.remove('shake');
          }, 1300);

        } else {
          this.error = false
        }
      },

        mouseInProject(){
          const cards = document.querySelectorAll('.card');
          const details = document.querySelectorAll(".details")
          const samples = document.querySelectorAll(".sample")

          setTimeout(() => {
            this.projectFocused = true
          }, 100);

          
          cards.forEach((card) => {
            card.classList.add('scrollDown');
          });
          details.forEach((detail) => {
            detail.classList.add("detailsFadeIn");
          });
          samples.forEach((sample) => {
            sample.classList.add("fadeDown");
          });

          setTimeout(() => {
            details.forEach((detail) => {
            detail.classList.remove("detailsFadeIn");
            });
            cards.forEach((card) => {
            card.classList.remove('scrollDown');
            });
            samples.forEach((sample) => {
            sample.classList.remove("fadeDown");
          });
          }, 300);

          console.log(this.$refs.details);
      },

      mouseOutOfProject(){
          const cards = document.querySelectorAll('.card');
          const details = document.querySelectorAll(".details")
          const samples = document.querySelectorAll(".sample")

          cards.forEach((card) => {
            card.classList.add('scrollUp');
          });

          details.forEach((detail) => {
            detail.classList.add("detailsFadeOut");
          });

          samples.forEach((sample) => {
            sample.classList.add("removing");
          });

          setTimeout(() => {
            this.projectFocused = false
            cards.forEach((card) => {
            card.classList.remove('scrollUp');
            });

            details.forEach((detail) => {
            detail.classList.remove("detailsFadeOut");
            });

            samples.forEach((sample) => {
            sample.classList.remove("removing");
            });
          }, 300);
      } 
    }
  }
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
*{
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  box-sizing: border-box;

}
img {
  width: 100%;
  display: flex;
}
a{
  text-decoration: none;
}

body{
  font-family: 'Poppins', sans-serif;
  background-color: #18181b;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #18181b;
  z-index: 1000; 
  border-bottom: 1px solid #ffffff46;
}

nav {
  max-width: 1200px;
  max-height: 170px;
  margin: auto;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
.nav-logo{
  max-width: 200px;
}
.nav-links{
  list-style: none;
  display:flex ;
  align-items: center;
  gap:3rem ;  
}

.link a {
  position: relative;
  padding-bottom: 0.75rem;
  color:#ffffff ;
}
.link a::after{
  content: "";
  position: absolute;
  height: 2px;
  width: 0;
  bottom: 0;
  left:0;
  background-color: #751cc9;
  transition: all 0.3s ease;
}

.link a:hover::after {
  width: 95%;

}

.btn {
  padding: 1rem 2rem ;
  font-size: 1rem ;
  color: #ffffff;
  background-color: #751cc9;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover{
  background-color: rgb(90, 0, 173);
}

footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #18181b;
    gap: 10px;
    margin-top: auto;
    width: 100%;
    height: 7%;
}

footer >p {
  color: #ffffff;
}

.professional-media{
    display: flex;
    justify-content: center;
    margin-top: 10px;
    gap:20px ;
}

.media-icon{
    width: 60px;
    height: auto;
    transition: all 0.3s ease;
}

.media-icon:hover{
  opacity: 70%;
  width: 64px;
  height: auto;
}

.container{
  max-width: 1200px;
  margin:auto ;
  padding: 5rem 2rem;
  padding-top: 250px;
  
}

.blur{
  position: fixed;
  box-shadow: 0 0 1000px 50px #751cc9 ;
  z-index: -100;
}

main{
  position: relative;
  padding-top: 2rem;
  display:grid ;
  grid-template-columns: repeat(2,1fr);
  align-items: center ;
  gap: 2rem;
}

main .content h1 {
  margin-bottom: 1rem;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
}

main .content h2{
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: 700;
  line-height: 4rem;
}

main .content h2 span{
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #ffffff;
}

main .content p{
  margin-bottom: 2rem;
  color: #ffffff;

}

main .image{
  position: relative;
} 

main .image::before{
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

  main.image img{
    max-width: 600px;
    margin: auto; 
  }

.card .icon {
  max-width: 24px;
  height: auto;
}


.sample {
  max-width: 400px;
  max-height: 200px;
  margin-bottom: 0.5rem;
  height: auto;
  overflow: hidden;
  display: block;
  border-radius: 10px;
  object-fit: cover;
}
.fadeDown{
  animation: fade-down 0.3s ;
}
.removing{
  animation: fade-up 0.3s;
}
@keyframes fade-up{
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  10%{
    opacity: 1;
  }
  30%{
    opacity: 0.1;
  }
  100%{
    opacity: 0;
    transform: translateY(-30px) scale(0.9);
  }
}

@keyframes fade-down {
  0% {
    opacity: 0;
    transform: translateY(-30px) scale(0.9);
  }

  10%{
    opacity: 0;
  }
  30%{
    opacity: 0.1;
  }
  100%{
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
}



section .header{
    margin-bottom: 1rem;
    color: #fff;
    text-align: center;
    font-size: 2.25rem;
    font-weight: 600;
}

.achievements{
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}
.scrollDown {
  animation: scroll-down 0.1s ;
}
.scrollUp{
  animation: scroll-up 0.3s;
}
@keyframes scroll-up{
  0%{
    height: 19.416rem;
  }

  100%{
    height: 11.125rem;
  }
}

@keyframes scroll-down {
  0%{
    height: 10.688rem;
  }

  100%{
    height: 23.345rem;
  }
}

.achievements .card {
    background-color: #27272a;
    padding: 1rem;
    border: 2px solid transparent;
    border-radius: 15px;
}

.achievements .card:hover{
    background-color: #323232;
    border-color: #fff;
    box-shadow: 20px 40px 70px 25px #751cc979;
}

.achievements .card span{
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

.achievements .card h4{
    margin-bottom: 0.5rem;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
}

.achievements .card p{
    cursor: pointer;
    color: #fff;
    transition: all 0.3s ease;
}
.detailsFadeIn{
  animation: fade-in 0.3s;
}
.detailsFadeOut{
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
@keyframes fade-in{
  
}

.form{
  max-width: 600px;
  margin: auto;
  padding: 1.6rem ;
  width: 50%;
  background-color: #323232;
  border-radius: 15px;
}

.form h5{
  margin-bottom: 0.7rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
}

form{
  margin: auto;
  max-width: 550px;
  display: grid;
  grid-template-rows: (5,1fr);
  gap: 2rem;
}

form input, textarea{
  width: 100%;
  height: 100%;
  padding: 0.5rem 0 0.5rem 0.4rem;
  background-color:#18181b ;
  border-radius: 15px;
  color: #fff;
  font-size: 1.2rem;
  resize: vertical;
}
.error{
  color: rgb(255, 255, 255);  
  -webkit-text-stroke: 1px #ff00003a; 
  border: 1px solid rgb(255, 0, 0);
  border-radius: 5px;
  padding: 5px; 
  background-color:#2b1111 ;
  text-align: center;
}

@keyframes shake{
  0% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(10px);
  }
  100%{
    transform: translateX(-10px);
  }
}

.shake{
  animation: shake .13s 3;
}

</style>
