<template>
    <main>

        <div class="board">
            <h1 class="contactTitle">Contact</h1>

            <div class="infoBox">
                <p class="name">Carine Leduc</p>

                <p class="address">{{ contactInfo.adresse }}</p>

                <p class="telephone"><a :href="`tel: ${contactInfo.telFixe}`">{{ contactInfo.telFixe }}</a> <a :href="`tel: ${contactInfo.telPortable}`">{{ contactInfo.telPortable }}</a></p>

                <p class="email">{{ contactInfo.email }}</p>

                <p class="socialMediaLine">
                    <a href="https://www.facebook.com/carine.lefort">
                        <svgFacebook />  
                    </a>

                    <a href="https://www.instagram.com/a_corps_entendu_carine_leduc/">
                        <svgInstagram /> 
                    </a>
                </p>
            </div>
        </div>

        <div class="newsLetterBox">
            <miscNewsletterWidget />
        </div>
    </main>


</template>

<script setup>
const appConfig = useAppConfig()

const url = appConfig.directus.items + 'Contact'

const { data: contactInfo } = await useAsyncData(
    'prestations', 
    async () => {
        const items = await $fetch(url)
        console.log(items.data)
        return items.data
    }
    ,
    { server: true }
)

</script>

<style scoped>
.board {
    color: var(--text);
    background-color: var(--panel);
    position: relative;
    border: 1px solid var(--panel-border);
    border-radius: var(--panel-radius);
    margin-top: 50px;
}


.contactTitle {
    font-size: clamp(20px, 2vw, 40px);
    font-weight: 300;
    font-family: var(--main-text-font);
    padding: 30px 0;
    margin: auto;
    text-align: center;
}
.infoBox {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.infoBox .name {
    font-size: clamp(20px, 2vw, 40px);
    font-weight: 300;
    font-family: var(--main-text-font);
    padding: 30px 0;
}

.infoBox .address {
    font-size: clamp(16px, 2vw, 24px);
    font-weight: 300;
    font-family: var(--main-text-font);
    padding: 15px 0;
    margin: auto;
    text-align: center;
}
.infoBox .telephone {
    font-size: clamp(16px, 2vw, 24px);
    font-weight: 300;
    font-family: var(--main-text-font);
    padding: 15px 0;
    margin: auto;
    text-align: center;
    display: flex;
    gap: 50px;
}
.infoBox .email {
    font-size: clamp(16px, 2vw, 24px);
    font-weight: 300;
    font-family: var(--main-text-font);
    padding: 15px 0;
    margin: auto;
    text-align: center;
}
.socialMediaLine {
    width: 100%;
    padding: 30px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
}

.newsLetterBox {
    width: 100%;
    display: grid;
    place-items: center;
}
</style>