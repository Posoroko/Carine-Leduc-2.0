<template>
    <section class="" v-if="content">
        
        <div class="board">
            <div class="titleBox">
                <TitleBar :title="content.title" :link="linkToAboutPage"/>
                <h2 class="subtitle">{{ content.subtitle }}</h2>
            </div>

            <div class="imageBoard">
                <div class="leftBox frame imageBox">
                    <img class="aboutImg" :src="`https://ku3vu7zb.directus.app/assets/${content.image2}.jpg`" alt="">

                    <NuxtLink class="imageTitle" to="/a-propos"> {{ content.image2Title }} </NuxtLink>
                </div>

                <div class="rightBox imageBox">
                    <div class="rightTopBox frame rightInnerBox">
                        <img class="aboutImg" :src="`https://ku3vu7zb.directus.app/assets/${content.image1}.jpg`" alt="">
                        <NuxtLink class="imageTitle" to="/a-propos"> {{ content.image1Title }} </NuxtLink>
                    </div>

                    <div class="rightBottomBox frame rightInnerBox">
                        <img class="aboutImg" :src="`https://ku3vu7zb.directus.app/assets/${content.image3}.jpg`" alt="">
                        <NuxtLink class="imageTitle" to="/a-propos"> {{ content.image3Title }} </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="linkBoard">

                <div class="linkCard">
                    <NuxtLink class="link" to="/a-propos">
                        <h4 class="aboutCardTitle"> {{ content.image1Title }} </h4>
                        <p class="cardText"> {{ content.image1Text }} </p>
                    </NuxtLink>
                </div>
                
                <div class="linkCard">
                    <NuxtLink class="link" to="/a-propos">
                        <h4 class="aboutCardTitle"> {{ content.image2Title }} </h4>
                        <p class="cardText"> {{ content.image2Text }} </p>
                    </NuxtLink> 
                </div>
                
                <div class="linkCard">
                    <NuxtLink class="link" to="/a-propos">
                        <h4 class="aboutCardTitle"> {{ content.image3Title }} </h4>
                        <p class="cardText"> {{ content.image3Text }} </p>
                    </NuxtLink>
                </div>
            
            </div>

        </div>
    </section>
</template>

<script setup>
import TitleBar from '@/components/homepage/TitleBar'

const linkToAboutPage = ref('/a-propos')

const { getItems } = useDirectusItems();

let content = ref(null);

getItems({ collection: "HomepageAbout" })
    .then(res => {
        content.value = res
    })
    .catch(err => {
        console.log(err.message)
    })


</script>

<style scoped>
section {
    display:flex;
}
.board {
    background-color: var(--second-bg);
    padding: 5vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.subtitle {
    color: var(--text);
    font-family: 'Work sans';
    font-size: 20px;
    font-weight: 100;
    text-align: center;
}

.imageBoard {
    display: flex;
    /* flex-wrap: wrap; */
    gap: 20px;
}

.frame {
    position: relative;
    cursor: pointer;
    display: grid;
    place-items: center;
    overflow: hidden;
}

.imageTitle {
    color: rgb(255, 249, 223);
    font-size: max(20px, 3vw);
    font-weight: 200;
    font-family: 'Work Sans', sans-serif;
    position: absolute;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 50%);
    transition: 400ms all cubic-bezier(0,.99,.39,.97);
}

.frame:hover .imageTitle {
    color: rgb(255, 249, 223);
    font-size: 40px;
    position: absolute;
    left: 20px;
    bottom: 20px;
    transform: translate(0%, 0%);
    transition: 400ms all cubic-bezier(0,.99,.39,.97);
}

.aboutImg {
    filter: brightness(0.5);
    transition: 400ms all cubic-bezier(0,.99,.39,.97);
}
.frame:hover .aboutImg {
    filter: brightness(1);
    width: 110%;
    height: 110%;
}

.rightBox {
    display:flex;
    flex-direction: column;
    gap: 20px;
}

.aboutImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 499px) {
    .imageBox, .rightInnerBox {
        width: 100%;
        aspect-ratio: 1/1;
    }
    .linkBoard {
        width: 100%;
    }

    .linkCard {
        width: 100%;
    }
}
@media (min-width: 500px) {
    .rightInnerBox {
        width: 100%;
    }

    .rightTopBox {
        height: calc(60% - 10px);
    }

    .rightBottomBox {
        height: calc(40% - 10px);
    }
}
@media (min-width: 500px) and (max-width: 999px) {
    .imageBox {
        width: 40vw;
        aspect-ratio: 4/5.5;
    }
    .linkBoard {
        width: calc(80vw + 20px);
    }

    .linkCard {
        width: 30%;
    }
}

@media (min-width: 1000px) and (max-width: 1499px) {
    .imageBox {
        width: 40vw;
        aspect-ratio: 4/5.5;
    }
    .linkBoard {
        width: calc(80vw + 20px);
    }

    .linkCard {
        width: 30%;
    }
}

@media (min-width: 1500px) {
    .imageBox {
        width: 40vh;
        aspect-ratio: 4/5.5;
    }

    .linkBoard {
        width: calc(80vh + 20px);
    }

    .linkCard {
        width: 30%;
    }
}

.linkBoard {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
    position: relative;
}

.linkCard {
    font-family: 'Work Sans', sans-serif;
    color: var(--text);
    background-color: var(--main-bg);
    border: 1px solid var(--border);
    border-radius: 10px;
    border-bottom-left-radius: 60px;
    box-shadow: var(--card-shadow);
    margin: 0 20px 0 0;
    z-index: 1;
    display: inline-block;
    transition: 300ms border ease;
}
@media (max-width: 849px) {
    .linkCard {
        width: 100%;
    }
}
@media (min-width: 850px) {
    .linkCard {
        width: 200px;
    }
}
.linkCard:hover {
    border: 1px solid var(--main-contrast);
    transition: 300ms border ease;
}


.linkCard .link {
    padding: 25px;
    padding-bottom: 40px;
    display: block;
}


.aboutCardTitle {
    font-size: 22px;
    font-weight: 400;
}

.cardText {
    font-size: 18px;
    font-weight: 200;
    margin-top: 20px;
    overflow: hidden;
}







</style>