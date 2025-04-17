<script lang="ts">
	import Icon from '@iconify/svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>Ditto – Smarter Clipboard for macOS</title>
</svelte:head>

<div class="font-inter min-h-screen bg-white">
	<Header />
	<div class="pt-20 px-4 max-w-3xl mx-auto text-center">
		<img src="/products/ditto.png" alt="Ditto Icon" class="mx-auto h-[180px] w-[180px] rounded-xl shadow-md" />

		<h1 class="mt-6 text-4xl font-bold tracking-tight text-gray-900">Ditto</h1>
		<p class="mt-2 text-lg text-gray-600">
			Smarter copy & paste. Instantly access your last 8 copied items — right from your keyboard.
		</p>

		<div class="mt-3 flex justify-center gap-2">
			<span class="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600">macOS</span>
			<span class="rounded-full bg-green-50 px-3 py-1 text-sm text-green-600">Free</span>
		</div>

		<div class="mt-6">
			<a href="https://github.com/kriyavat/ditto/releases/latest" target="_blank" rel="noopener noreferrer">
				<button class="rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-semibold text-sm shadow">
					Download on GitHub
				</button>
			</a>
		</div>

		<!-- Features Section -->
		<section class="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-gray-700">
			<div class="bg-gray-50 rounded-xl p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">📋 Clipboard Buffer</h3>
				<p class="text-sm mt-1">Stores your last 8 copied items — text, images, file URLs — with zero disk usage.</p>
			</div>
			<div class="bg-gray-50 rounded-xl p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">⌨️ Quick Paste Shortcuts</h3>
				<p class="text-sm mt-1">Use ⌘⌥V to cycle through the buffer or ⌘⌥1–8 to paste specific slots instantly.</p>
			</div>
			<div class="bg-gray-50 rounded-xl p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">🔄 FIFO / LIFO Modes</h3>
				<p class="text-sm mt-1">Choose how items are pasted: oldest-first or newest-first — toggle in one click.</p>
			</div>
			<div class="bg-gray-50 rounded-xl p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">🧩 Lightweight HUD</h3>
				<p class="text-sm mt-1">A simple overlay confirms what you pasted — clean, fast, and non-intrusive.</p>
			</div>
			<div class="bg-gray-50 rounded-xl p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">🔐 Private by Design</h3>
				<p class="text-sm mt-1">RAM-only clipboard. No cloud, no logging, no background bloat. Just speed.</p>
			</div>
			<div class="bg-gray-50 rounded-xl p-4 shadow-sm">
				<h3 class="font-semibold text-gray-900">⚡ Minimal Menu UI</h3>
				<p class="text-sm mt-1">A tiny menu bar icon gives you full control — view buffer, toggle modes, and more.</p>
			</div>
		</section>

		<!-- Story / About Ditto -->
		<section class="mt-20 max-w-2xl mx-auto text-left text-gray-800">
			<h2 class="text-2xl font-bold mb-2">Why Ditto?</h2>
			<p class="text-base leading-relaxed">
				We built Ditto out of frustration — copying multiple things while writing code, creating content, or testing forms was a mess. We wanted a clipboard that understood the flow of work and let us paste like pros.
			</p>
			<p class="mt-4 text-base leading-relaxed">
				Ditto is perfect for developers, designers, writers, and anyone who wants smarter paste control without leaving the keyboard. No learning curve, no clutter. Just copy, paste, done.
			</p>
		</section>

		<!-- FAQ Section -->
		<section class="mt-16 max-w-2xl mx-auto text-left text-gray-800">
			<h2 class="text-2xl font-bold mb-4">FAQs</h2>

			<div class="space-y-6">
				<div>
					<h3 class="font-semibold">Does Ditto save my clipboard history?</h3>
					<p class="text-sm text-gray-600">No — it only holds the last 8 items in memory. Nothing is saved to disk or synced online.</p>
				</div>

				<div>
					<h3 class="font-semibold">Can I paste specific items?</h3>
					<p class="text-sm text-gray-600">Yes. Use ⌘⌥1 to ⌘⌥8 to instantly paste a specific slot from the buffer.</p>
				</div>

				<div>
					<h3 class="font-semibold">Will it work with images?</h3>
					<p class="text-sm text-gray-600">Yes — images copied to clipboard are supported and can be pasted like text.</p>
				</div>

				<div>
					<h3 class="font-semibold">Does it use any CPU when idle?</h3>
					<p class="text-sm text-gray-600">Nope. Ditto is optimized for near-zero idle usage. It only activates when you copy or paste.</p>
				</div>

				<div>
					<h3 class="font-semibold">Is Ditto really free?</h3>
					<p class="text-sm text-gray-600">Yes! 100% free and open-source under the MIT License. No ads, no tracking.</p>
				</div>
			</div>
		</section>

		<!-- Credits + Footer -->
		<div class="mt-16 text-sm text-gray-500">
			Built by <a href="https://github.com/rahuldotbiz" class="underline">rahuldotbiz</a> & <a href="https://github.com/rohan-kiratsata" class="underline">rohan-kiratsata</a> to bring sanity to your clipboard.<br />
			Open source under MIT. Inspired by dev workflows and that “where’s my copied thing?” feeling.
		</div>
	</div>
</div>
