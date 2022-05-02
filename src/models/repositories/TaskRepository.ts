import { Task, PrismaClient } from "@prisma/client";
import { CreateTaskDTO, UpdateTaskDTO, TaskDTO } from "../dto/TaskDTO"

const prisma = new PrismaClient()

export default class TaskRepository {
  private userId: number

  constructor (userId: number) {
    this.userId = userId
  }
  
  public readonly findAll = async (): Promise<TaskDTO[]> => {
    const Task: Task[] = await prisma.Task.findMany({
      where: {
        userId: this.userId
      }
    })
    return Task
  }
  
  public readonly findById = async (id: number): Promise<TaskDTO | undefined> => {
    const Task = await prisma.Task.findFirst({
      where: {
        id
      }
    })

    if (!Task) return
    
    return Task
  }

  public readonly create = async (Task: CreateTaskDTO): Promise<TaskDTO> => {
    const newTask = await prisma.Task.create({
      data: {
        ...Task,
        birth: new Date(Task.birth).toISOString(),
        userId: this.userId
      }
    })

    return newTask
  }

  public readonly update = async (id: number, Task: UpdateTaskDTO): Promise<void> => {
    await prisma.Task.update({
      where: {
        id
      },
      data: {
        ...Task,
        birth: Task.birth ? new Date(Task.birth).toISOString() : undefined
      }
    })
  }

  public readonly delete = async (id: number): Promise<void> => {
    await prisma.Task.delete({
      where: {
        id
      }
    })
  }
}