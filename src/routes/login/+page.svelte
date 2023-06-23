<script lang="ts">

	import { goto } from "$app/navigation";

    let email : string = ''
    let Password : string = ''
</script>
<div class="flex flex-col w-full  px-12 py-8">
	<form action="">
		<h1>Login</h1>
        <div>
            <p>Email</p>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </div>
        <div>
            <p>Password</p>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </div>
        <p on:click={()=> goto('/register')}>Create new Account</p>
        <button class="btn btn-neutral">Login</button>
	</form>
</div>
