import {userModel} from '../model/userSchema.js'



export async function addUser(req, res) {
    try {
        const { username, email, password } = req.body

        // Validation
        if (!username || !password || !email) {
            return res.status(400).json({
                message: 'Please include all fields'
            })
        }
        // Find if user already exists
        const userExists = await userModel.findOne({ username })

        if (userExists) {
            return res.status(400).json({
                message: 'Name already exists'
            })
        }

        // CREATING USER
        const user = await userModel.create({
            username,
            password,
            email
        })
        if (user) {
            res.status(200).json({
                message: 'Person added Successfully',
                user,
            })
        } else {
            res.status(400).json({
                message: " unsuccessful"
            })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send('Internal Server Error')
    }
}


export async function getUser(req, res) {
    try {
        const { username } = req.params
        const user = await userModel.findOne({ username})
        if (user) {
            res.status(200).json({
                message: "Success",
                user
            })
        } else {
            return res.status(404).json({
                message: "Not Found"
            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server error')
    }
}

export async function updateUser(req, res){
    try {
        const {username} = req.params
        const {email,password} = req.body
        const updated = await userModel.findOneAndUpdate({username},{email,password},{upsert:true})
        if(!updated){
            return res.status(404).json({message:"failed to update"})
        }
        return res.status(200).json({
            message:"success",
            updated
        })

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server error')
    }
}

export async function deleteUser(req,res){
    try {
        const {username} = req.params
        const deleted = await userModel.findOneAndDelete({username})
        if(!deleted){
            return res.status(400).json({message:"failed to delete",})
        }
        return res.status(200).json({message:"User Deleted"
    })
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server error')
    }
}

export async function getAllUsers(req,res){
    try {
        const allUsers = await userModel.find()
        if(!allUsers){
            return res.status(400).json({message:"failed to fetch all users"})
        }
        return res.status(200).json({message:"success",allUsers})
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server error')
    }
}