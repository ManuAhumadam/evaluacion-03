import { Request, Response } from "express"
import { CreateTaskDTO, TaskDTO, UpdateTaskDTO } from "../models/dto/TaskDTO"
import { UserTokenPayload } from '../models/dto/UserDTO'
import TaskRepository from "../models/repositories/TaskRepository"
import { createTaskSchema, updateTaskSchema } from "../models/validators/TaskSchemas"

export default class TaskController {
    public readonly getAll = async (req: Request, res: Response) => {
        const user = req.user as UserTokenPayload
        const repository = new TaskRepository(user.sub)
        const Task: TaskDTO[] = await repository.findAll()
        res.json(Task)
    }

    public readonly getById = async (req: Request, res: Response) => {
        const user = req.user as UserTokenPayload
        const { id } = req.params
        const repository = new TaskRepository(user.sub)
        const Task = await repository.findById(parseInt(id))
        res.json(Task)
    }

    public readonly create = async (req: Request, res: Response) => {
        const Task = req.body as CreateTaskDTO
        
        try{
            await createTaskSchema.validateAsync(Task)
        } catch (error) {
            res.status(400).json({ massage: error.massage })
            return
        }
      
        const user = req.user as UserTokenPayload
        const repository = new TaskRepository(user.sub)

        const newTask = await repository.create(Task)

        res.json(newTask)
    }
    
    public readonly update = async (req: Request, res: Response) => {
        const { id } = req.params
        const Task = req.body as UpdateTaskDTO

        try{
            await updateTaskSchema.validateAsync(Task)
        } catch (error) {
            res.status(400).json({ massage: error.massage })
        }
        
        const user = req.user as UserTokenPayload
        const repository = new TaskRepository(user.sub)
        await repository.update(parseInt(id),Task)
        
        res.sendStatus(204)
    }

    public readonly delete = async (req: Request, res: Response) => {
        const { id } = req.params

        const user = req.user as UserTokenPayload
        const repository = new TaskRepository(user.sub)
        await repository.delete(parseInt(id))

        res.sendStatus(204)
    }
}