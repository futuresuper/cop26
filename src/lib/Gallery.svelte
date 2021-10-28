<script>
	export let allTiles;

	let selectedTile = 2;
	let tiles = [];
	$: if (selectedTile > -1) {
		const at = allTiles;
		const st = selectedTile;
		tiles[0] = allTiles[st - 2 < 0 ? st + at.length - 2 : st - 2];
		tiles[1] = allTiles[st - 1 < 0 ? st + at.length - 1 : st - 1];
		tiles[2] = allTiles[st];
		tiles[3] = allTiles[st + 1 === at.length ? 0 : st + 1];
		tiles[4] = allTiles[st + 2 >= at.length ? st - at.length + 2 : st + 2];
	}

	function updateSelectedTile(i) {
		if (i >= allTiles.length) {
			selectedTile = i - allTiles.length;
		} else if (i < 0) {
			selectedTile = i + allTiles.length;
		} else {
			selectedTile = i;
		}
	}
</script>

<button on:click={() => updateSelectedTile(selectedTile - 1)}> LEFT </button>
<button on:click={() => updateSelectedTile(selectedTile + 1)}> RIGHT </button>
{selectedTile}
<div class="gallery-container">
	<div class="gallery">
		{#each tiles as tile, i}
			<div class="tile-container">
				<div on:click={() => updateSelectedTile(selectedTile + i - 2)} class="tile {tile.theme}">
					{tile.text}
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.gallery-container {
		margin: 200px -20px 400px -20px;
		overflow: hidden;
		display: flex;
		justify-content: center;
	}

	.gallery {
		display: grid;
		grid-template-columns: 1fr 24vw 36vw 24vw 1fr;
		align-items: center;
	}

	.tile-container {
		width: 100%;
		height: 13vw;

		overflow: hidden;
		&:nth-of-type(2),
		&:nth-of-type(4) {
			height: 27vw;
			z-index: 2;
		}
		&:nth-of-type(3) {
			height: 36vw;
			z-index: 3;
		}
		&:nth-child(2) {
			margin-right: -3vw;
			width: 27vw;
			font-size: 3.3vw;
		}
		&:nth-child(3) {
			font-size: 5vw;
		}
		&:nth-child(4) {
			margin-left: -3vw;
			width: 27vw;
			font-size: 3.3vw;
		}
		&:nth-child(1),
		&:nth-child(5) {
			margin: 0 -2vw;
			width: 13vw;
			font-size: 1.4vw;
		}
	}

	.tile {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-family: var(--knockout);
		padding: 2vw;

		&.ball {
			background-image: url(/images/ball.png);
			background-size: cover;
			color: black;
		}
		&.smudge {
			background-image: url(/images/smudge.png);
			background-size: cover;
			color: black;
		}
		&.rally {
			background-image: url(/images/rally.png);
			background-size: cover;
			color: white;
		}
		&.white {
			background-image: url(/images/bw-smudge.png);
			background-size: cover;
			color: white;
		}
		&.black {
			background-color: black;
			color: white;
			border: 1px solid white;
		}
		&.blue {
			background-color: var(--blue);
			color: white;
		}
	}
</style>
