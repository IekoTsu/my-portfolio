<template>
    <div @click.self="closeModal" class="backdrop">
        <figure class="modal">
            <img @click="closeModal" class="close" src="../assets/icons/close.png">
            <h1> {{ project.title }} </h1>
            <section class="container">
                <div class="slider-wrapper">
                    <div class="slider">
                        <img v-for="(imgSrc, index) in project.imgSrc" :id="'slide-' + index " :src="imgSrc" />
                    </div>
                    <div class="slider-nav">
			            <a v-for=" (img, index) in project.imgSrc" :href="'#slide-' + index "></a>
		            </div>
                </div>
            </section>
            <div class="project-info">
                <h2>Date de création : <time> {{ project.date }}</time></h2>
                
                <h3> Les technologies utilisées :</h3> 
                <ul>
                    <li v-for="technologie in project.technologies" :key="technologie"> {{ technologie }}</li>
                </ul>
                <span>
                    Lien vers le projet: 
                    <a :href="project.link" target="_blank"><i class="ri-link"></i></a>
                </span>
            </div>
        </figure>
    </div>


</template>

<script>

export default{
    props: ['project'],
    methods: {
        closeModal(){
            this.$emit('close')
            
        }
    }
    
}

</script>


<style>
    .backdrop{
        z-index: 20;
        top:0;
        left: 0;
        position: fixed;
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal{
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

    .modal h1 {
        max-width: 400px;
        padding-left: 1rem;
        background: #e5e5e5;
        border: 2px solid #18181b;
        border-radius: 15px;
    }

    .modal .project-info{
        background-color: #e5e5e5;
        border: 2px solid #18181b;
        border-radius: 15px;
        padding: 2rem;
        box-shadow: 0 1.5rem 3rem -0.75rem hsla(0, 0%, 0%, 1);
    }


    .modal .project-info ul {
        margin: 0 2.5rem 0 2.5rem;
        padding-top: 0.3rem;
    }

    .modal .close {
        max-width: 24px;
        position: absolute;
        top: 30px;
        right: 50px;
        transform: translate(50%, -50%);
        
    }

    .modal .close:hover {
        cursor: pointer;
    }

    .modal .project-info a{
        color: inherit;
    }

    .modal .project-info span{
        font-weight: 600;
        padding-top: 0.3rem;
    }

    .ri-link{
        margin-left: 0.4rem;
        text-decoration: none;
    }

   .modal .container {
	padding: 2rem;
    }

    .slider-wrapper {
        position: relative;
        max-width: 48rem;
        margin: 0 auto;
    }

    .slider {
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
    .slider::-webkit-scrollbar {
        display: none;
    }

    .slider img {
        flex: 1 0 100%;
        scroll-snap-align: start;
        object-fit: cover;
    }

    .slider-nav {
        display: flex;
        column-gap: 1rem;
        position: absolute;
        bottom: 1.25rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 21;
    }

    .slider-nav a {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: #18181b;
        opacity: 0.75;
        transition: opacity ease 250ms;
    }

    .slider-nav a:hover {
        opacity: 1;
    }
</style>