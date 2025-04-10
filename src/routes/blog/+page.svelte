<script lang="ts">
	import { page } from '$app/stores';

	interface PostMetadata {
		title: string;
		description: string;
		date: string;
		categories: string[];
		published: boolean;
	}

	interface Post {
		metadata: PostMetadata;
		default: unknown;
	}

	const posts = import.meta.glob<Post>('./posts/*.md');
</script>

<svelte:head>
	<title>Blog | Kriyavat Labs</title>
	<meta name="description" content="Kriyavat Labs Blog - Thoughts and insights" />
</svelte:head>

<div class="min-h-screen bg-white px-4 py-16 font-[system-ui]">
	<div class="mx-auto max-w-2xl">
		<header class="mb-16 border-b border-gray-100 pb-8">
			<h1 class="mb-2 text-3xl font-semibold tracking-tight text-gray-900">Blog</h1>
			<p class="text-base text-gray-600">Thoughts and insights from Kriyavat Labs</p>
		</header>

		<div class="space-y-12">
			{#await Promise.all(Object.entries(posts).map( ([path, loader]) => loader().then( (post) => ({ path, post }) ) )) then loadedPosts}
				{#each loadedPosts as { path, post }}
					{#if post.metadata?.published}
						<article class="group">
							<a
								href={`/blog/${path.replace('./posts/', '').replace('.md', '')}`}
								class="block space-y-3 hover:no-underline"
							>
								<div class="text-sm text-gray-500">
									<time datetime={post.metadata.date}>
										{new Date(post.metadata.date).toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'long',
											day: 'numeric'
										})}
									</time>
								</div>

								<h2
									class="text-xl font-medium tracking-tight text-gray-900 group-hover:text-blue-600"
								>
									{post.metadata.title}
								</h2>

								<p class="text-base leading-relaxed text-gray-600">{post.metadata.description}</p>

								{#if post.metadata.categories?.length}
									<div class="flex flex-wrap gap-2">
										{#each post.metadata.categories as category}
											<span class="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
												{category}
											</span>
										{/each}
									</div>
								{/if}
							</a>
						</article>
					{/if}
				{/each}
			{/await}
		</div>
		<a href="/" class="pt-5 text-sm text-gray-600 hover:text-blue-600">← Back to home</a>
	</div>
</div>
