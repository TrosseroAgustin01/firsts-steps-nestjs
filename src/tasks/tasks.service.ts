import { Injectable } from '@nestjs/common';
import { Task,TaskStatus } from './task.entity'
import { v4 } from "uuid";

/* let tasksArray = tasks; */

@Injectable()
export class TasksService {

    private tasks : Task[] = [
        {
        id: "1",
        title: "Tarea 1",
        description: "Descripción de la Tarea 1",
        status: TaskStatus.PENDING
        },
        {
        id: "2",
        title: "Tarea 2",
        description: "Descripción de la Tarea 2",
        status: TaskStatus.IN_PROGRESS
        },
        {
        id: "3",
        title: "Tarea 3",
        description: "Descripción de la Tarea 3",
        status: TaskStatus.DONE
        },
        {
        id: "4",
        title: "Tarea 4",
        description: "Descripción de la Tarea 4",
        status: TaskStatus.PENDING
        },
        {
        id: "5",
        title: "Tarea 5",
        description: "Descripción de la Tarea 5",
        status: TaskStatus.IN_PROGRESS
        }
    ];

    getAllTasks(){
        let toJson = JSON.stringify(this.tasks);
        return toJson;
    }

    getTaskById(id: string): Task{
        const index = this.tasks.findIndex((product) => product.id === id)
        return this.tasks[index];
    }

    createTask(title: string, description: string){
        const task = {
            id: String(v4()),
            title,
            description,
            status: TaskStatus.PENDING
        }
        
        this.tasks.push(task);
        return JSON.stringify(task);
    }
    updateTask(id: string){

    }
    deleteTask(id: string) : Task {
        const index = this.tasks.findIndex((product) => product.id === id)
        const taskDelete = this.tasks[index];
        this.tasks.splice(index, 1) // al remplazarlo por la nada el methodo directamente elimina aquella tarea
        return taskDelete;
    }
}
