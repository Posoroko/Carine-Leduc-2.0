<template>
    <section class="">

        <TitleBar title="Agenda"/>
        
        <ArtNouveauStripe />


            <div class="mainWidthFrame">
                <div class="scroller">
                    <div class="movingFrame" ref="movingFrame">
                        <figure class="dateCard" v-for="(date, index) in dates" :key="index" >
                            <div class="cardContent">
                                <p class="date">{{ date.date }}</p>
                                <p class="title">{{ date.title }}</p>

                                <p class="description">
                                    <span>{{ date.description }}</span>
                                    <div class="lastLineHider">

                                    </div>
                                </p>
                                <button class="readMore"><NuxtLink>lire...</NuxtLink></button>
                            </div>

                            
                        </figure>

                        </div>
                        <span  class="icon arrow arrowLeft" @click="scrollClick" data-scroll="left">arrow_back_ios</span>

                        <span v-if="currentScrollPosition < 0" class="icon arrow arrowRight" @click="scrollClick" data-scroll="right">arrow_forward_ios</span>
                </div>
            </div>

    
    
    </section>

</template>

<script setup>
import ArtNouveauStripe from '@/components/deco/ArtNouveauStripe.vue'
import TitleBar from '@/components/homepage/TitleBar.vue'

const movingFrame = ref(null)

const currentScrollPosition = ref(0);

const scrollClick = (e) => {
    const way = e.target.getAttribute('data-scroll')
    let newScrollPosition = 0;

    let scrollValue = 0;
    switch(way) {
        case'left':
            newScrollPosition = currentScrollPosition.value - 200
            break
        case'right':
            if(currentScrollPosition.value < 0) {
                newScrollPosition = currentScrollPosition.value + 200
            }
    }

    

    movingFrame.value.animate([
    // keyframes
    { transform: `translateX(${currentScrollPosition.value}px)` },
    { transform: `translateX(${newScrollPosition}px)` }
    ], {
    // timing options
    duration: 300,
    iterations: 1,
    fill: "forwards",
    easing: "ease"
});

currentScrollPosition.value = newScrollPosition

console.log(currentScrollPosition.value < 0)
}





//fetch data
const { getItems } = useDirectusItems();
const dates = ref(null);
getItems({ collection: "Agenda" })
    .then(res => {
        dates.value = res
        dates.value.forEach(date => {
            date.date = dateToDayMontformat(date.date) //composable/dataManipulation
        })
    }).catch(err => {
        console.log(err.message)
    })


</script>

<style scoped>
section {
    color: var(--text);
    margin: 100px 0;
    position: relative;
    overflow: hidden;
}

.mainWidthFrame {
    width: var(--main-width);
    margin: auto;
    position: relative;
}

.movingFrame {
    position: relative;
    white-space: nowrap
}
.dateCard {
    font-family: 'Work Sans';
    width: 200px;
    background-color: var(--second-bg);
    padding: 20px;
    border-bottom-left-radius: 60px;
    box-shadow: var(--card-shadow);
    margin: 50px 20px;
    z-index: 1;
    display: inline-block;
}
.cardContent {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    white-space: pre-wrap;
}
.date {
    font-size: 30px;
}
.title {
    font-size: 18px;
    font-weight: 700;
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

.arrow {
    font-size: 60px;
    margin: 0 20px;
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    user-select: none;
    opacity: 0;
    transition: opacity 300ms ease;
}

.scroller:hover .arrow {
    opacity: 1;
    transition: opacity 300ms ease;
}



.arrowLeft {
    left: 0;
}
.arrowRight {
    right: 0;
}

.readMore {

    margin: 30px 20px 20px 20px;
    cursor: pointer;
    display: inline-block;
}
</style>