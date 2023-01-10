<template>
    <section class="agendaStripe">

        <div class="box1 absolute top right bottom left">
            <!-- <ArtNouveauStripe /> -->
        </div>
        
        <div class="box2">
            <TitleBar title="Agenda" link="/agenda"/>
        </div>
        
        <div class="mainWidthFrame">
            <div class="scroller">
                <div class="movingFrame" ref="movingFrame">
                    <figure class="dateCard" v-for="(date, index) in agendaStore.allDates" :key="index" >
                        <div class="cardContent">
                            <p class="date">{{ date.date }}</p>
                            
                            <p class="title">{{ date.title }}</p>

                            <div class="description">
                                <span>{{ date.description }}</span>
                                
                                <div class="lastLineHider"></div>
                            </div>

                            <button class="readMore marginTop50"><NuxtLink>plus...</NuxtLink></button>
                        </div>
                    </figure>

                </div>

                <div class="arrowBox">
                    <span  class="icon arrow arrowLeft" @click="handleArrowClicks" data-direction="left">arrow_back_ios</span>

                    <span class="icon arrow arrowRight" :class="{fadedArrow: currentScrollPosition >= 0}" @click="handleArrowClicks" data-direction="right">arrow_forward_ios</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useAgendaStore } from '@/stores/agenda';
import TitleBar from '@/components/homepage/TitleBar.vue'

const agendaStore = useAgendaStore();

//DOM element
const movingFrame = ref(null)
// <=

const currentScrollPosition = ref(0);

const handleArrowClicks = (e) => {
    const way = e.target.getAttribute('data-direction')

    agendaScroll(way)

}

let scrollLength = 220


const agendaScroll = (scrollDirection) => {

    let newScrollPosition = 0;

    switch(scrollDirection) {
        case'left':
            newScrollPosition = currentScrollPosition.value - scrollLength
            break
        case'right':
            if(currentScrollPosition.value < 0) {
                newScrollPosition = currentScrollPosition.value + scrollLength
            }
    }

    movingFrame.value.animate([
        { transform: `translateX(${currentScrollPosition.value}px)` },
        { transform: `translateX(${newScrollPosition}px)` }
    ], {
        duration: 300,
        iterations: 1,
        fill: "forwards",
        easing: "ease"
    });

    //update scroll position
    currentScrollPosition.value = newScrollPosition
    // <=
}



</script>

<style scoped>
.agendaStripe {
    color: var(--text);
    padding: 50px 0 40px 0 ;
    position: relative;
    overflow: hidden;
}
.box1 {
    z-index: -1;
    background-image: url('@/assets/images/deco/patern-feuille02.jpg');
    opacity: 0.05;
}
.box2 {
    z-index: 5;
}
.mainWidthFrame {
    width: var(--main-width);
    margin: auto;
    position: relative;

}

.movingFrame {
    position: relative;
    white-space: nowrap;
    padding-left: 20px
}
.dateCard {
    font-family: 'Work Sans';
    width: 200px;
    background-color: var(--second-bg);
    padding: 20px;
    border-bottom-left-radius: 60px;
    box-shadow: var(--card-shadow);
    margin: 0 20px 0 0;
    z-index: 1;
    display: inline-block;
}
.cardContent {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: pre-wrap;
}
.date {
    font-size: 30px;
}
.title {
    font-size: 18px;
    font-weight: 300;
    color: var(--gold-text);
    margin-top: 30px;
}
.description {
    height: 100px;
    font-size: 16px;
    margin-top: 60px;
    line-height: 20px;
    overflow: hidden;
    position: relative;
}
.lastLineHider {
    width: 100%;
    height: 20px;
    background-color: transparent;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(87deg, rgba(0, 0, 0, 0) 0%, var(--second-bg) 100%); 
}
.arrowBox {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 50px;
}
.arrow {
    font-size: 60px;
    margin: 0 20px;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    opacity: 1;
    transition: opacity 300ms ease;
}
.fadedArrow {
    opacity: 0.1;
    transition: opacity 300ms ease;
    cursor: auto;
}

.readMore {
    width: 100%;
    font-family: 'Work Sans';
    font-size: 20px;
    font-weight: 200;
    color: var(--text);
    background-color: var(--second-bg);
    border: none;
    text-align: end;
    cursor: pointer;
}

</style>