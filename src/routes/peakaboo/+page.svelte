<script lang="ts">
	import Icon from '@iconify/svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Peakaboo - Preview your Mac camera in a click</title>
</svelte:head>

<div class="font-inter min-h-screen bg-white">
	<Header />
	<div class="pt-16">
		<div class="flex flex-col items-center gap-4 text-center">
			<img src="/products/peakaboo.png" alt="Peakaboo" class="h-[200px] w-[200px]" />
			<div class="flex flex-col items-center gap-1">
				<h1 class="text-2xl font-bold">Peakaboo</h1>
				<p class="text-gray-500">Preview your Mac camera in a click</p>
				<!-- badge -->
				<div class="mt-2 flex items-center gap-2">
					<p class="w-fit rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-500">macOS</p>
					<p class="w-fit rounded-full bg-green-50 px-2 py-1 text-xs text-green-500">Free</p>
				</div>
			</div>
			<div>
				<button class="rounded-full bg-blue-500 px-4 py-2 font-semibold text-white">
					<a href="https://github.com/kriyavat/peakaboo/releases/latest" target="_blank">Download</a
					>
				</button>
			</div>
		</div>
	</div>
</div>
