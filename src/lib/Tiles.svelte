<script>
	import Gallery from '$lib/Gallery.svelte';

	export let selected = false;
</script>

<div class="toggle" on:click={() => (selected = !selected)}>
	<div class="item {!selected ? 'selected' : ''}">Pre-filled actions</div>
	<div class="item {selected ? 'selected' : ''}">Share my own</div>
</div>
<Gallery />

<style lang="scss">
	.toggle {
		max-width: 500px;
		margin: 0 auto;
		border: 1px solid var(--white);
		height: 60px;
		border-radius: 100px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		cursor: pointer;
	}

	.item {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20px;
		user-select: none;
	}

	.selected {
		background-color: var(--white);
		color: var(--black);
		border-radius: 100px;
	}

	@media (max-width: 600px) {
		.item {
			font-size: 4vw;
		}
	}
</style>
