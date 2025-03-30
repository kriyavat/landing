<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<title>Peakaboo - Preview your Mac camera in a click</title>
</svelte:head>

<div class="font-inter min-h-screen bg-white">
	<section class="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center justify-center text-center">
			<!-- App Icon -->
			<div
				class="mb-6 overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-purple-600 to-blue-600 p-6 shadow-lg"
			>
				<Icon icon="solar:ghost-outline" class="h-16 w-16 text-white" />
			</div>

			<!-- Rating -->
			<div class="flex items-center gap-2">
				<div
					class="animate-gradient mb-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 p-[1px]"
				>
					<div class="rounded-full bg-white px-4 py-1">
						<span
							class="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-sm font-medium text-transparent"
							>Newly Launched</span
						>
					</div>
				</div>
				<div class="mb-4 flex items-center gap-2 rounded-full border border-blue-300 px-4 py-1">
					<span class="text-sm font-medium text-blue-500">macOS</span>
				</div>
			</div>

			<!-- App Name and Description -->
			<h1 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Peakaboo</h1>
			<p class="mb-8 text-xl text-gray-600">Preview your Mac camera in a click</p>

			<!-- Download via Setapp -->
			<div class="flex flex-col items-center gap-4">
				<a
					href="#"
					class="group relative inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-lg font-medium text-white hover:bg-gray-900 focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none"
				>
					Download Peakaboo
				</a>
				<div class="text-center">
					<p class="font-medium text-black">Free Forever</p>
				</div>
			</div>

			<!-- Verification Badge -->
			<!-- <div class="mt-8 flex items-center gap-2 text-sm text-gray-600">
				<Icon icon="mdi:shield-check" class="h-5 w-5" />
				<span>Notarized by Apple.</span>
				<span class="text-gray-400"
					>This app was scanned for malicious software and none was found.</span
				>
			</div> -->

			<!-- macOS Version -->
			<!-- <div class="mt-4 text-sm text-gray-600">
				<span>macOS version is available.</span>
			</div> -->
		</div>
	</section>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	.animate-gradient {
		background-size: 200% 200%;
		animation: gradient 4s ease infinite;
	}
</style>
