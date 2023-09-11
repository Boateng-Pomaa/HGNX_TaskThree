import axios from 'axios'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { userModel } from './model/userSchema.js'

dotenv.config()

// Base URL of the API
const baseUrl = 'https://userdetails-k0rw.onrender.com'

// MongoDB configuration
const db = process.env.DB_URL

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB')
});

// Function to fetch the ID of a person by name from MongoDB using the userModel
async function fetchPersonIdByName(name) {
  try {
    const person = await userModel.findOne({ name })
    return person._id
  } catch (error) {
    console.error('Error fetching person ID:', error)
    return null
  }
}

// Function to perform a POST request to add a new person
async function addPerson(name) {
  try {
    const response = await axios.post(`${baseUrl}/api`, { name })
    console.log('New person added:', response.data)
    return response.data
  } catch (error) {
    console.error('Error adding person:', error)
  }
}

// Function to perform a PUT request to modify the details of an existing person by ID
async function modifyPersonById(id, newData) {
  try {
    const response = await axios.put(`${baseUrl}/api/${id}`, newData)
    console.log('Modified person details:', response.data)
    return response.data
  } catch (error) {
    console.error('Error modifying person details:', error)
  }
}

// Function to perform a DELETE request to remove a person by ID
async function removePersonById(id) {
  try {
    const response = await axios.delete(`${baseUrl}/api/${id}`)
    console.log('Person removed:', response.data)
    return response.data
  } catch (error) {
    console.error('Error removing person:', error)
  }
}

async function testAPI() {
  await addPerson('John Doe')

  const userId = await fetchPersonIdByName('John Doe')

  await modifyPersonById(userId, { name: 'Jane Doe' })
  await removePersonById(userId)
}

testAPI()