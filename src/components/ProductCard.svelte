<script lang="ts">
	export let title: string;
	export let description: string;
	export let price: string;
	export let imageUrl: string;
	export let href: string;
</script>

<a {href} class="group flex cursor-pointer items-center justify-between">
	<div class="flex items-center gap-2">
		<img src={imageUrl} alt={title} width="84" height="84" class="rounded-lg object-cover" />

		<div class="flex flex-col gap-1">
			<div>
				<h3 class="text-lg font-semibold">{title}</h3>
				<p class="text-sm text-neutral-600">{description}</p>
			</div>
			<div class="flex items-center justify-between">
				<span class="text-sx font-semibold">{price}</span>
			</div>
		</div>
	</div>
	<div>
		<button
			aria-label="Get it"
			class="aspect-square cursor-pointer rounded-full bg-blue-500 p-2 text-xs font-semibold"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#fff"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
				><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg
			>
		</button>
	</div>
</a>
