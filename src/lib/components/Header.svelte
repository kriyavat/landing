<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<header class="border-b border-gray-200 py-5">
	<div class="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="relative flex h-full items-center justify-between">
			<!-- Left section (empty for centering) -->
			<div class="w-32"></div>

			<!-- Center logo -->
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<a href="/" class="flex items-center">
					<span class="ml-2 text-xl font-semibold text-gray-900">Kriyāvat Labs </span>
				</a>
			</div>

			<!-- Right navigation -->
			<div class="flex items-center space-x-6">
				<a
					href="https://github.com/kriyavat-labs/peakaboo"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-600 hover:text-gray-900"
				>
					<Icon icon="mdi:github" class="h-6 w-6" />
				</a>
			</div>
		</div>
	</div>
</header>
