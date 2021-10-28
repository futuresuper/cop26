<script>
	// import Header from '$lib/Header.svelte';
	import Tiles from '$lib/Tiles.svelte';
	import Grid from '$lib/Grid.svelte';
</script>

<div class="container">
	<h1>NOT MUTE ON CLIMATE</h1>
	<img src="/images/vid.png" alt="Not mute on climate" />
	<div class="text">
		<p>Australians want climate action.</p>
		<p>But our true leaders aren’t at COP26. We’re at home.</p>
		<p>
			Whether you’re fighting oil drilling in the Bight, moving your money or simply recycling,
			every Australian can lead change on climate.
		</p>
	</div>
	<h2>RAISE&nbsp;YOUR&nbsp;VOICE. TELL&nbsp;US&nbsp;WHAT&nbsp;YOU&nbsp;DO.</h2>
	<div class="text">
		<p>Share your action to inspire action.</p>
		<p>
			Together, let’s get every Aussie talking about the individual climate actions they can take,
			by showing what we do already.
		</p>
	</div>
	<Tiles />
	<Grid />
</div>

<style lang="scss">
	.container {
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 20px;
	}

	img {
		max-width: 100%;
	}

	h1 {
		font-size: 15vw;
		margin-bottom: 14vw;
		line-height: 80%;
	}

	h2 {
		font-size: 8vw;
		font-size: max(40px, 8vw);
	}

	p {
		font-size: 2vw;
		font-size: max(18px, 2vw);
		text-align: center;
		max-width: 880px;
		margin: 0 auto 1.6vw auto;
		&:last-of-type {
			margin-bottom: 0;
		}
	}

	.text {
		padding: 6vw 0;
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 14vw;
			line-height: 100%;
		}
	}

	@media (min-width: 1441px) {
		h1 {
			font-size: 226px;
		}
	}
</style>
