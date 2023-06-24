<script lang="ts">
	import { goto } from '$app/navigation';
	import { pageLoc } from '../../../store/test.js';

	pageLoc.set('Home')

	export let data;
	const username = data.data.Name;
	const address = data.data.Address;


	const service = [
		{
			name: 'Cuci',
			img : 'washing.svg'
		},
		{
			name: 'Setrika',
			img : 'iron.svg'
		}
	];

	
</script>

<div>
	<div>
<dialog id="my_modal_1" class="modal">
  <form method="dialog" class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn">Close</button>
    </div>
  </form>
</dialog>
	</div>
	<h1 class="text-2xl">Welcome {username} 👋</h1>
	<div class="flex items-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-4 h-4"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
			/>
		</svg>
		{#if address}
		<p>{address}</p>
		{:else}
		<p>Belum di set</p>
		{/if}
	</div>
</div>

<div class="flex gap-10">
	{#each service as serv}
		<div class="card card-compact w-96 bg-base-100 shadow-lg">
			<figure>
				<img src={serv.img} class="h-24 w-24" alt="Shoes" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">{serv.name}</h2>
			</div>
		</div>
	{/each}
</div>



<section>
	<h1 class="text-2xl font-bold mb-4">Pembayaran</h1>
	<div class="card">
		<div class="card-body card-compact bg-base-100 shadow-lg">
			<div class="flex justify-between w-full items-center">
				<h2 class="card-title">Gopay</h2>
				<input type="checkbox" class="toggle" checked />
			</div>
		</div>
	</div>
</section>

<form action="/order" method="post" class="flex w-full">
	<button class="btn  w-full btn-primary text-xl text-white font-bold">Jemput ke rumah</button>
</form>
