

<script setup>
import TitleBar from '@/components/homepage/TitleBar.vue'

const appConfig = useAppConfig()

const url = appConfig.directus.items + 'Agenda'

const fetchOptions = {
    key: 'agenda',
    server: true,
    params: {
        limit: 4,
        sort: 'date'
    }
}
const { data: dates } = await useAsyncData(
    'agenda', 
    async () => {
        const items = await $fetch(url, fetchOptions)
        return items
    }
    ,
    { server: true }
)


</script>

<template>
    <section class="agendaStripe">
        <div class="box1 absolute top right bottom left">
            <!-- <ArtNouveauStripe /> -->
        </div>
        
        <div class="box2">
            <TitleBar title="Agenda" link="/agenda"/>
        </div>
        
        <div class="mainWidthFrame">
            <figure class="dateCard reactiveCard_userActions" v-for="(date, index) in dates.data.slice(0, 5)" :key="index" >
                <div class="cardContent">
                    <!-- Format the date to extract day and month -->
                    <p class="date">{{ date.date.slice(8, 10) + date.date.slice(4, 7) }}</p> 
                    
                    <p class="title">{{ date.title }}</p>

                    <div class="description">
                        <span>{{ date.description }}</span>
                        
                        <div class="lastLineHider">...</div>
                    </div>

                    <button class="readMore marginTop50"><NuxtLink>plus...</NuxtLink></button>
                </div>
            </figure>
        </div>

        <div class="agendaLinkBox">
            <NuxtLink class="link reactiveCard_userActions" to="/agenda"> voir toutes les dates</NuxtLink>
        </div>
    </section>
</template>

<style scoped>
.agendaStripe {
    color: var(--text);
    padding: 50px 0;
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
    display: flex;
    justify-content: center;
}

.dateCard {
    font-family: 'Work Sans';
    width: 200px;
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
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(87deg, rgba(0, 0, 0, 0) 0%, var(--main-bg) 100%); 
    text-align: right;
}

.readMore {
    width: 100%;
    font-family: 'Work Sans';
    font-size: 20px;
    font-weight: 200;
    color: var(--text);
    background-color: var(--main-bg);
    border: none;
    text-align: end;
    cursor: pointer;
}

.agendaLinkBox {
    display: grid;
    place-items: center;
    padding-top: 50px
}
.agendaLinkBox .link {
    font-family: 'Work Sans';
    font-size: 30px;
    font-weight: 300;
    
    text-decoration: none;

    padding: 10px 25px;

    border-radius: 50px;
}

</style>