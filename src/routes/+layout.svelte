<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Handlee&display=swap" rel="stylesheet" />
</svelte:head>

<!-- <div class="font-inter min-h-screen bg-[#fdfffa] antialiased">
	<main class="max-w-4xl px-10 pt-20">
		{@render children()}
	</main>
</div> -->

<main class="font-inter antialiased">
	{@render children()}
</main>
