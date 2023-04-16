import { Router } from 'express'

const router = Router()

import ctrl from '../controllers/user'
var cors = require('cors')

router.get('/getUsers', ctrl.getUsers)
router.get('/getUser/:userId', ctrl.getUser)
router.post('/signIn', ctrl.signIn)
router.post('/checkJwt', ctrl.checkJwt)
router.post('/addUser', cors(), ctrl.addUser)
router.post('/sendMail', ctrl.sendMail)
router.get('/verify/:code', ctrl.verify)
router.put('/editUser', ctrl.editUser)
router.delete('/deleteUser', ctrl.deleteUser)

export default router