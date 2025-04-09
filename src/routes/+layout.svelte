<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { pageview } from '$lib/gtag';
	import { onMount } from 'svelte';

	let { children } = $props();

	// Track page views
	$effect(() => {
		if (browser) {
			pageview($page.url.pathname);
		}
	});
</script>

<main class="antialiased">
	{@render children()}
</main>
