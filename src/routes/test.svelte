<script>
	import { onMount } from 'svelte';

	let text;
	let theme;

	onMount(async () => {
		text = getQueryParam('text');
		theme = getQueryParam('theme');
	});

	function getQueryParam(variable) {
		var query = window.location.search.substring(1);
		var vars = query.split('&');
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=');
			if (decodeURIComponent(pair[0]) == variable) {
				console.log(decodeURIComponent(pair[1]));
				return decodeURIComponent(pair[1]);
			}
		}
	}
</script>

<section>
	Original Tile
	<div id="image-tile" class="tile {theme ? theme : ''}">
		<div class="spacer" />
		<div class="text">{text ? text : 'waiting'}</div>
		<div class="hashtag">#NOTMUTEONCLIMATE</div>
	</div>
</section>

<style lang="scss">
	section {
		color: white;
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
		line-height: 90%;

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
	}

	#image-tile {
		width: 200px;
		height: 200px;
		padding: 10px;
		.text {
			font-size: 25px;
			line-height: 100%;
		}
		.hashtag {
			font-size: 12px;
		}
		.spacer {
			height: 12px;
		}
	}
</style>
