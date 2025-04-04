<script lang="ts">
	import ProductCard from '../components/ProductCard.svelte';

	const products = [
		{
			title: 'Peakaboo',
			description: 'Preview your Mac camera in a click',
			price: 'Free Forever',
			imageUrl: '/products/peakaboo.png',
			href: '/peakaboo'
		},
		{
			title: 'Ditto',
			description: 'Ultimate clipboard manager. Copy paste multiple items at once.',
			price: 'Free Forever',
			imageUrl: '/products/ditto.png',
			href: '/ditto'
		}
	];
</script>

<svelte:head>
	<title>Kriyāvat Labs</title>
</svelte:head>

<div class="mx-auto my-10 max-w-2xl rounded-3xl bg-white p-8">
	<div>
		<img src="" alt="" />
		<div>
			<h1 class="text-2xl font-bold">Kriyāvat Labs</h1>
			<p class="text-base text-neutral-500">/'kriː.jɑː.vʌt/ - Sanskrit word for "to create"</p>
		</div>
	</div>
	<div class="py-10">
		<h2 class="text-xl font-bold">Micro apps and tools for everyone</h2>
		<p class="text-base text-neutral-500">
			Your go-to SaaS tools, distilled to just the core features that matter.
		</p>
	</div>
	<div>
		<h4 class="text-sm font-medium text-neutral-500">Explore apps</h4>
		<div class="mt-2 flex flex-col gap-3">
			{#each products as product}
				<ProductCard {...product} />
			{/each}
		</div>
	</div>
	<div class="mt-20 rounded-3xl bg-gradient-to-br from-blue-400 to-rose-400 p-8">
		<h3 class="text-xl font-bold text-white">AI agents for everyone</h3>
		<p class="mt-1 mb-2 w-fit rounded-full bg-white/30 px-2 py-1 text-xs text-neutral-100">
			Coming soon
		</p>
		<p class="text-base text-neutral-100">
			We are actively working towards building ai agents to automate all your daily tasks.
		</p>
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
	:global(html) {
		background-color: theme(--color-gray-100);
	}
</style>
