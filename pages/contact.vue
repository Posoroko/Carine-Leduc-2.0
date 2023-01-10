<template>
    <main class="board">
        <div class="enveloppeFrame">
            <img src="images/deco/enveloppe.jpg" alt="">
        </div>

        <div class="content">
            <h1 class="contactTitle">Contact</h1>

            <div class="infoBox">
                <p>Carine Leduc</p>

                <p>{{ aboutStore.getContact.adresse }}</p>

                <p>{{ aboutStore.getContact.telFixe }}</p>

                <p>{{ aboutStore.getContact.telPortable }}</p>

                <p>{{ aboutStore.getContact.email }}</p>
            </div>
            
            <p class="socialMediaLine ">
                <a href="https://www.facebook.com/carine.lefort">
                    <svgFacebook />  
                </a>

                <a href="https://www.instagram.com/a_corps_entendu_carine_leduc/">
                    <svgInstagram /> 
                </a>
            </p>

            <div class="newsLetterBox">
                <miscNewsletterWidget />
            </div>
        </div>
    </main>


</template>

<script setup>
import { useAboutStore } from '@/stores/about'

const aboutStore = useAboutStore();

</script>

<style scoped>
.board {
    min-height: 80vh;
    color: var(--text);
    position: relative;

}

.enveloppeFrame {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
}
.enveloppeFrame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.1;
    filter:blur(2px);
}
.content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
}
.contactTitle {
    font-size: clamp(20px, 2vw, 40px);
    font-weight: 300;
    font-family: var(--main-text);
    padding-left: clamp(20px, 2vw, 40px);
}


.socialMediaLine {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
}
.socialMediaLine {
    display: flex;
    align-items: center;
    gap: 10px;
}
.newsLetterBox {
    width: 100%;
    display: grid;
    place-items: center;
}
</style>