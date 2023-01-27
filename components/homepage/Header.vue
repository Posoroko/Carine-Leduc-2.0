<template>
    <header>
        <img src="/images/headers/accueil.jpg" alt="">

        <div class="titleBox">
            <h1 class="">Carine Leduc</h1>

            <h2 class="">Thérapeute énergéticienne</h2>
        </div>
    </header>
</template>

<script setup>

</script>

<style scoped>
header {
    width: 100%;
    height: 80vh;
    background-color: rgb(50, 50, 50);
    position: relative;
    overflow: hidden;
}
header img {
    height: 100%;
    object-fit: cover;
    animation-name: headerImage;
    animation-duration: 5000ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}
@keyframes headerImage {
    from {
        opacity: 0.8;
        width: 100%;
    }

    to {
        opacity: 1;
        width: 110%;
    }
}


.titleBox h1 {
    font-family: var(--tangerine);
    font-weight: 700;
    line-height: 80px;
    color: rgb(202, 151, 40);
}

.titleBox {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-shadow: 0px 0px 10px black;
}

.titleBox h2 {
    font-family: var(--main-text-font);
    font-size: clamp(18px, 1.5vw, 24px);
    font-weight: 200;
    color: white;
}
@media (max-width: 399px) {

    header img {
        object-position: -200px;
    }
    .titleBox {
        
        left: 0%;
        
        right: 2%;
        bottom: 2%;

        justify-content: flex-end;

    }

    .titleBox h1 {
        font-size: 60px;
        
    }

}
@media (min-width: 400px) and (max-width: 499px) {

    header img {
        object-position: -100px;
    }
    .titleBox {
        
        left: 0%;
        
        right: 2%;
        bottom: 2%;

        justify-content: flex-end;

    }

    .titleBox h1 {
        font-size: 80px;
        text-shadow: 0px 0px 10px black;
    }

}
@media (min-width: 500px) and (max-width: 749px) {

    header img {
        object-position: -50px;
    }

    .titleBox {
        
        left: 0%;
        
        right: 5%;
        bottom: 2%;

        justify-content: flex-end;

    }

    .titleBox h1 {
        font-size: 80px;
        text-shadow: 0px 0px 10px black;
    }

}

@media (min-width: 750px) and (max-width: 999px) {

    header img {
        object-position: -30px;
        opacity: 0.3;
    }
    .titleBox {
        
        left: 50%;
        
        right: 5%;
        bottom: 5%;


        justify-content: flex-end;

    }

    .titleBox h1 {
        font-size: clamp(60px, 8vw, 80px);
    }
}
@media (min-width: 999px) {

    header img {
        object-position: 0px;
        opacity: 0.3;
    }

    .titleBox {
        
        left: 50%;
        
        right: 7vw;
        bottom: 0;


        justify-content: center;

    }

    .titleBox h1 {
        font-size: clamp(80px, 7vw, 120px);
    }
}
</style>