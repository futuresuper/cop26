import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';

export default {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter(), // currently the adapter does not take any options
		target: '#svelte'
	}
};
