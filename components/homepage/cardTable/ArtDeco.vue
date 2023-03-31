<template>
	<div class="bigBox">
        <div class="frame topLeft">
            <decoArtDeco />
        </div>

        <div class="frame topRight">
            <decoArtDeco />
        </div>

        <div class="bottomLeft frame">
            <decoArtDeco />
        </div>

        <div class="frame bottomRight">
            <decoArtDeco />
        </div>
        
	</div>
</template>

<script setup>
import decoArtDeco from '@/components/homepage/cardTable/decoArtDeco'
</script>



<style scoped>
.bigBox{
	position: relative;
    width: 100%;
    height: 100%;

}

.frame {
    padding: 5px;
    position: absolute;
    width: clamp(100px, 40vw, 250px);
    height: 40%;
    z-index: 0;
}

.topLeft{
    top: 0;
    left: 0;
}
.topRight {
    top: 0;
    right: 0;
    transform: rotateY(180deg);
}
.bottomLeft {
    bottom: 0;
    left: 0;
    transform: rotateX(180deg);
}

.bottomRight {
    bottom: 0;
    right: 0;
    transform: rotateX(180deg) rotateY(180deg);
}

</style>