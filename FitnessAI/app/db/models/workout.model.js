import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  exercises: [{
    name: String,
    sets: Number,
    reps: Number,
    weight: Number,
    duration: Number // in minutes
  }],
  date: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

export const Workout = mongoose.model('Workout', workoutSchema);