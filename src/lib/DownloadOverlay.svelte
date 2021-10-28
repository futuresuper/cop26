<script>
	import { onMount } from 'svelte';
	import Cross from './Cross.svelte';

	export let img;
	export let closeOverlay;

	onMount(async () => {
		const container = document.getElementById('image-container');
		if (img) {
			img.style.width = '40vh';
			img.style.height = '40vh';
			img.style.maxWidth = '100%';
			container.appendChild(img);
		}
	});

	if (img) {
		const el = document.getElementById('image-container');
		console.log(el);
	}
</script>

<section>
	<div class="close-container">
		<div id="close" on:click={() => closeOverlay()}>
			<Cross />
		</div>
	</div>
	<div id="image-container" />
	<h3>How to download</h3>
	<div class="mobile">
		<h2>Phone or tablet</h2>
		<p>
			On most phones, if you press and hold on the above image, you'll see options to save or share
			the image
		</p>
	</div>
	<div class="desktop">
		<h2>Computer</h2>
		<p>Right click on the above image and choose 'Save Image As...' or similar</p>
	</div>
</section>

<style lang="scss">
	section {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		width: 100%;
		height: 100vh;
		background-color: var(--black);
		padding: 40px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.close-container {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		margin-bottom: 40px;
	}

	#close {
		cursor: pointer;
	}

	h2 {
		font-size: max(3vw, 28px);
		margin-top: 20px;
		text-transform: uppercase;
	}
	h3 {
		font-size: max(1.6vw, 20px);
		margin-top: 40px;
		text-transform: uppercase;
	}
	p {
		margin-bottom: 0;
		text-align: center;
	}
</style>
