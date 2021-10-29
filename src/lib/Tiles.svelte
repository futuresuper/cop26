<script>
	import Gallery from '$lib/Gallery.svelte';

	export let customTileMode = false;
	export let allTiles = [];

	let customTextOn;
	function handleToggle() {
		customTileMode = !customTileMode;
		if (customTileMode) {
			customTextOn = true;
		} else {
			customTextOn = false;
		}
	}
</script>

<div class="toggle" on:click={() => handleToggle()}>
	<div class="item {!customTileMode ? 'selected' : ''}">Pre-filled actions</div>
	<div class="item {customTileMode ? 'selected' : ''}">Share my own</div>
</div>
<Gallery {allTiles} {customTextOn} />
<div class="text">
	Australia is
	<div class="hashtag">#NOTMUTEONCLIMATE</div>
</div>

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

	.text {
		text-align: center;
		margin: 60px 0;
		.hashtag {
			font-family: var(--knockout);
			font-size: max(3vw, 28px);
		}
	}

	@media (max-width: 600px) {
		.item {
			font-size: 4vw;
		}
	}
</style>
