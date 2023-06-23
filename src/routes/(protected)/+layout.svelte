<script>
	import MyFooter from '../../components/MyFooter.svelte';
</script>

<div class="h-screen w-screen relative">
	<section class="flex relative flex-col min-h-full w-full justify-between px-6 pt-10 pb-24">
		<slot />
	</section>
	<MyFooter />
</div>
