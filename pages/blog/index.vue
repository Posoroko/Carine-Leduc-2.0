<template>
    <blogHeader />
    <main>
        <section class="latestBigBox">
            <div class="latestBoxA r">
                {{  }}
            </div>

            <div class="latestBoxB r">
                <ul>
                    <li class=""></li>
                    <li class=""></li>
                    <li class=""></li>
                    <li class=""></li>
                </ul>
            </div>
        </section>
        
    </main>
</template>

<script setup>
import { useBlogStore } from '@/stores/blog';

const blogStore = useBlogStore();

definePageMeta({
  layout: "blog",
});
</script>

<style scoped>
.latestBigBox {
    width: 100%;
    display: flex;
}
.latestBoxA {
    width: 60%;
    height: 300px;
}
.latestBoxB {
    width: 40%;
    height: 300px;
}
</style>