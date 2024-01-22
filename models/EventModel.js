const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String, // Adjust if you need a specific time format
    required: true,
  },
  duration: {
    type: Number, // In minutes or hours, depending on your preference
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Replace with your user model name
    required: true,
  },
  // Additional fields as needed:
  // - description (more details about the event)
  // - location (if applicable)
  // - attendees (if you want to track participants)
  // - createdAt (automatically generated timestamp)
  // - updatedAt (automatically updated timestamp)
})

module.exports = mongoose.model('Event', eventSchema)
