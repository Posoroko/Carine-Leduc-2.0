<template>
    <header>
        <div class="headerTop">
            <img src="/images/deco/chemin-foret.jpg" alt="">
            <div class="titleBox">
                <h1>{{ presta.name }}</h1>
            </div>
            
        </div>
        
    </header>

    <main class="prestaBoard">
        <p class="prestaAccroche main-suntitle-size work flex">
            <span class="price work main-text-size main-text-color">
                    {{ presta.accroche }}
                </span>
            <span class="price work main-text-size main-text-color">
                {{ presta.accroche }}
                {{ presta.price }}€
            </span>
        </p>

        <div v-html="presta.description" class="prestaDescription main-text-size work">
            
        </div>

        <div class="prestaBottomBox">
            <div class="bottomLine">
                <span class="price work main-text-size main-text-color">
                    {{ presta.price }}€
                </span>
            </div>
        </div>
    </main> 
</template>

<script setup>
const prestaType = useRoute().params.type
const prestaName = useRoute().params.name

const appConfig = useAppConfig() 

const url = appConfig.directus.items + `${prestaType}?filter[slug][_eq]=${prestaName}`

const { data: presta } = await useAsyncData(
    'prestaByName', 
    async () => {
        const items = await $fetch(url)
        console.log(items.data) 
        return items.data[0]
    } 
    ,
    { server: true }
)

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
.headerTop .titleBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    /* gap: 10px; */
    text-align: center;
    justify-content: center;
}

.titleBox h2 {
    font-size: 30px;
    font-family: var(--main-text-font);
    color: var(--main-text-color);
    font-weight: 300;
}

.titleBox h1 {
    font-size: 60px;
    font-family: var(--english);
    color: var(--gold-text);
    font-weight: 300;
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
    background-image: url("/images/deco/motif-feuille.jpg");
    opacity: 0.08;
    z-index: -1;
}
.prestaBoard .prestaAccroche {
    color: var(--main-text-color);
    border-bottom: 1px solid var(--main-contrast);
}

.prestaDescription {
    color: var(--main-text-color);
    text-align: left;
    white-space: pre-wrap;
    padding: 40px;
}
.prestaBoard .description:deep(ul) {
    padding-left: 40px;
}

.prestaBoard .description:v-deep(ul li){
    list-style: disc;
}
.description {
    font-size: var(--main-text-size);
    color: var(--main-text-color);
    font-family: var(--main-text-font);
    white-space: pre-wrap;
}
.prestaBottomBox {
    border-top: 1px solid var(--main-contrast);
    border-bottom: 1px solid var(--main-contrast);
}
</style>