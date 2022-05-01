import { Router } from 'express'
import PetController from '../controllers/PetController'

const petRouter = Router()
const controller = new PetController()

petRouter.get('/', controller.getAll)
petRouter.get('/:id', controller.getById)
petRouter.post('/', controller.create)
petRouter.put('/:id', controller.update)
petRouter.delete('/:id', controller.delete)

export default petRouter
