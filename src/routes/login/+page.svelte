<script>
    import { fly, fade } from 'svelte/transition';
    let username = '';
    let password = '';
    let formVisible = true;
    let isLoading = false;

    function handleLogin() {
        console.log('Username:', username);
        console.log('Password:', password);
        isLoading = true;
        setTimeout(() => {
            formVisible = false;
            isLoading = false;
            // Aquí puedes agregar la lógica para manejar el inicio de sesión
        }, 2000); // Simula un retraso de 2 segundos
    }
</script>

<div class="flex flex-col items-center justify-center h-screen bg-gray-100 in:fade={{ duration: 700 }}">
    {#if formVisible}
        <form class="flex flex-col w-80 p-6 bg-white shadow-md" on:submit|preventDefault={handleLogin} in:fly={{ y: 200, duration: 500 }} out:fly={{ x: 800, duration: 500 }}>
            <input type="text" placeholder="Username" bind:value={username} class="mb-4 p-3 text-lg border rounded" />
            <input type="password" placeholder="Password" bind:value={password} class="mb-4 p-3 text-lg border rounded" />
            <button type="submit" class="p-3 text-lg bg-blue-500 text-white rounded hover:bg-blue-700">Login</button>
        </form>
    {/if}
    {#if isLoading}
        <div class="mt-4 text-lg text-blue-500">Loading...</div>
    {/if}

    {#if 
    !isLoading && !formVisible}
    <div class="fixed">
        <div class="flex flex-col items-center" in:fade={{ duration: 1000 }}>
            <h1 class="text-3xl font-bold text-blue-500">Welcome {username}!</h1>
            <p class="mt-4 text-lg">You are now logged in.</p>
        </div>
    </div>
        {/if}

</div>