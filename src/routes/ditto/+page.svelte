<script lang="ts">
	import Icon from '@iconify/svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Ditto - Ultimate clipboard manager</title>
</svelte:head>

<div class="font-inter min-h-screen bg-white">
	<Header />
	<div class="pt-16">
		<div class="flex flex-col items-center gap-4 text-center">
			<img src="/products/ditto.png" alt="Ditto" class="h-[200px] w-[200px]" />
			<div>
				<h1 class="text-2xl font-bold">Ditto</h1>
				<p class="text-gray-500">Ultimate clipboard manager</p>
			</div>
			<div>
				<button class="rounded-full bg-blue-500 px-4 py-2 font-semibold text-white">
					<a href="#">Coming Soon</a>
				</button>
			</div>
		</div>
	</div>
</div>
