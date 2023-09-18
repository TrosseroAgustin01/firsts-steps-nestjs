import { TaskStatus } from "../task.entity";

export class CreateTaskDTO {
    title: string;
    description: string;
}

export class DeleteTaskDTO {
    id: string;
}

export class UpdateTask {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}