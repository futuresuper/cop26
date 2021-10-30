<script>
	import { onMount } from 'svelte';

	let text = 'Too soon';
	let theme = 'none';

	onMount(async () => {
		text = 'It worked';
		theme = 'ball';
	});
</script>

<section>
	Original Tile
	<div id="image-tile" class="tile {theme}">
		<div class="spacer" />
		<div class="text">{text}</div>
		<div class="hashtag">#NOTMUTEONCLIMATE</div>
	</div>
</section>

<style lang="scss">
	section {
		color: white;
	}

	.tile {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		text-align: center;
		font-family: var(--knockout);
		padding: 2vw;
		user-select: none;
		text-transform: uppercase;
		line-height: 90%;

		&.ball {
			background-image: url('/images/ball.png');
			background-size: cover;
			color: black;
		}
	}

	#image-tile {
		width: 200px;
		height: 200px;
		padding: 10px;
		.text {
			font-size: 25px;
			line-height: 100%;
		}
		.hashtag {
			font-size: 12px;
		}
		.spacer {
			height: 12px;
		}
	}
</style>
