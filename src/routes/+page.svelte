<script lang="ts">
	import ProductCard from '../components/ProductCard.svelte';

	const products = [
		{
			title: 'Peakaboo',
			description: 'Preview your Mac camera in a click',
			price: 'Free Forever',
			imageUrl: '/images/peakaboo.jpg',
			href: 'https://peakaboo.kriyavat.com'
		}
	];
</script>

<svelte:head>
	<title>Kriyāvat Labs</title>
</svelte:head>

<div class="max-w-7xl px-4 py-8">
	<h1 class="text-2xl font-semibold">Kriyāvat Labs</h1>
	<p class="text-base text-neutral-500">/'kriː.jɑː.vʌt/ - Sanskrit word for "to create"</p>
	<div class="pt-5">
		<p class="text-xl font-semibold">Micro apps and tools for everyone</p>
		<p class="mb-8 text-base text-neutral-500">
			Your go-to SaaS tools, distilled to just the core features that matter. One-time payment.
		</p>

		<div class="grid grid-cols-2 gap-5">
			{#each products as product}
				<ProductCard {...product} />
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	:global(html) {
		background-color: theme(--color-gray-100);
	}
</style>
