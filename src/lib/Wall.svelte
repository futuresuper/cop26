<script>
	import Arrow from './Arrow.svelte';

	export let wallTiles = [];
	export let userTiles = [];

	let allTiles = [];

	$: if (wallTiles || userTiles) {
		allTiles = [...wallTiles, ...userTiles, ...wallTiles, ...userTiles, ...wallTiles, ...userTiles];
		console.log(userTiles);
	}
</script>

<section>
	<div class="marquee">
		<div class="grid">
			{#each allTiles as item}
				<div
					class="item-container"
					style="grid-column: span {item.cols ? item.cols : 1}; grid-row: span {item.rows
						? item.rows
						: 1};"
				>
					<img src={item.src} alt={item.desc} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		width: calc(100% + 40px);
		height: calc(75vh + 80px);
		position: relative;
		background-color: var(--white);
		margin: 0 -20px;
		overflow-x: scroll;
	}

	.marquee {
		background-color: var(--white);
		position: absolute;
		animation: marquee 120s linear infinite;
	}

	.grid {
		display: grid;
		width: 100%;
		padding: 20px;
		grid-auto-columns: 25vh;
		grid-template-rows: repeat(3, 25vh);
		grid-gap: 20px;
		grid-auto-flow: column dense;
	}

	.item-container {
		width: 100%;
		height: 100%;
	}

	img {
		width: 100%;
		height: 100%;
	}

	@keyframes marquee {
		0% {
			left: 0px;
		}
		100% {
			left: -350vw;
		}
	}

	@media (max-width: 700px) {
		section {
			height: calc(108vw + 70px);
		}

		.grid {
			grid-auto-columns: 27vw;
			grid-template-rows: repeat(4, 27vw);
			grid-gap: 10px;
			grid-auto-flow: column dense;
		}
	}
</style>
