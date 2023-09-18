import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO, DeleteTaskDTO, UpdateTask } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  private succes = {
    message: 'Operation completed',
    code: 0,
    body: null,
  };

  private errors = {
    message: 'Operation Failed',
    code: 0,
    body: null,
  };

  @Get()
  getAllTask() {
    /* return "Hi, this is my first message in nestjs"; */
    try {
      this.succes.body = this.taskService.getAllTasks();
      this.succes.code = 200;

      return this.succes;
    } catch (error) {
      this.errors.body = error.message;
      this.errors.code = error.code;

      return this.errors;
    }
  }

  @Get(':id')
  getTaskById(@Param() newTask: DeleteTaskDTO) {
    try {
      this.succes.body = this.taskService.getTaskById(newTask.id);
      this.succes.code = 200;

      return this.succes;
    } catch (error) {
      this.errors.body = error.message;
      this.errors.code = error.code;

      return this.errors;
    }
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDTO) {
    try {
      this.succes.body = this.taskService.createTask(
        newTask.title,
        newTask.description,
      );

      this.succes.code = 201;

      return this.succes;
    } catch (error) {
      this.errors.body = error.message;
      this.errors.code = error.code;

      return this.errors;
    }
  }

  @Delete(':id')
  deleteTask(@Param() newTask: DeleteTaskDTO) {
    try {
      this.succes.body = this.taskService.deleteTask(newTask.id);

      this.succes.code = 200;

      return this.succes;
    } catch (error) {
      this.errors.body = error.message;
      this.errors.code = error.code;

      return this.errors;
    }
  }

  @Put(':id')
  updateTask(@Param() newTask: any){
    
  }

}

  /* @Put(':id')
  updateTask(@Param() @Body() newTask: UpdateTask) {
    try {
      if (!newTask.title && !newTask.description && !newTask.status){
        this.errors.message = "Required fild empty";
        this.errors.code = 404;

        return this.errors
      }else{
          this.succes.body = this.taskService.updateTask(
            newTask.id,
            newTask.title,
            newTask.description,
            newTask.status,
          );
  
        this.succes.code = 200;
  
        return this.succes;
      }
    } catch (error) {
      this.errors.body = error.message;
      this.errors.code = error.code;

      return this.errors;
    }
  } */