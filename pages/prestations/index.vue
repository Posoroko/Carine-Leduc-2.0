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

    <main class="prestaBoard" v-if="prestations && content">
        <div class="background"></div>

        <section class="soins prestaPanel">
            <header>
                <h2 class="prestaTitle">{{ soins.displayName }}</h2>
                <PrestaCard image="_nuxt/assets/images/deco/carte.jpg"/>
            </header>
            <div>
                <p>Soins énergétiques</p>
                <div v-for="soin in soins.content" :key="soin.name">
                    <p class="prestaName">{{ soin.name }}</p>
                </div>
            </div>
        </section>
    </main>




    
</template>

<script setup>
import PrestaCard from '@/components/prestations/PrestaCard.vue'

const { getItems } = useDirectusItems();

//chaque variable corespondant à une prestation est un objet avec les propriétés suivantes:
const newPresta = () => {
    return {
        name: null,
        displayName: null,
        accroche: null,
        link: null,
        description: null,
    }
}
// <=

const content = ref(null)
const prestations = ref(null)
const soins = ref(newPresta())
const massages = ref(newPresta())
const tarot = ref(newPresta())






getItems({ collection: "Page_prestations" }).then(res => {
    content.value = res
    // console.log( "page content:" , content.value)
})
.catch(err => {
    console.log(err.message)
})

//import des prestations
getItems({ collection: "Prestations" }).then(res => {
    prestations.value = res
    // console.log( "prestations:" , prestations.value)
    distributeData(res)
})
.catch(err => {
    console.log(err.message)
})


//import de soins énergétiques
getItems({ collection: "Soins" }).then(res => {
    soins.value.content = res
    // console.log( "soins:" , soins.value.content)
})
.catch(err => {
    console.log(err.message)
})

// "Prestation" comprend les données (titres, description, etc) de chaque prestations. 
// Ces données sont triées et distribuée dans les variables correspondantes.

const distributeData = (res) => {
    let soinsData = res.find((obj) => {
        return obj.name === "soins"
    })
    soins.value.displayName = soinsData.displayName
    soins.value.accroche = soinsData.accroche
    soins.value.link = soinsData.link
    soins.value.description = soinsData.description
}
// <=


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
    padding: 100px 150px;
    border-radius: 20px;
    overflow: hidden;
    margin: auto;
    position: relative;
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
    background-color: black;
    padding: 100px;
    z-index: 10;
}

.prestaTitle {
    font-size: 40px;
    font-family: 'IM Fell English SC', serif;
    color: var(--main-contrast);
    text-align: center;
    margin-bottom: 50px;
}

.prestaName {
    color: var(--text);
}
</style>