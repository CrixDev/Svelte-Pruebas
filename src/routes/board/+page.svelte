<script>
    import { dndzone } from "svelte-dnd-action";
    import { lists } from "../store/list";
    import { get } from "svelte/store";

    let board;

    function handleDrop(event) {
        const { items, info } = event.detail;
        lists.update((currentLists) => {
            const sourceList = currentLists.find(list => list.id === info.source.id);
            const targetList = currentLists.find(list => list.id === info.target.id);

            // Actualiza el parentId de las tareas movidas
            items.forEach(item => {
                if (item.parentId === info.source.id) {
                    item.parentId = info.target.id;
                }
            });

            // Actualiza las tareas en la lista de origen
            sourceList.tasks = items.filter(item => item.parentId === sourceList.id);

            // Actualiza las tareas en la lista de destino
            targetList.tasks = items.filter(item => item.parentId === targetList.id);

            return currentLists;
        });
    }
</script>

<div bind:this={board} class="flex space-x-4 p-4">
    {#each $lists as list}
        <div class="p-4 bg-gray-200 w-1/3">
            <h2 class="text-xl font-bold mb-2">{list.title}</h2>
            <div use:dndzone={{ items: list.tasks, dropFromOthers: true }} on:consider={handleDrop} on:finalize={handleDrop}>
                {#each list.tasks as task}
                    <div class="p-2 bg-white border mt-2">{task.title}</div>
                {/each}
            </div>
        </div>
    {/each}
</div>