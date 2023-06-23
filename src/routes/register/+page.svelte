<script lang="ts">
</script>

<div class="flex flex-col w-full px-12 py-8">
	<form method="POST" class="flex flex-col gap-8" action="">
		<h1 class="text-2xl font-bold">Register</h1>
		<div>
			<p>Nama</p>
			<input
				name="name"
				type="text"
				placeholder="Type here"
				class="input input-bordered w-full max-w-xs"
			/>
		</div>
		<div>
			<p>Email</p>
			<input
				name="email"
				type="email"
				placeholder="Type here"
				class="input input-bordered w-full max-w-xs"
			/>
		</div>
		<div>
			<p>Password</p>
			<input
				name="password"
				type="password"
				placeholder="Type here"
				class="input input-bordered w-full max-w-xs"
			/>
		</div>
		<div>
			<p>No telp</p>
			<input
				name="phone"
				type="text"
				placeholder="Type here"
				class="input input-bordered w-full max-w-xs"
			/>
		</div>
		<div class="flex gap-2">
			<p>Sudah punya akun?</p>
			<a class="font-bold" href="/login">login</a>
		</div>
		<button class="btn btn-neutral">Register</button>
	</form>
</div>
