<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.metadata.title} | Kriyavat Labs Blog</title>
	<meta name="description" content={data.metadata.description} />
</svelte:head>

<div class="min-h-screen bg-white px-4 py-12 font-[system-ui]">
	<article class="mx-auto max-w-2xl">
		<header class="mb-12 border-b border-gray-100 pb-6">
			<div class="mb-4 flex flex-wrap gap-2">
				{#each data.metadata.categories as category}
					<span class="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600">
						{category}
					</span>
				{/each}
			</div>
			<h1 class="mb-3 text-2xl font-semibold tracking-tight text-gray-900">
				{data.metadata.title}
			</h1>
			<p class="mb-4 text-base text-gray-600">{data.metadata.description}</p>
			<div class="text-xs text-gray-500">
				<time datetime={data.metadata.date}>
					{new Date(data.metadata.date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</time>
			</div>
		</header>

		<div
			class="prose prose-sm prose-headings:font-medium
			prose-headings:tracking-tight prose-h1:text-xl
			prose-h1:font-semibold prose-h2:text-lg
			prose-h2:font-semibold prose-h3:text-base
			prose-h3:font-medium prose-p:text-gray-600
			prose-p:leading-relaxed prose-a:text-blue-600
			prose-a:no-underline hover:prose-a:text-blue-500 prose-blockquote:border-l-2
			prose-blockquote:border-blue-100 prose-blockquote:text-gray-600 prose-blockquote:not-italic prose-strong:text-gray-700
			prose-strong:font-medium prose-ul:my-4
			prose-li:my-0.5 prose-li:marker:text-blue-300 prose-hr:border-gray-100
			prose-code:text-gray-800
			prose-code:bg-gray-50 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:rounded-lg
			prose-pre:border prose-pre:border-gray-100 prose-pre:bg-gray-50/50 prose-pre:p-3 prose-img:rounded-lg
			prose-img:shadow-sm max-w-none"
		>
			<svelte:component this={data.content} />
		</div>

		<footer class="mt-12 border-t border-gray-100 pt-6">
			<a
				href="/blog"
				class="inline-flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-blue-600"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
				>
				Back to blog
			</a>
		</footer>
	</article>
</div>
