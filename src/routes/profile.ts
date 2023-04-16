import { Router } from 'express'

const router = Router()

import ctrl from '../controllers/profile'

router.get('/getProfile/:profileId', ctrl.getProfile)
router.get('/getProfileByUser/:userId', ctrl.getProfileByUserId);
router.post('/addProfile', ctrl.addProfile)
router.put('/editProfile', ctrl.editProfile)
router.delete('/deletProfile', ctrl.deleteProfile)

export default router