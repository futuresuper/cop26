<script>
	import '../app.css';
	const title = 'Not Mute On Climate';
	const desc = 'Share your action to inspire action.';
	const image = 'https://www.futuresuper.com.au/images/future-super-og.png';
</script>

<svelte:head>
	<title>{title}</title>
	<meta charset="UTF-8" />
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1.0 viewport-fit=cover"
		shrink-to-fit="no"
	/>
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={image} />
	<meta property="og:type" content="website" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={desc} />
	<meta property="twitter:image" content={image} />
	<meta name="twitter:card" content="summary_large_image" />
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="https://www.futuresuper.com.au/images/favicon/favicon-32.png"
	/>
	<link
		rel="apple-touch-icon"
		href="https://www.futuresuper.com.au/images/favicon/apple-touch-icon.png"
	/>
	<script>
		// prettier-ignore
		!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="eQR3natt50TEUlf2gEcCSbBn4fhmXjZQ";;analytics.SNIPPET_VERSION="4.15.3";
    analytics.load("eQR3natt50TEUlf2gEcCSbBn4fhmXjZQ");
    analytics.page();
    }}();
	</script>
</svelte:head>

<slot />
