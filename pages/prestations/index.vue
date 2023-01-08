<template>
    <header>
        <div class="headerTop">
            <h1>Prestations</h1>
            <img src="@/assets/images/deco/chemin-foret.jpg" alt="">
        </div>

        <div class="headerIntro" v-if="content">
            <p class="introText">{{ content.intro }}</p>
        </div>
    </header>

    <main class="prestaBoard" v-if="prestations">
        <div class="background"></div>

        <section class="soins prestaPanel panel" v-for="presta in prestations" :key="presta.id">
            <header class="r">
                <h2 class="prestaTitle">{{ presta.displayName }}</h2>
                <p class="accroche">{{ presta.accroche}}</p>
                <PrestaCard image="_nuxt/assets/images/deco/carte.jpg"/>
            </header>
        </section>
    </main>




    
</template>

<script setup>
import PrestaCard from '@/components/prestations/PrestaCard.vue'

import { usePrestaStore } from '@/stores/prestations';

const prestaStore = usePrestaStore();

const prestations = prestaStore.prestations;









</script>



<style scoped>
header {
    width: 100%;
    
}
.headerTop {
    width: 100%;
    height: 30vh;
    position: relative;
}
.headerTop h1 {
    font-size: 60px;
    font-family: 'IM Fell English SC', serif;
    color: var(--main-contrast);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
}
.headerTop img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.2;
}
.headerIntro {
    padding: 15vh 25vw;
}
.introText {
    font-size: 18px;
    font-family: var(--main-text);
    font-weight: 300;
    letter-spacing: 0px;
    white-space: pre-wrap;
    color: var(--text);
    padding: 20px;
    border-top: 1px solid var(--main-contrast);
    border-bottom: 1px solid var(--main-contrast);
}

.prestaBoard {
    width: var(--mid-width);
    padding: 50px;
    border-radius: 20px;
    overflow: hidden;
    margin: 50px auto;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.prestaBoard .background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("_nuxt/assets/images/deco/motif feuille.jpg");
    opacity: 0.08;
    z-index: -1;
}


.prestaPanel {
    width: 100%;
    background-color: var(--panel);
    border: 1px solid var(--border);
    box-shadow: var(--panel-shadow);
    position: relative;
    z-index: 10;
}

.prestaTitle {
    font-size: 40px;
    font-family: 'IM Fell English SC', serif;
    color: var(--main-contrast);
    text-align: center;
}

.prestaName {
    color: var(--text);
}
</style>