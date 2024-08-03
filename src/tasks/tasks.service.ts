import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "src/dtos/create-task.dto";
import { UpdateTaskDto } from "src/dtos/update-task.dto";

export interface User {
    id: number,
    name: string,
    age: number
}


@Injectable({})
export class TasksService{

    tasks = []

    getTasks() : any[]{
         return this.tasks
    }

    createTask(task :CreateTaskDto) {
        this.tasks.push({
            ...task,
            id:this.tasks.length + 1
        })
        return task;
    }

    updateTask(task : UpdateTaskDto) {
        return "Acrtualizando Task";
    }

    deleteTask() {
        return "Eliminando Task";
    }

    patchTask() {
        return "Patch Task";
    }
    getTaskById(id : number) {

        const taskFound = this.tasks.find(t => t.id == id)

        if(!taskFound) {
            return new NotFoundException(`La tarea con id: ${id} no se encontró`)
        }
        return taskFound
    }

}