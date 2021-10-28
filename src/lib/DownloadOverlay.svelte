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

	let width;
	let mobile;
	let forceMobile = false;
	let forceDesktop = false;
	$: if (forceMobile) {
		mobile = true;
		forceDesktop = false;
	} else if (forceDesktop) {
		mobile = false;
		forceMobile = false;
	} else if (width < 900) {
		mobile = true;
	} else {
		mobile = false;
	}
</script>

<svelte:window bind:innerWidth={width} />

<section>
	<div class="close-container">
		<div id="close" on:click={() => closeOverlay()}>
			<Cross />
		</div>
	</div>
	<div id="image-container" />

	{#if mobile}
		<h3>How to download and share</h3>
		<p>On most phones, press and hold the above image and you'll see an option to save.</p>
		<p>You can then share it to Instagram, Facebook and more from your photo library.</p>
		<p on:click={() => (forceDesktop = true)} class="small">Desktop computer instructions</p>
	{:else}
		<h3>How to download and share</h3>
		<p>Right click on the above image and choose 'Save Image As...' or similar.</p>
		<p>You can then upload and share it to Instagram, Facebook and more.</p>
		<p on:click={() => (forceMobile = true)} class="small">Mobile/tablet instructions</p>
	{/if}
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

	.small {
		margin-top: 40px;
		color: grey;
		font-size: 14px;
		text-decoration: underline;
		cursor: pointer;
	}
</style>
