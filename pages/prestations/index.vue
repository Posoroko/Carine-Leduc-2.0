<template>
    <header>
        <div class="headerTop">
            <h1>Prestations</h1>
            <img src="@/assets/images/deco/chemin-foret.jpg" alt="">
        </div>
        
    </header>

    <main class="prestaBoard">
        <div class="background"></div>

        <article class="prestaPanel panel" v-for="presta in prestaStore.prestations" :key="presta.id">
            <div class="prestaSectionHeader">
                <figure class="prestaCardFrame prestaCardFrameLeft">
                    <img src="images/deco/carte.jpg" alt="">
                </figure>

                <div class="prestaTitleBox prestaTitleBoxLeft">
                    <h1>{{ presta.displayName }}</h1>
                    <h3>{{  presta.accroche }}</h3>
                    
                </div>                
            </div>

            <ul class="prestaList">
                <li class="prestaItem" v-for="(item, index) in presta.items" :key="item.id">
                    <div class="line">0{{ index + 1 }}</div>
                    <div class="itemBox">
                        <h3 class="itemTitle">{{ item.name }}</h3>
                        <p class="accroche">{{ item.accroche }}</p>
                        <a :href="item.link">découvrir...</a>
                    </div>
                </li>
            </ul>

        </article>
        
    </main>




    
</template>

<script setup>

import { usePrestaStore } from '@/stores/prestations';

const prestaStore = usePrestaStore()

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
    border-radius: 20px;
    padding: clamp(5px, 2vw, 30px);
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: hidden;
    position: relative;
}

.prestaBoard .background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("public/images/deco/motif feuille.jpg");
    opacity: 0.08;
    z-index: -1;
}
.prestaPanel {
    width: 100%;
    background-color: var(--panel);
    padding: clamp(5px, 2vw, 30px);
    border: 1px solid var(--border);
    box-shadow: var(--panel-shadow);
    display: block;
    position: relative;
    z-index: 10;
}

.prestaSectionHeader {
    padding: 30px 20px;
    position: relative;
}

.prestaSectionHeader .prestaTitleBox {
    padding: 30px 20px;
    border-radius: 10px;
    background-color: var(--transparent-card);
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
}
.prestaSectionHeader .prestaTitleBox h1 {
    font-size: var(--item-title-size);
    font-family: var(--english);
    color: var(--gold-text);
}
.prestaSectionHeader .prestaTitleBox h3 {
    font-size: var(--item-subtitle-size);
    font-family: var(--main-text);
    font-weight: 300;
    color: var(--text);
}
.prestaList{
    padding: clamp(5px, 2vw, 30px);
}
.prestaList .prestaItem {
    font-family: var(--main-text);
}
.prestaList .prestaItem .line {
    font-weight: 200;
    color: var(--text);
    border-bottom: 1px solid var(--panel-border);
}

.prestaList .prestaItem .itemBox {
    padding: clamp(5px, 2vw, 30px);
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.prestaList .prestaItem .itemBox .itemTitle {
    color: var(--text);
    font-weight: 300;
    width: min(100%, 200px);
}
.prestaList .prestaItem .itemBox .accroche {
    color: var(--text);
    font-size: var(--main-text-size);
    font-weight: 200;
    width: min(100%, 360px);
}
.prestaList .prestaItem .itemBox a {
    color: var(--gold-text);
    font-weight: 200;
    width: min(100%, 100px);
    display: grid;
    place-items: center;
}




</style>