import mongoose from 'mongoose'


const {Schema,model} = mongoose

const userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type:String
    },
    email:{
      type: String,
    },
},
{
    timestamps: true
})

export const userModel = model('person',userSchema)