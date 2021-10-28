<script>
	import * as htmlToImage from 'html-to-image';
	import DownloadOverlay from './DownloadOverlay.svelte';
	import Arrow from './Arrow.svelte';

	export let allTiles;
	let showDownloadOverlay = false;

	export let customTextOn = false;
	let customText = '';

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

	let img;
	function handleDownload() {
		var node = document.getElementById('tile-2');

		htmlToImage
			.toPng(node)
			.then(function (dataUrl) {
				img = new Image();
				img.src = dataUrl;
				// console.log(img);
				// downloadTile = img;
				// document.getElementById('download-tile-container').appendChild(img);
				showDownloadOverlay = true;
			})
			.catch(function (error) {
				console.error('oops, something went wrong!', error);
			});
	}

	const closeOverlay = () => {
		showDownloadOverlay = false;
	};
</script>

{#if showDownloadOverlay}
	<DownloadOverlay {img} {closeOverlay} />
{/if}
<div class="gallery-container">
	<div class="black-box" />
	<div class="arrows">
		<div on:click={() => updateSelectedTile(selectedTile - 1)}>
			<Arrow rotate="180" />
		</div>
		<div on:click={() => updateSelectedTile(selectedTile + 1)}>
			<Arrow />
		</div>
	</div>
	<div class="gallery">
		{#each tiles as tile, i}
			<div class="tile-container">
				<div id="tile-{i}" class="tile {tile.theme}">
					<div class="spacer" />
					<div class="text">{customTextOn ? customText : tile.text}</div>
					<div class="hashtag">#NOTMUTEONCLIMATE</div>
				</div>
			</div>
		{/each}
	</div>
</div>
{#if customTextOn}
	<input bind:value={customText} type="text" placeholder="Write your text here" />
{/if}

<div on:click={() => handleDownload()} class="download-button">Download your tile to share</div>

<style lang="scss">
	.gallery-container {
		margin: 80px -20px 80px -20px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		.black-box {
			position: absolute;
			width: 100%;
			height: 36vw;
			background-color: black;
			z-index: 3;
			opacity: 0.8;
		}
		.arrows {
			position: absolute;
			width: 100%;
			height: 36vw;
			z-index: 5;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 20px;
		}
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
			z-index: 4;
		}
		&:nth-child(2) {
			margin-right: -3vw;
			width: 27vw;
			font-size: 3.3vw;
			.hashtag {
				font-size: 1.4vw;
			}
			.spacer {
				height: 1.4vw;
			}
		}
		&:nth-child(3) {
			font-size: 5vw;
			.hashtag {
				font-size: max(2vw, 13px);
			}
			.spacer {
				height: 2vw;
			}
		}
		&:nth-child(4) {
			margin-left: -3vw;
			width: 27vw;
			font-size: 3.3vw;
			.hashtag {
				font-size: 1.4vw;
			}
			.spacer {
				height: 1.4vw;
			}
		}
		&:nth-child(1),
		&:nth-child(5) {
			margin: 0 -2vw;
			width: 13vw;
			font-size: 1.4vw;
			.hashtag {
				font-size: 0.8vw;
			}
			.spacer {
				height: 0.8vw;
			}
		}
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

		&.ball {
			background-image: url('/images/ball.png');
			background-size: cover;
			color: black;
		}
		&.smudge {
			background-image: url('/images/smudge.png');
			background-size: cover;
			color: black;
		}
		&.rally {
			background-image: url('/images/rally.png');
			background-size: cover;
			color: white;
		}
		&.white {
			background-image: url('/images/bw-smudge.png');
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

	.download-button {
		margin: 0 auto;
		max-width: 600px;
		border: 1px solid var(--white);
		font-family: var(--knockout);
		font-size: max(3vw, 20px);
		text-align: center;
		padding: 20px;
		text-transform: uppercase;
		cursor: pointer;
		user-select: none;
		&:hover {
			background-color: var(--white);
			color: var(--black);
		}
	}

	input {
		width: calc(100% - 40px);
		padding: 8px;
		background-color: var(--black);
		color: var(--white);
		font-family: var(--knockout);
		font-size: 6vw;
		text-align: center;
		border: 0;
		border-bottom: 1px solid white;
		outline: 0;
		margin: -40px 20px 40px;
		text-transform: uppercase;
	}
</style>
