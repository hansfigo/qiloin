<script>
	import { goto } from '$app/navigation';
</script>

<div class="flex flex-col w-full px-12 py-8">
	<form action="">
		<h1>Register</h1>
		<div>
			<p>Username</p>
			<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
		</div>

		<div>
			<p>Email</p>
			<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
		</div>
		<div>
			<p>Password</p>
			<input type="email" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
		</div>
		<p on:click={() => goto('/login')}>Already Have account?</p>
		<button class="btn btn-neutral">Login</button>
	</form>
</div>
