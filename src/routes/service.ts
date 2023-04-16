import { Router } from 'express'

const router = Router()

import ctrl from '../controllers/service'

router.get('/getService/:serviceId', ctrl.getService)
router.post('/addService', ctrl.addService)
router.put('/editService', ctrl.editService)
router.delete('/deleteService', ctrl.deleteService)

export default router