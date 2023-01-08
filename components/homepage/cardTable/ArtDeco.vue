<template>
	<div class="bigBox full">
		<div class="artDecoFrame absolute top left">
			<ArtDecoTopLeft />
		</div>

		<div class="artDecoFrame absolute top right">
			<ArtDecoTopRight />
		</div>
		
		<div class="artDecoFrame absolute bottom left">
			<ArtDecoBottomLeft />
		</div>
		
		<div class="artDecoFrame absolute bottom right">
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

</style>