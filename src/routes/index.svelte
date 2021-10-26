<script>
	// import Header from '$lib/Header.svelte';

	import { onMount } from 'svelte';
	onMount(async () => {
		// To do
	});
</script>

<div class="container">
	<h1>NOT MUTE ON CLIMATE</h1>
</div>

<style lang="scss">
	.container {
		max-width: 1400px;
		margin: 0 auto;
	}

	h1 {
		margin: 0;
		font-size: 16vw;
		line-height: 100%;
		text-align: center;
		font-family: var(--knockout);
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 15vw;
		}
	}

	@media (min-width: 1401px) {
		h1 {
			font-size: 226px;
		}
	}
</style>
