<script>
	import { onMount } from 'svelte';

	export let orgs = [];
	let showing = 5;
	let orgsBefore = [];
	$: orgsBefore = [...orgs.slice(showing + 1, orgs.length), ...orgs.slice(0, showing)];
	let orgsAfter = [];
	$: orgsAfter = [...orgs.slice(showing + 1, orgs.length), ...orgs.slice(0, showing)];

	onMount(async () => {
		setInterval(function () {
			showing = showing === orgs.length - 1 ? 0 : showing + 1;
		}, 1000);
	});
</script>

<section>
	<div class="namesBefore">
		{#if orgsBefore.length > 0}
			{#each orgsBefore as org}
				<div class="name grey">
					{org.name}
				</div>
			{/each}
		{/if}
	</div>
	<div class="highlight-name">
		<div class="name">
			{orgs.length > 0 ? orgs[showing].name : 'Loading...'}
		</div>
	</div>
	<div class="namesAfter">
		{#if orgsAfter.length > 0}
			{#each orgsAfter as org}
				<div class="name grey">
					{org.name}
				</div>
			{/each}
		{/if}
	</div>
	<div class="are-not-mute">&nbsp;ARE&nbsp;NOT&nbsp;MUTE</div>
</section>

<style lang="scss">
	section {
		margin: 0 auto;
		display: grid;
		grid-template-columns: 60% 40%;
		grid-template-rows: 28vh auto 28vh;
		justify-content: center;
		align-items: center;
		grid-auto-flow: column;
	}
	.namesAfter,
	.namesBefore {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		overflow: hidden;
		height: 28vh;
	}
	.namesAfter {
		justify-content: flex-start;
	}
	.namesBefore {
		justify-content: flex-end;
	}

	.are-not-mute,
	.name {
		font-size: max(3vw, 40px);
		font-family: var(--knockout);
		text-transform: uppercase;
		line-height: 100%;
	}
	.are-not-mute {
		grid-row: span 3;
	}
	.name {
		text-align: right;
		font-family: var(--knockout);
		color: var(--blue);
		&.grey {
			color: #333333;
		}
	}
</style>
