<script>
	// import Header from '$lib/Header.svelte';
	import Header from '$lib/Header.svelte';
	import Tiles from '$lib/Tiles.svelte';
	import Wall from '$lib/Wall.svelte';
	import Orgs from '$lib/Orgs.svelte';
	import Info from '$lib/Info.svelte';
	import Footer from '$lib/Footer.svelte';
	import { onMount } from 'svelte';

	let hideSite = true;

	let allTiles;
	let userTiles;
	let wallTiles;
	let orgs;

	onMount(async () => {
		const url = 'https://67l8qspd50.execute-api.ap-southeast-2.amazonaws.com/prod/coptiles';
		fetch(url, { method: 'GET' })
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				allTiles = data.prefilled;
				userTiles = data.user;
				wallTiles = data.wall;
				orgs = data.orgs;
			});
		if (window.location.hostname.includes('notmuteonclimate.com')) {
			hideSite = true;
		} else {
			hideSite = false;
		}
	});
</script>

<div class="container">
	{#if hideSite}
		<h1>Coming soon...</h1>
	{:else}
		<Header />
		<Tiles {allTiles} />
		<Wall {userTiles} {wallTiles} />
		<Orgs {orgs} />
		<Info />
		<Footer />
	{/if}
</div>

<style lang="scss">
	.container {
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 20px;
	}
</style>
