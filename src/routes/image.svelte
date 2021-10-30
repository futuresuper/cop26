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
	<div id="image-tile" class="tile {theme ? theme : 'ball'}">
		<div class="spacer" />
		<div class="text">
			{text ? text : 'LET’S GET AUSTRALIA’S TRUE CLIMATE LEADERS TRENDING DURING COP26.'}
		</div>
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
		&.rally {
			background-image: url('/images/rally.png');
			background-size: cover;
			color: white;
		}
		&.white {
			background-image: url('/images/bw-smudge.png');
			background-size: cover;
			color: white;
		}
		&.black {
			background-color: black;
			color: white;
			border: 1px solid white;
		}
		&.blue {
			background-color: var(--blue);
			color: white;
		}
	}

	#image-tile {
		width: 800px;
		height: 800px;
		padding: 40px;
		.text {
			font-size: 100px;
			line-height: 100%;
		}
		.hashtag {
			font-size: 50px;
		}
		.spacer {
			height: 50px;
		}
	}
</style>
