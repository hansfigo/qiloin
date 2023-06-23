<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		const timeout = 1000;
		setTimeout(() => {
			goto('/login');
		}, timeout);
	});
</script>

<div class="bg-primary/25s h-full">
	<div class="flex flex-col justify-center items-center  h-full w-full px-12 py-8">
		<img src="icon.png" alt="">
		<span class="loading loading-dots loading-md"></span>
	</div>
</div>
