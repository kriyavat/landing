<script lang="ts">
	export let title: string;
	export let description: string;
	export let price: string;
	export let imageUrl: string;
	export let href: string;
</script>

<a {href} class="group flex items-center gap-5 rounded-lg p-2">
	<!-- icon -->
	<div
		class="flex aspect-square h-[88px] w-[88px] items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600"
	>
		<img src={imageUrl} alt={title} class="h-[62px] w-[62px]" />
	</div>
	<!-- title, description, price -->
	<div class="flex flex-col gap-2">
		<div>
			<h3 class="text-lg font-semibold">{title}</h3>
			<p class="text-sm text-neutral-600">{description}</p>
		</div>
		<div class="flex items-center justify-between">
			<span class="text-base font-semibold">{price}</span>
		</div>
	</div>
</a>
