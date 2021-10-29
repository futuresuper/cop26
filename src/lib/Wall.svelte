<script>
	export let wallTiles = [];
	export let userTiles = [];
</script>

<section>
	<div class="marquee">
		<div class="grid">
			{#each wallTiles as item}
				<div
					class="item-container"
					style="grid-column: span {item.cols}; grid-row: span {item.rows};"
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
		overflow: hidden;
	}

	.marquee {
		background-color: var(--white);
		position: absolute;
		animation: marquee 25s linear infinite;
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
		// background-color: salmon;
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
			left: -100vw;
		}
	}
</style>
