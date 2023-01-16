<template>
    <blogHeader :title="blogConfig.title" :subtitle="blogConfig.subtitle"/>
    <main>
        <section class="latestBigBox">
            <artice class="latestBox">
                <figure class="frame">
                    <img :src="appConfig.directus.assets + blogs[0].mainImage.image" :alt="blogs[0].mainImage.alt">
                </figure>

                <h1 class="title blogFont">{{ blogs[0].title }}</h1>

                <div class="latestContent blogFont blogText"  v-html="blogs[0].content.slice(0, 200) + '...'" id="paragraph"></div>

                <p class="blogMoreBox blogFont blogText">

                    <!-- le lien doit pointer vers la page bio du blog -->
                    <NuxtLink :to="`/blog/${blogs[0].id}`">
                        lire la suite...
                    </NuxtLink>
                </p>
                
            </artice>

            <ul class="recentBox">
                <h2> <span class="dot"></span> ARTICLES RECENTS</h2>
                <NuxtLink :to="`/blog/${item.id}`" class="recent pointer blogFont" v-for="(item, index) in blogs.slice(1,5)" :key="item.id">
                    <p>{{ index + 1 }}.</p>

                    <div class="midlleBox">
                        <p>{{ item.date_published }}</p>
                        
                        <h1>{{ item.title }}</h1>
                    </div>

                    <figure class="">
                        <img :src="appConfig.directus.assets + item.mainImage.image" :alt="item.mainImage.image">
                    </figure>
                </NuxtLink>
            </ul>
        </section>

        <section class="authorSection">
            <div class="carineBox">
                <h1 class="">
                    A PROPOS DE L'AUTRICE
                </h1>

                <div class="box">
                    <div class="frame">
                        <img :src="appConfig.directus.assets + blogConfig.authorPortrait" alt="">
                    </div>

                    <div class="bioBox">
                        <h2>Carine Leduc, énergéticienne</h2>
                        <p class="blogFont blogText">
                            {{ blogConfig.authorBio }}
                        </p>
                        <p class="blogMoreBox blogFont blogText">

                            <!-- le lien doit pointer vers la page bio du blog -->
                            <!-- <NuxtLink to="/a-propos">
                                lire la suite...
                            </NuxtLink> -->
                        </p>
                    </div>
                </div>

            </div>


            <NuxtLink class="siteBox pointer blogFont" to="/">
                <p class="invite">
                    {{ blogConfig.siteInvite }}
                </p>
                <div class="frame">
                    <img src="images/deco/lune_fleurie.png" alt="">
                </div>

                <p class="siteName">carineleduc.com</p>
            </NuxtLink>

        </section>
        
    </main>
</template>

<script setup>

definePageMeta({
  layout: "blog",
});

const appConfig = useAppConfig()

const blogsUrl = appConfig.directus.items + "Blogs"
const blogFetchOptions = {
    server: true,
    params: {
        limit: 5,
        sort: '-date_published',
        fields: 'id, title, content, date_published, mainImage.image, mainImage.alt'
    }
}

const { data: blogs } = await useAsyncData(
    'homePageBlogs', 
    async () => {
        const items = await $fetch(blogsUrl, blogFetchOptions)
        return items.data
    }
    ,
    { server: true }
)

const blogConfigUrl = appConfig.directus.items + "BlogConfig"
const blogConfigFetchOptions = {
    server: true,
    // params: {
    //     fields: 'title, content, date_published, mainImage.image, mainImage.alt'
    // }
}

const { data: blogConfig } = await useAsyncData(
    'blogConfig', 
    async () => {
        const items = await $fetch(blogConfigUrl, blogConfigFetchOptions)
        return items.data
    }
    ,
    { server: true }
)


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

.latestBox {
    padding: 10px;
}
.latestBox .frame {
    width: 100%;
    aspect-ratio: 16/9;
    
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
    margin-top: 10px;
}

.latestBox .latestContent {
    margin-top: 10px;
}

/* recent blogs */
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
.recent:last-child {
    border-bottom: none;
}

.recent:hover {
    background-color: var(--blog-bg-color-hover);
    transition: 300ms;
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
}
.recent .midlleBox p {
    width: 100%;
    font-size: 14px;
    font-weight: 600;
}
.recent figure {
    width: 75px;
    height: 75px;
}

.recent figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
}
</style>