<script>
	let allTiles = [
		['Blah blah 1', 'blue'],
		['Blah blah 2', 'pink'],
		['Blah blah 3', 'black'],
		['Blah blah 4', 'green'],
		['Blah blah 5', 'red'],
		['Blah blah 6', 'purple']
	];

	let tiles = allTiles.slice(0, 5);
	// $: tiles = allTiles.slice(0, 5);
	// $: console.log(tiles);

	function move(left) {
		console.log(left ? 'MOVING LEFT' : 'MOVING RIGHT');
		const t = [...allTiles];
		const tl = t.length;
		allTiles = left
			? [...t.slice(1, tl), ...t.slice(0, 1)]
			: [...t.slice(tl - 1, tl), ...t.slice(0, tl - 1)];
		// console.log(allTiles);
		tiles = allTiles.slice(0, 5);
	}

	let dragging = false;
	let mouseX;
	let bufferedX = 0;
	const sensitivity = 20;
	$: if (dragging && Math.abs(mouseX - bufferedX) > sensitivity) {
		console.log(bufferedX + ' | ' + mouseX);
		// console.log('MOVE: ' + mouseX < bufferedX);
		move(mouseX < bufferedX);
		bufferedX = mouseX;
	}
</script>

<button on:click={() => move(true)}>LEFT</button>
<button on:click={() => move()}>RIGHT</button>

<div
	on:mousedown={() => (dragging = true)}
	on:mouseup={() => (dragging = false)}
	on:touchstart={() => (dragging = true)}
	on:touchend={() => (dragging = false)}
	class="gallery-container"
>
	<div class="gallery">
		{#each tiles as tile}
			<div class="tile-container">
				<div class="tile {tile[1]}">
					{tile[0] + dragging}
				</div>
			</div>
		{/each}
	</div>
</div>

<svelte:window on:touch={(e) => (mouseX = e.clientX)} on:mousemove={(e) => (mouseX = e.clientX)} />

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
		}
		&:nth-child(4) {
			margin-left: -3vw;
			width: 27vw;
		}
		&:nth-child(1),
		&:nth-child(5) {
			margin: 0 -2vw;
			width: 13vw;
		}
	}

	.tile {
		border: 1px solid white;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		&.blue {
			background-color: blue;
		}
		&.pink {
			background-color: pink;
		}
		&.black {
			background-color: black;
		}
		&.green {
			background-color: green;
		}
		&.red {
			background-color: red;
		}
		&.purple {
			background-color: purple;
		}
	}
</style>
