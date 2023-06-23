<script lang="ts">
</script>

<div class="flex flex-col justify-center items-center w-full px-12 py-8">
    <img src="icon.png" class="w-52" alt="">
	<form method="POST" class="flex flex-col gap-8" action="">
        <h1 class="text-2xl font-bold">Login</h1>
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
		<div class="flex gap-2">
			<p>Belum Punya akun?</p>
			<a class="font-bold" href="/register">Daftar</a>
		</div>
		<button class="btn btn-neutral">Login</button>
	</form>
</div>
