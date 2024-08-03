import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dtos/create-task.dto';
import { UpdateTaskDto } from 'src/dtos/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller("tasks")
@ApiTags("tasks")
export class TaskController {
  constructor(private tasksService: TasksService) {}
  @Get()
  @ApiOperation({summary: "Get all Tasks"})
  @ApiResponse({status:200, description: "Retornar todas las tareas"})
  @ApiResponse({status: 403, description: "Prohibido"})
  getAllTasks(@Query() query : any) {
    console.log(query)
    return this.tasksService.getTasks();
  }

  @Post()
  createTask(@Body() task :CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @Put()
  updateTask(@Body() task :UpdateTaskDto) {
    return this.tasksService.updateTask(task);
  }

  @Delete()
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Patch()
  updateTaskStatus() {
    return this.tasksService.patchTask();
  }

  @Get('/:id')
  getTaskById(@Param("id") id : any){
    return this.tasksService.getTaskById(id)
  }

}
