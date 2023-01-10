<template>
    <div class="box">
        <button ref="menuIcon" class="icon menuIcon pointer" @click.prevent="showModal">menu</button>

        <div class="modal" v-show="modal">
            <p class="menu">
                <span class="tab work" v-for='tab in tabs' :key="tab.name">
                    <NuxtLink :to="tab.link" @click="showModal"> {{ tab.name }} </NuxtLink>
                </span>
            </p>

            <span class="icon closeIcon pointer" @click="showModal">close</span>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['tabs'])

// modal
const modal = ref(false)
const menuIcon = ref(null)

const showModal = () => {

    if(!modal.value) {
        modal.value = true
        menuIcon.value.style.opacity = '0'
        menuIcon.value.disabled = true
        menuIcon.value.style.cursor = "auto"
        return
    }
    modal.value = false
    menuIcon.value.style.opacity = '1'
    menuIcon.value.disabled = false
    menuIcon.value.style.cursor = "pointer"
}
</script>

<style scoped>
.box {
    display: flex;
    justify-content: flex-end;
    position: relative;
}
.menuIcon {
    font-size: 40px;
    font-weight: 100;
    background: none;
    border: none;
    margin: 5px 10px;
}

.modal {
    width: min(225px, 80%);
    padding: 30px;
    border: none;
    border-radius: 10px;
    position: absolute;
    top: 30px;
    right: 30px;
    animation: 300ms forwards fadeIn ease;
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