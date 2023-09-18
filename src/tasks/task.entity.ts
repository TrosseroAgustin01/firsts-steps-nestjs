export enum TaskStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE",
}

export class Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}

  
  // Ahora, el arreglo contiene 10 objetos con diferentes valores para las propiedades.
  

/* const task = new Task();

task.id = task.id */