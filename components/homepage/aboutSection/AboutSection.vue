<template>
    <section class="">
        
        <div class="board">
            <div class="titleBox">
                <TitleBar title="qui je suis" link="a-propos/a-propos-de-moi"/>
            </div>

            <div class="imageBoard">
                <div class="leftBox frame imageBox">
                    <img class="aboutImg" :src="`/images/about-section/mes-techniques.jpg`" alt="">

                    <NuxtLink class="link" to="a-propos/mes-techniques"> 
                        <h2 class="imageTitle">mes techniques</h2>
                    </NuxtLink>
                </div>

                <div class="rightBox imageBox">
                    <div class="rightTopBox frame rightInnerBox">
                        <img class="aboutImg" :src="`/images/about-section/me-connaitre.jpg`" alt="">
                        <NuxtLink class="link" to="a-propos/a-propos-de-moi"> 
                            <h2 class="imageTitle">à propos de moi</h2>
                        </NuxtLink>
                    </div>

                    <div class="rightBottomBox frame rightInnerBox">
                        <img class="aboutImg" :src="`/images/about-section/cabinet.jpg`" alt="">
                        <NuxtLink class="link" to="a-propos/le-cabinet">
                            <h2 class="imageTitle">le cabinet</h2>
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="linkBoard">

                <div class="linkCard reactiveCardBasicStyles_userActions reactiveCard_userActions">
                    <NuxtLink class="link" to="a-propos/mes-techniques">
                        <h4 class="aboutCardTitle"> mes techniques </h4>
                        <p class="cardText"> {{ listOfItems[0].accroche }} </p>

                        <div class="arrowBox">
                            <span class="icon arrow">arrow_forward
                            </span>
                        </div>
                    </NuxtLink>
                </div>
                
                <div class="linkCard reactiveCardBasicStyles_userActions reactiveCard_userActions">
                    <NuxtLink class="link" to="a-propos/a-propos-de-moi">
                        <h4 class="aboutCardTitle"> à propos de moi </h4>
                        <p class="cardText"> {{ listOfItems[1].accroche }} </p>

                        <div class="arrowBox">
                            <span class="icon arrow">arrow_forward
                            </span>
                        </div>
                    </NuxtLink> 
                </div>
                
                <div class="linkCard reactiveCardBasicStyles_userActions reactiveCard_userActions">
                    <NuxtLink class="link" to="a-propos/le-cabinet">
                        <h4 class="aboutCardTitle"> le cabinet </h4>
                        <p class="cardText"> {{ listOfItems[2].accroche }} </p>

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

const appConfig = useAppConfig()

const url = appConfig.directus.items + 'aboutPage?fields=title,accroche'

// fetching the list of services of the specific type (soins, massages, etc.)

const { data: listOfItems } = await useAsyncData(
    'aboutSection',
    async () => {
        const items = await $fetch(url)

        return items.data
    }
    ,
    { server: true }
)

 
</script>

<style scoped>
section {
    display:flex;
}
.board {
    background-color: var(--second-bg);
    padding: 4vw 5vw 5vw 5vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.imageBoard {
    display: flex;
    gap: 20px;
}

.frame {
    position: relative;
    cursor: pointer;
    display: grid;
    place-items: center;
    overflow: hidden;
}
.frame .link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.frame .link .imageTitle {
    color: rgb(255, 249, 223);
    font-size: max(20px, 3vw);
    font-weight: 200;
    font-family: 'Work Sans', sans-serif;
    position: absolute;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 50%);
    transition: 400ms all cubic-bezier(0, .99, .39, .97);
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
    margin-top: 20px;
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