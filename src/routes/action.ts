import { Router } from 'express'

const router = Router()

import ctrl from '../controllers/action'

router.get('/getAction/:actionId', ctrl.getAction)
router.get('/getActionClientId/:clientId', ctrl.getActionClientId);
router.get('/getActionProfessionalId/:professionalId', ctrl.getActionProfessionalId);
router.get('/getActionBothId/:clientId/:professionalId', ctrl.getActionBothId);
router.post('/addAction', ctrl.addAction)
router.put('/editAction', ctrl.editAction)
router.delete('/deleteAction', ctrl.deleteAction)

export default router