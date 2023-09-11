import express from 'express'
const router = express.Router()
import { addUser,getUser,updateUser,deleteUser,getAllUsers } from '../controller/userController.js'

router.post('/api',addUser)
.get('/api/:user_id',getUser)
.put('/api/:user_id',updateUser)
.delete('/api/:user_id',deleteUser)
.get('/api',getAllUsers)



export default router