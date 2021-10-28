<script>
	let items = [
		{
			src: '/images/smudge.png',
			alt: 'An image',
			colSpan: 2,
			rowSpan: 1
		},
		{
			src: '/images/smudge.png',
			alt: 'An image',
			colSpan: 3,
			rowSpan: 1
		},
		{
			src: '/images/smudge.png',
			alt: 'An image',
			colSpan: 1,
			rowSpan: 1
		},
		{
			src: '/images/smudge.png',
			alt: 'An image',
			colSpan: 1,
			rowSpan: 2
		},
		{
			src: '/images/smudge.png',
			alt: 'An image',
			colSpan: 1,
			rowSpan: 1
		},
		{
			src: '/images/smudge.png',
			alt: 'An image',
			colSpan: 1,
			rowSpan: 1
		},
		{
			src: '/images/smudge.png',
			alt: 'An image',
			colSpan: 1,
			rowSpan: 1
		}
	];
</script>

<section>
	<div class="grid">
		{#each items as item}
			<div
				class="item-container"
				style="grid-column: span {item.colSpan}; grid-row: span {item.rowSpan};"
			>
				<img src={item.src} alt={item.alt} />
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		background-color: var(--white);
		margin: 0 -20px;
		overflow: hidden;
	}

	.grid {
		display: grid;
		width: 100%;
		padding: 20px 0 20px 20px;
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
</style>
