<template>
    <div class="box">
        <div ref="menuIcon" class="icon menuIcon pointer" @click="toggleModal">menu</div>

        <div class="modal r" v-if="modalIsOpen">
            <p class="menu">
                <span class="tab work" v-for='tab in tabs' :key="tab.name">
                    <NuxtLink :to="tab.link"> {{ tab.name }} </NuxtLink>
                </span>
            </p>

            <span class="icon closeIcon pointer" @click="toggleModal">close</span>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['tabs'])

// modal
const modalIsOpen = ref(false)
const toggleModal = () => {
    modalIsOpen.value= !modalIsOpen.value
}

</script>

<style scoped>
.box {
    display: flex;
    justify-content: flex-end;
    position: relative;
}
.menuIcon {
    color: var(--main-text-color);
    font-size: 40px;
    font-weight: 100;
    background: none;
    border: none;
    margin: 5px 10px;
}

.modal {
    width: min(225px, 80%);
    color: var(--main-text-color);
    background-color: var(--background);
    padding: 30px;
    border: none;
    border-radius: 10px;
    position: absolute;
    top: 30px;
    right: 30px;
    animation: 300ms forwards fadeIn ease;
    z-index: 1000;
}

.modalOn {
    opacity: 1
}

@keyframes fadeIn {
    from{
        transform: translate(50px, -20px);
        opacity: 0;
    }
    to{
        transform: translate(0px, 0px);
        opacity: 1;
    }
}

.menu {
    display: flex;
    flex-direction: column;
    gap: 15px;
    opacity: 1;
    animation: 300ms forwards blurIn ease;
}
@keyframes blurIn {
    from{
        filter: blur(5px);

    }
    to{
        filter: blur(0px);
    }
}
.tab {
    font-size: 20px;
}
.closeIcon {
    font-size: 25px;
    font-weight: 100;
    margin: 20px;
    position: absolute;
    top: 0;
    right: 0;
}
</style>