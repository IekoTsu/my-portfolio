<template>
    <div class="error__main-frame">
        <div class="error__sub-frame">
            <img class="notFound" src="../assets/decorations/404.png">
            <div class="error__text">
                <h2>404</h2>
                <h3>page Not Found</h3>
            </div>
        </div>
    </div>
</template>
<style>
    .error__sub-frame{
        padding-top: 10rem;
    }

    .error__text {
        color: rgb(255, 255, 255);  
        -webkit-text-stroke: 1px #ff00003a; 
        border: 1px solid rgb(255, 0, 0);
        border-radius: 5px;
        padding: 5px; 
        background-color:#2b1111 ;
        text-align: center;
        animation: shake 0.3s;
    }
</style>