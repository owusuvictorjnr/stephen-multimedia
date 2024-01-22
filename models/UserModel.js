import mongoose from 'mongoose';
import bcrypt from 'bcrypt'; // For password hashing

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => /.+@.+\..+/.test(v), // Basic email validation
      message: 'Invalid email format',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Enforce a minimum password length
  },
  selectedDate: {
    type: Date, // Store as a Date object
    required: true,
  },
  selectedTime: {
    type: Number, // Store as minutes or hours
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
}, { timestamps: true });

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10); // Adjust salt rounds as needed
  }
  next();
});

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);

export default UserModel;
