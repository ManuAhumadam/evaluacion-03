import { Router } from 'express'
import tokenValidator from '../middlewares/tokenValidator'
import authRoutes from './authRoutes'
import healthRoutes from './healthRoutes'
import petRoutes from './petRoutes'

//Tarea
import TaskRoutes from './TaskRoutes'

const apiRoutes = Router()

apiRoutes.use('/', healthRoutes)
apiRoutes.use('/pets', petRoutes)
apiRoutes.use('/auth', authRoutes)

//Tarea
apiRoutes.use('/Task', tokenValidator(), TaskRoutes)

export default apiRoutes
