<template>
    <header>
        <div class="headerTop">
            <img src="@/assets/images/deco/chemin-foret.jpg" alt="">
            <div class="titleBox">
                <h2>{{ presta.type }}</h2>
                <h1>{{ presta.displayName }}</h1>
            </div>
            
        </div>
        
    </header>

    <main class="prestaBoard">
        <p class="description">
            {{ presta.description }}
        </p>
        
        
    </main>
</template>

<script setup>
const prestaType = useRoute().params.type
const prestaName = useRoute().params.name

const appConfig = useAppConfig()

const url = appConfig.directus.items + `${prestaType}?filter[name][_eq]=${prestaName}`

const fetchOptions = {
    server: true,
}

const { data: presta } = await useAsyncData(
    'prestaByName', 
    async () => {
        const items = await $fetch(url, fetchOptions)
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
    background-image: url("public/images/deco/motif feuille.jpg");
    opacity: 0.08;
    z-index: -1;
}

.description {
    font-size: var(--main-text-size);
    color: var(--main-text-color);
    font-family: var(--main-text-font);
}


</style>