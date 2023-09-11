import express from 'express'
const router = express.Router()
import { addUser,getUser,updateUser,deleteUser,getAllUsers } from '../controller/userController.js'

router.post('/addUser',addUser)
.get('/getUser/:username',getUser)
.put('/updateUser/:username',updateUser)
.delete('/deleteUser/:username',deleteUser)
.get('/allUsers',getAllUsers)



export default router