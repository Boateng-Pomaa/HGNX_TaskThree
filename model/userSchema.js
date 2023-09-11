import mongoose from 'mongoose'


const {Schema,model} = mongoose

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
},
{
    timestamps: true
})

export const userModel = model('person',userSchema)