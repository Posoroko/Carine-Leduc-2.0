<template>
    <section class="">
        
        <div class="board">
            <div class="titleBox">
                <TitleBar :title="content.data.title" :link="linkToAboutPage"/>
                <h2 class="subtitle">{{ content.data.subtitle }}</h2>
            </div>

            <div class="imageBoard">
                <div class="leftBox frame imageBox">
                    <img class="aboutImg" :src="`/images/about-section/mes-techniques.jpg`" alt="">

                    <NuxtLink class="imageTitle" to="/a-propos"> {{ content.data.image2Title }} </NuxtLink>
                </div>

                <div class="rightBox imageBox">
                    <div class="rightTopBox frame rightInnerBox">
                        <img class="aboutImg" :src="`/images/about-section/me-connaitre.jpg`" alt="">
                        <NuxtLink class="imageTitle" to="/a-propos"> {{ content.data.image1Title }} </NuxtLink>
                    </div>

                    <div class="rightBottomBox frame rightInnerBox">
                        <img class="aboutImg" :src="`/images/about-section/cabinet.jpg`" alt="">
                        <NuxtLink class="imageTitle" to="/a-propos"> {{ content.data.image3Title }} </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="linkBoard">

                <div class="linkCard reactiveCardBasicStyles_userActions reactiveCard_userActions">
                    <NuxtLink class="link" to="/a-propos">
                        <h4 class="aboutCardTitle"> {{ content.data.image1Title }} </h4>
                        <p class="cardText"> {{ content.data.image1Text }} </p>

                        <div class="arrowBox">
                            <span class="icon arrow">arrow_forward
                            </span>
                        </div>
                    </NuxtLink>
                </div>
                
                <div class="linkCard reactiveCardBasicStyles_userActions reactiveCard_userActions">
                    <NuxtLink class="link" to="/a-propos">
                        <h4 class="aboutCardTitle"> {{ content.data.image2Title }} </h4>
                        <p class="cardText"> {{ content.data.image2Text }} </p>

                        <div class="arrowBox">
                            <span class="icon arrow">arrow_forward
                            </span>
                        </div>
                    </NuxtLink> 
                </div>
                
                <div class="linkCard reactiveCardBasicStyles_userActions reactiveCard_userActions">
                    <NuxtLink class="link" to="/a-propos">
                        <h4 class="aboutCardTitle"> {{ content.data.image3Title }} </h4>
                        <p class="cardText"> {{ content.data.image3Text }} </p>

                        <div class="arrowBox">
                            <span class="icon arrow">arrow_forward
                            </span>
                        </div>
                    </NuxtLink>
                </div>
            
            </div>

        </div>
    </section>
</template>

<script setup>
import TitleBar from '@/components/homepage/TitleBar'

const linkToAboutPage = ref('/a-propos')

const appConfig = useAppConfig()

const url = appConfig.directus.items + 'HomepageAbout'

const fetchOptions = {
    key: 'aboutSection',
    server: true
}

const { data: content } = await useFetch(url, fetchOptions)



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
        width: 100%;
        aspect-ratio: 4/5.5;
    }
    .linkBoard {
        width: 100%;
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
    border-radius: 10px;
    border-bottom-left-radius: 60px;
    box-shadow: var(--card-shadow);
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




.linkCard .link {
    height: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}


.aboutCardTitle {
    font-size: 22px;
    font-weight: 400;
}

.cardText {
    font-size: 18px;
    font-weight: 200;
    /* margin-top: 20px; */
    overflow: hidden;
}

.arrowBox {
    /* margin-top: 30px; */
    display: flex;
    justify-content: flex-end;
}


.arrow {
    font-size: 40px;
    padding-right: 30px;
    opacity: 0;
    transition: 300ms ease;
}
.linkCard:hover .link .arrowBox .arrow {
    padding-right: 0px;
    opacity: 1;
}
</style>