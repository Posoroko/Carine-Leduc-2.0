<template>
    <blogHeader :title="blogConfig.title" :subtitle="blogConfig.subtitle"/>
    <main>
        <section class="latestBigBox" v-if="blogs">
            <artice class="latestBox">
                <figure class="frame">
                    <img :src="`${directusAssets}${blogs.latest.mainImage}`" :alt="blogs.latest.mainImageAlt">
                </figure>

                <h3 class="title blogFont">{{ blogs.latest.title }}</h3>
                <p>{{ blogs.latest.date_published }}</p>

                <p class="latestContent blogFont blogText"  v-html="`${blogs.latest.content.slice(0, 150)} ...`" id="paragraph"></p>

                <div class="blogMoreBox blogFont blogText">

                    <NuxtLink class="blogMoreButton" :to="`/blog/${blogs.latest.title}`">
                        lire la suite
                    </NuxtLink>
                </div>
                
            </artice>

            <ul class="recentBox" v-if="blogs.recent.length">
                <h2> <span class="dot"></span> ARTICLES RECENTS</h2>
                <NuxtLink :to="`/blog/${item.title}`" class="recent pointer blogFont" v-for="(item, index) in blogs.recent" :key="item.id">
                    <p>{{ index + 1 }}.</p>

                    <div class="midlleBox">
                        <p>{{ item.date_published }}</p>
                        
                        <h1>{{ item.title }}</h1>
                    </div>

                    <figure class="">
                        <img :src="`${directusAssets}${item.mainImage}`" :alt="item.image">
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
                    <img src="/images/deco/lune_fleurie.png" alt="">
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
const directusAssets = appConfig.directus.assets

const blogsUrl = appConfig.directus.items + "Blogs"
const blogFetchOptions = {
    server: true,
    params: {
        limit: 5,
        sort: '-date_published',
        fields: 'id, title, content, date_published, mainImage, mainImage'
    }
}

const { data: blogs } = await useAsyncData(
    'homePageBlogs', 
    async () => {
        const _items = await $fetch(blogsUrl, blogFetchOptions)
        const items = _items.data

        const temp = {
            latest: items.splice(0,1)[0],
            recent: items
        }

        return temp
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
    font-weight: 700;
    margin-top: 10px;
}

.latestBox .latestContent {
    margin-top: 10px;
}

/* recent blogs */
.recentBox h2 {
    font-size: 30px;
    font-weight: 700;
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

.authorSection {
    border-top: var(--blog-border-thick) solid var(--blog-color);
    margin-top: 20px;
    display: flex;
}

@media (max-width: 749px) {
    .carineBox {
        width: 100%;
        
}
    .siteBox {
        width: 100%;
    }
}
@media (min-width: 750px) {
    .carineBox {
        width: 60%;
        border-right: 2px solid var(--blog-color);
}
    .siteBox {
        width: 40%;
    }
}

.authorSection .carineBox h1 {
    font-size: 30px;
    margin: 10px
}
.authorSection .carineBox .box {
    width: 100%;
    display: flex;
}
.authorSection .carineBox .box .frame {
    width: 30%;
    aspect-ratio: 3/4;
}
.authorSection .carineBox .frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}
.authorSection .carineBox .box .bioBox {
    width: 70%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.authorSection .carineBox .box .bioBox p {
    margin-top: 10px;
}

.blogMoreBox {
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.blogMoreBox .blogMoreButton {
    color: white;
    background-color: var(--blog-color);
    padding: 5px 15px 5px 15px;
    border-radius: 5px;
    vertical-align: middle;
}

.siteBox {
    
    font-family: var(--main-text-font);
    /* background-color: var(--blog-color); */
    /* background: radial-gradient(circle, rgba(42,62,64,1) 0%, rgba(28,26,25,1) 100%); */
    background: radial-gradient(circle, rgba(36,46,47,1) 0%, rgba(28,26,25,1) 100%);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
.siteBox:hover {
    background-color: var(--blog-color-hover);
}

.siteBox .invite{
    color: white;
    width: 60%;
    text-align: center;
}


.siteBox .frame {
    width: 50%;
    aspect-ratio: 1/1;
}

.siteBox .frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}
.siteBox .siteName {
    color: white;
    font-size: 24px;
}
</style>