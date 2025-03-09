<script>
    let username = '';
    let password = '';

    function handleLogin() {
        console.log('Username:', username);
        console.log('Password:', password);
        // Aquí puedes agregar la lógica para manejar el inicio de sesión
    }
</script>

<div class="flex flex-col items-center justify-center h-screen bg-gray-100">
    <form class="flex flex-col w-80 p-6 bg-white shadow-md" on:submit|preventDefault={handleLogin}>
        <input type="text" placeholder="Username" bind:value={username} class="mb-4 p-3 text-lg border rounded" />
        <input type="password" placeholder="Password" bind:value={password} class="mb-4 p-3 text-lg border rounded" />
        <button type="submit" class="p-3 text-lg bg-blue-500 text-white rounded hover:bg-blue-700">Login</button>
    </form>
</div>