<template>
    <section>
        <form @submit.prevent>
            <label for="NLInput">Inscrivez-vous à la news letter!</label>
            <input id="NLInput" type="text" placeholder="Votre email" ref="email">
            <p class="errorMessage" v-if="error">{{ error }}</p>
            <p class="message" v-if="message">{{ message }}</p>
            <button type="submit" @click.prevent="submitForm">S'inscrire</button>
        </form>

    </section>
</template>

<script setup>

const { createItems } = useDirectusItems()

const error = ref(null)
const isPending = ref(false)
const message = ref(null)

const email = ref(null)

const submitForm = () => {
    error.value = null;
    isPending.value = true;

    if(!email.value.value) {
        error.value = 'Veuillez entrer une adresse email'
        isPending.value = false
        return
    } 

    if(!isEmailIsWellFormated(email.value.value)) {
        error.value = 'Email non valide'
        isPending.value = false
        return
    } else {

        let data = {
            collection: "MailingList", 
            items: [
                {
                    email: email.value.value
                }
            ]
        }

        createItems(data)
        .then(res => {
            message.value = "Super! Vous êtes inscrit à la newsletter!"
            email.value.value = ''
        }).catch(err => {
            console.log(err.message)
        })
    }
    isPending.value = false
}
// eric@posoroko.com



</script>

<style scoped>
section {
    width: 100%;
    margin: 50px 0;
    display: grid;
    place-items: center;
}
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 500px;
}
label {
    font-size: max(20px, 2vw);
    font-family: 'work sans';
    font-weight: 300;
    color: var(--text);
}
input {
    font-size: 20px;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    border: none;
}
button {
    font-size: 20px;
    font-family: var(--main-text);
    padding: 0.5rem 2rem;
    border-radius: 25px;
    border: none;
    align-self: center;
}
.message {
    font-size: 18px;
    color: var(--text);
    text-align: center;
}
</style>