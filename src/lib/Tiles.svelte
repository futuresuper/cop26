<script>
	import Gallery from '$lib/Gallery.svelte';

	export let selected = false;

	let allTiles = [
		{
			text: '17 MILLION AUSSIES WANT CLIMATE ACTION. RAISE YOUR VOICE AND SHOW THEM HOW.',
			theme: 'ball'
		},
		{ text: 'ACTIONS SPEAK LOUDER THAN WORDS.', theme: 'smudge' },
		{ text: 'EVERYONE THAT SEES THIS CAN BE A CLIMATE LEADER', theme: 'rally' },
		{ text: 'LET’S GET AUSTRALIA’S TRUE CLIMATE LEADERS TRENDING DURING COP26', theme: 'white' },
		{ text: 'TAG A MATE WHOS TAKING CLIMATE ACTION', theme: 'black' }
	];

	import { onMount } from 'svelte';
	onMount(async () => {
		const url = 'https://67l8qspd50.execute-api.ap-southeast-2.amazonaws.com/prod/coptiles';
		fetch(url, { method: 'GET' })
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				allTiles = data.prefilled;
			});
	});
</script>

<div class="toggle" on:click={() => (selected = !selected)}>
	<div class="item {!selected ? 'selected' : ''}">Pre-filled actions</div>
	<div class="item {selected ? 'selected' : ''}">Share my own</div>
</div>
<Gallery {allTiles} />

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
