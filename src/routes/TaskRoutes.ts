import { Router } from 'express'
import TaskController from '../controllers/TaskController'

const TaskRouter = Router()
const controller = new TaskController()

TaskRouter.get('/', controller.getAll)
TaskRouter.get('/:id', controller.getById)
TaskRouter.post('/', controller.create)
TaskRouter.put('/:id', controller.update)
TaskRouter.delete('/:id', controller.delete)

export default TaskRouter
