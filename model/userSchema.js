import mongoose from 'mongoose'


const {Schema,model} = mongoose

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        match: /^[a-zA-Z\s]*$/
    },
},
{
    timestamps: true
})

export const userModel = model('person',userSchema)