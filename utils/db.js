import mongoose from 'mongoose'

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB database')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    process.exit(1) // Exit process on connection failure
  }
}

export default connectToDatabase
