<script>
    import { goto } from '$app/navigation';

    function handleLoginClick() {
        goto('/board');
    }
</script>

<div class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center">
    <h1 class="text-6xl mb-5">Bienvenido a Nuestra Plataforma</h1>
    <p class="text-2xl mb-10">La mejor solución para tus necesidades profesionales</p>
    <button on:click={handleLoginClick} class="px-6 py-3 text-xl bg-blue-500 rounded-lg hover:bg-blue-700 transition-colors">Iniciar Sesión</button>
</div>

<div class="flex justify-around py-12 bg-gray-100">
    <div class="text-center max-w-xs">
        <h3 class="mb-5">Funcionalidad 1</h3>
        <p class="text-gray-600">Descripción breve de la funcionalidad 1.</p>
    </div>
    <div class="text-center max-w-xs">
        <h3 class="mb-5">Funcionalidad 2</h3>
        <p class="text-gray-600">Descripción breve de la funcionalidad 2.</p>
    </div>
    <div class="text-center max-w-xs">
        <h3 class="mb-5">Funcionalidad 3</h3>
        <p class="text-gray-600">Descripción breve de la funcionalidad 3.</p>
    </div>
</div>