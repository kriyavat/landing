<script lang="ts">
	import Icon from '@iconify/svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Peekaboo – Instant Camera Access from Your Mac Menu Bar</title>
</svelte:head>

<div class="font-inter min-h-screen bg-white">
	<Header />
	<div class="pt-20 px-4 max-w-3xl mx-auto text-center">
		<img src="/products/peakaboo.png" alt="Peekaboo Icon" class="mx-auto h-[180px] w-[180px] rounded-xl shadow-md" />

		<h1 class="mt-6 text-4xl font-bold tracking-tight text-gray-900">Peekaboo</h1>
		<p class="mt-2 text-lg text-gray-600">
			Instant access to your Mac’s camera. Right from the menu bar.
		</p>

		<div class="mt-3 flex justify-center gap-2">
			<span class="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600">macOS</span>
			<span class="rounded-full bg-green-50 px-3 py-1 text-sm text-green-600">Free</span>
		</div>

		<div class="mt-6">
			<a href="https://github.com/kriyavat/peakaboo/releases/latest" target="_blank" rel="noopener noreferrer">
				<button class="rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-semibold text-sm shadow">
					Download on GitHub
				</button>
			</a>
		</div>

		<!-- Features Section -->
		<section class="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-gray-700">
			<div class="bg-gray-50 rounded-xl p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">📷 Live Camera Preview</h3>
				<p class="text-sm mt-1">Access your camera instantly from the macOS menu bar popover.</p>
			</div>
			<div class="bg-gray-50 rounded-xl p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">⌨️ Native Shortcuts</h3>
				<p class="text-sm mt-1">Command+Q to quit, spacebar to snap a photo, and more.</p>
			</div>
			<div class="bg-gray-50 rounded-xl p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">✨ Polished Glass UI</h3>
				<p class="text-sm mt-1">Edge-to-edge preview with a smooth, translucent design.</p>
			</div>
			<div class="bg-gray-50 rounded-xl p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">🔍 Smart Camera Control</h3>
				<p class="text-sm mt-1">Starts and stops automatically based on app focus.</p>
			</div>
			<div class="bg-gray-50 rounded-xl p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">📸 One-Key Photo Capture</h3>
				<p class="text-sm mt-1">Take photos instantly, with clipboard and autosave support coming soon.</p>
			</div>
			<div class="bg-gray-50 rounded-xl p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">🏠 Always-On-Top Mode</h3>
				<p class="text-sm mt-1">Keep the camera window visible even while multitasking.</p>
			</div>
		</section>
<!-- Story / About Peekaboo -->
<section class="mt-20 max-w-2xl mx-auto text-left text-gray-800">
	<h2 class="text-2xl font-bold mb-2">Why Peekaboo?</h2>
	<p class="text-base leading-relaxed">
	Peekaboo was built out of a simple, real need — checking our appearance before hopping into back-to-back Zoom calls without fumbling for apps like Photo Booth. We wanted something that just works, instantly, from the menu bar. No bloat, no distractions.
	</p>
	<p class="mt-4 text-base leading-relaxed">
	It’s perfect for remote workers, designers on client calls, or anyone who wants a quick confidence check before going live. It’s also a great tool for developers building apps that use the camera — test your setup in a click.
	</p>
</section>

<!-- FAQ Section -->
<section class="mt-16 max-w-2xl mx-auto text-left text-gray-800">
	<h2 class="text-2xl font-bold mb-4">FAQs</h2>

	<div class="space-y-6">
		<div>
			<h3 class="font-semibold">Does Peekaboo run in the background?</h3>
			<p class="text-sm text-gray-600">Yes — it lives in your menu bar and uses almost no memory until opened. The camera session only runs when the app is in focus.</p>
		</div>

		<div>
			<h3 class="font-semibold">Is my camera always on?</h3>
			<p class="text-sm text-gray-600">Nope. Peekaboo only starts your camera when you open the preview window. It automatically stops when you close it or switch focus.</p>
		</div>

		<div>
			<h3 class="font-semibold">Can I take photos?</h3>
			<p class="text-sm text-gray-600">Yes — press the spacebar while the app is active. Future updates will let you autosave and copy to clipboard instantly.</p>
		</div>

		<div>
			<h3 class="font-semibold">Will it show the green camera light?</h3>
			<p class="text-sm text-gray-600">Yes. Peekaboo uses Apple’s AVFoundation framework, so your privacy light turns on as expected when the camera is active.</p>
		</div>

		<div>
			<h3 class="font-semibold">Is it really free?</h3>
			<p class="text-sm text-gray-600">100%. No hidden pricing, no upsells. It’s open source under MIT — use it, fork it, or build on top of it.</p>
		</div>
	</div>
</section>

		<!-- Credits + Footer -->
		<div class="mt-16 text-sm text-gray-500">
			Built by <a href="https://github.com/rahuldotbiz" class="underline">rahuldotbiz</a> & <a href="https://github.com/rohan-kiratsata" class="underline">rohan-kiratsata</a> on a weekend hackathon.<br />
			Open source under MIT. Inspired by Photo Booth, Hand Mirror, and that Zoom call panic.
		</div>
	</div>
</div>
