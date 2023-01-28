<template>
    <footer class="">
        <div class="credits">
            <p>site et images par posoroko.com</p>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
footer {
    width: 100%;
    margin-top: 100px;
}
footer img {
    width: 100%;
    opacity: 0.8;
}
.lune {
 
    width: 250px;
}
.bandeau {
    /* height: 400px; */
    /* background-image: url('/images/deco/footer.jpg'); */
    background-size: contain;
    opacity: 0.6;
    mix-blend-mode: lighten;
}

.credits {
    font-family: var(--main-text-font);
    font-weight: 300;
    color: var(--main-text-color);
    display: flex;
    justify-content: center;
}
</style>