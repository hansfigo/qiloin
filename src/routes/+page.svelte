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

<div>
	<div class="flex flex-col w-full px-12 py-8">
		<p>Ini Splash SCreen</p>
	</div>
</div>
