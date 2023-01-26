<template>
    <form @submit.prevent>
        <label for="NLInput">Inscrivez-vous à la news letter!</label>

        <input id="NLInput" type="text" placeholder="Votre email" ref="email">

        <p class="errorMessage" v-if="error">{{ error }}</p>

        <p class="message" v-if="message">{{ message }}</p>

        <button type="submit" class=" reactiveCardBasicStyles_userActions reactiveCard_userActions" @click.prevent="submitForm">S'inscrire</button>
    </form>
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

</script>

<style scoped>
form {
    width: var(--mid-width);
    color: black;
    font-family: var(--main-text-font);
    background-color: var(--panel);
    padding: 30px 20px;
    border: 1px solid var(--panel-border);
    border-radius: 10px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    position: relative;
}

label {
    font-size: max(20px, 2vw);
    font-weight: 400;
    color: var(--text);
}
input {
    max-width: 100%;
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
    align-self: center;
}
.message {
    font-size: 18px;
    color: var(--text);
    text-align: center;
}
</style>

