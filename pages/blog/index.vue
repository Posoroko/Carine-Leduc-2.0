<template>
    <blogHeader />
    <main>
        <section class="latestBigBox">
            <artice class="latestBox">
                <figure class="frame">
                    <img :src="latestImage" :alt="blogStore.LatestBlog.alt">
                    
                </figure>
                <h1 class="title blogFont">{{ blogStore.LatestBlog.title }}</h1>

                <div class="latestContent blogFont blogText" ref="pragraph" id="paragraph">

                </div>
                
            </artice>

            <ul class="recentBox">
                <h2> <span class="dot"></span> ARTICLES RECENTS</h2>
                <li class="recent" v-for="(item, index) in blogStore.RecentBlogs" :key="item.id">
                    <p>{{ index + 1 }}.</p>

                    <div class="midlleBox r">
                        <h1>{{ item.title }}</h1>
                        <p>{{ item.date_published }}</p>
                    </div>

                    <figure>
                        <img :src="configStore.directusAssets + item.img" alt="">
                    </figure>
                </li>
            </ul>
        </section>
        
    </main>
</template>

<script setup>
import { useBlogStore } from '@/stores/blog';
import { useConfigStore } from '@/stores/config';

const paragraph = ref(null);
const blogStore = useBlogStore();
const configStore = useConfigStore();

definePageMeta({
  layout: "blog",
});

const latestImage = computed(() => {
    if(blogStore.LatestBlog.img) {
        const para = document.getElementById('paragraph')
        console.log(blogStore.LatestBlog.content)
        para.innerHTML = blogStore.LatestBlog.content
        let string = configStore.directusAssets + blogStore.LatestBlog.img
        return string
    }
    
});



</script>

<style scoped>
.latestBigBox {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}



@media (max-width: 749px) {
    .latestBox {
        width: 100%;
        
}
    .recentBox {
        width: 100%;
    }
}
@media (min-width: 750px) {
    .latestBox {
        width: 60%;
        border-right: 2px solid var(--blog-color);
}
    .recentBox {
        width: 40%;
    }
}

/* latest Blog */

.latestBox .frame {
    width: 100%;
    aspect-ratio: 16/9;
    padding: 10px;
}

.latestBox .frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
}
.latestBox h1 {
    font-size: 30px;
    font-weight: 600;

}
.recentBox h2 {
    font-size: 30px;
    font-weight: 600;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.recentBox h2 .dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--blog-color);
    display: inline-block;
}
.recent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 0;
    margin: 0 20px;
    border-bottom: 1px solid var(--blog-color);
}

.recent p {
    width: 10%;
    font-size: 30px;
    font-weight: 600;
    color: var(--blog-color);
    
}

.recent .midlleBox {
    width: 70%;
}
.recent .midlleBox h1 {
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    width: 70%;
}
.recent figure {
    width: 100px;
    height: 100px;
}

.recent figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
}
</style>