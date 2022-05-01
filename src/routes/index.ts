import { Router } from 'express'
import healthRoutes from './healthRoutes'
import petRoutes from './petRoutes'

const apiRoutes = Router()

apiRoutes.use('/', healthRoutes)
apiRoutes.use('/pets', petRoutes)

export default apiRoutes
