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

<div class="section-container">
	<section>
		<div class="namesBefore">
			{#if orgsBefore.length > 0}
				{#each orgsBefore as org}
					<div class="name grey {org.name.length > 20 ? 'long' : ''}">
						{org.name}
					</div>
				{/each}
			{/if}
		</div>
		<div class="highlight-name">
			{#if orgs.length > 0}
				<div class="name {orgs[showing].name.length > 20 > 0 ? 'long' : ''}">
					{orgs[showing].name}
				</div>
			{/if}
		</div>
		<div class="namesAfter">
			{#if orgsAfter.length > 0}
				{#each orgsAfter as org}
					<div class="name grey {org.name.length > 20 ? 'long' : ''}">
						{org.name}
					</div>
				{/each}
			{/if}
		</div>
		<div class="are-not-mute">&nbsp;ARE&nbsp;NOT&nbsp;MUTE</div>
	</section>
</div>
<aside>
	<p>
		Are you part of a climate action group? Show the great action you’re taking by adding your name
		to the list.
	</p>
	<a href="https://docs.google.com/forms/d/1-iWnNqaumuQrqM6Kxl_QTm3ya9LviKclLGDPTlGQHO4/"
		>ADD YOUR CLIMATE ACTION GROUP</a
	>
</aside>

<style lang="scss">
	.section-container {
		height: 56vh;
		overflow: hidden;
		display: flex;
		align-items: center;
	}
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
		&.long {
			// font-size: 1vw;
		}
		&.grey {
			color: #333333;
		}
	}

	aside {
		background-color: var(--white);
		margin: 0 -20px;
		width: calc(100% + 40px);
		color: var(--black);
		padding: 80px 20px;
		text-align: center;
		p {
			margin-bottom: 40px;
		}
		a {
			padding: 20px 40px;
			border: 1px solid var(--black);
			color: var(--black);
			text-decoration: none;
			font-family: var(--knockout);
			font-size: max(20px, 2vw);
			&:hover {
				background-color: var(--black);
				color: var(--white);
				cursor: pointer;
			}
		}
	}
</style>
