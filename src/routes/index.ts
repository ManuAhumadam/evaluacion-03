import { Router } from 'express'
import healthRoutes from './healthRoutes'
import petRoutes from './petRoutes'

//Tarea
import TaskRoutes from './TaskRoutes'

const apiRoutes = Router()

apiRoutes.use('/', healthRoutes)
apiRoutes.use('/pets', petRoutes)

//Tarea
apiRoutes.use('/Task', TaskRoutes)

export default apiRoutes
