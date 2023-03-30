<template>
	<div class="bigBox">
		<div class="artDecoFrame topLeft">
			<ArtDecoTopLeft />
		</div>

		<div class="artDecoFrame topRight">
			<ArtDecoTopRight />
		</div>
		
		<div class="artDecoFrame bottomLeft">
			<ArtDecoBottomLeft />
		</div>
		
		<div class="artDecoFrame bottomRight">
			<ArtDecoBottomRight />
		</div>
	</div>
</template>

<script setup>
import ArtDecoBottomLeft from '@/components/homepage/cardTable/ArtDecoBottomLeft'
import ArtDecoBottomRight from '@/components/homepage/cardTable/ArtDecoBottomRight'
import ArtDecoTopLeft from '@/components/homepage/cardTable/ArtDecoTopLeft'
import ArtDecoTopRight from '@/components/homepage/cardTable/ArtDecoTopRight'

</script>



<style>
.bigBox{
	position: relative;
    width: 100%;
    height: 100%;
}
.artDecoFrame {
	width: 100%;
}
.artDecoFrame svg {
    width: 100%;
    height: 100%;
}

.st0{
    opacity:0.22;
}
	
.st1{
    fill: white;
}
.topLeft {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
}
.topRight {
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    position: absolute;
}
.bottomLeft {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
}
.bottomRight {
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    position: absolute;
}
</style>