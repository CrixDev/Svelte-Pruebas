import { writable } from "svelte/store";

export const lists = writable([
  {
    id: "todo",
    title: "Pendiente",
    tasks: [
      { id: "1", title: "Tarea 1", parentId: "todo" },
      { id: "2", title: "Tarea 2", parentId: "todo" }
    ]
  },
  {
    id: "doing",
    title: "En progreso",
    tasks: []
  },
  {
    id: "done",
    title: "Completado",
    tasks: []
  }
]);
