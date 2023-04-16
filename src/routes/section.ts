import { Router } from 'express'

const router = Router()

import ctrl from '../controllers/section'

router.get('/getSection/:sectionId', ctrl.getSection)
router.post('/addSection', ctrl.addSection)
router.put('/editSection', ctrl.editSection)
router.delete('/deleteSection', ctrl.deleteSection)

export default router