import { userModel } from '../model/userSchema.js'



export async function addUser(req, res) {
    try {
        const { name } = req.body
        // Validation
        if (!name) {
            return res.status(400).json({
                message: 'Please include all fields'
            })
        }
        // Find if user already exists
        const userExists = await userModel.findOne({ name })

        if (userExists) {
            return res.status(400).json({
                message: 'Name already exists'
            })
        }

        // CREATING USER
        const user = await userModel.create({
            name
        })
        if (user) {
           return res.status(200).json({
                message: 'Person added Successfully',
                user,
            })
        } else {
          return  res.status(400).json({
                message: " unsuccessful, Name should be string!"
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
        const { name } = req.params
        const user = await userModel.findOne({ name})
        if (user) {
            res.status(200).json({
                message: "Success",
                user
            })
        } else {
            return res.status(400).json({
                message: "Failed "
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server error')
    }
}

export async function updateUser(req, res) {
    try {
        const { user_id } = req.params
        const { name } = req.body
        const updated = await userModel.findOneAndUpdate({ _id: user_id }, { name })
        if (!updated) {
            return res.status(404).json({ message: "failed to update" })
        }
        return res.status(200).json({
            message: "success",
            updated
        })

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server error')
    }
}

export async function deleteUser(req, res) {
    try {
        const { user_id } = req.params
        const deleted = await userModel.findOneAndDelete({ _id: user_id })
        if (!deleted) {
            return res.status(400).json({ message: "failed to delete", })
        }
        return res.status(200).json({
            message: "User Deleted"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server error')
    }
}

export async function getAllUsers(req, res) {
    try {
        const allUsers = await userModel.find()
        if (!allUsers) {
            return res.status(400).json({ message: "failed to fetch all users" })
        }
        return res.status(200).json({ message: "success", allUsers })
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Server error')
    }
}