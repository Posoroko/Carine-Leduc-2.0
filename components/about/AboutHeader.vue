<template>
    <header>
        <div class="leftHeaderBox headerBox">
            <h1 class="title">Carine Leduc</h1>
            <ul class="jobList">
                <li v-for="job in jobs" :key="job.id">
                    {{ job.name }}
                </li>
            </ul>

            <ul class="qualifList">
                <li v-for="qualif in qualifications" :key="qualif.id">
                    {{ qualif.name }}
                </li>
            </ul>
        </div>

        <div class="rightHeaderBox headerBox">
            <div class="frame">
                <img class="aboutImg" src="@/assets/images/headers/carine.jpg" alt="">
            </div>
        </div>
        
    </header>
</template>

<script setup>
import { useAboutStore } from '@/stores/about.js'
const aboutStore = useAboutStore()

const jobs = ref(null)
const qualifications = ref(null)

const props = defineProps(['headerImageSrc'])

onMounted(async () => {
    jobs.value = await aboutStore.getJobs
    qualifications.value = await aboutStore.getQualifications
})





</script>

<style scoped>
header {
    width: 100%;
    display: flex;
}
.headerBox {
    width: 50%;
    display: flex;    
}

.leftHeaderBox {
    padding: 20px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
}
.title {
    color: var(--text);
    font-size: clamp(30px, 5vw, 130px);
    font-family: var(--caligraphy);
}

ul {
    font-family: var(--main-text);
    
    
    margin-top: 20px;
    color: var(--text);
    list-style: none;
    text-align: end;
}
.jobList {
    font-size: clamp(16px, 1vw, 24px);
    font-weight: 400;
}
.qualifList {
    font-size: clamp(15px, 0.8vw, 22px);
    font-weight: 300;
}

.rightHeaderBox .frame{
    min-height: 25vw;
    aspect-ratio: 1.5/1;
}

.frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>