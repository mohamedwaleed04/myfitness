import { Workout } from '../../../db/models/workout.model.js';
import { catchError } from '../../utils/catch.error.js';

// Create workout
export const createWorkout = catchError(async (req, res) => {
  const { name, exercises } = req.body;
  const workout = await Workout.create({
    userId: req.user._id,
    name,
    exercises
  });
  res.status(201).json({ success: true, data: workout });
});

// Get all workouts for user
export const getWorkouts = catchError(async (req, res) => {
  const workouts = await Workout.find({ userId: req.user._id });
  res.json({ success: true, data: workouts });
});

// Get single workout
export const getWorkout = catchError(async (req, res) => {
  const workout = await Workout.findOne({
    _id: req.params.id,
    userId: req.user._id
  });
  if (!workout) {
    return res.status(404).json({ success: false, message: 'Workout not found' });
  }
  res.json({ success: true, data: workout });
});

// Update workout
export const updateWorkout = catchError(async (req, res) => {
  const workout = await Workout.findOneAndUpdate(
    { _id: req.params.id, userId: req.user._id },
    req.body,
    { new: true }
  );
  if (!workout) {
    return res.status(404).json({ success: false, message: 'Workout not found' });
  }
  res.json({ success: true, data: workout });
});

// Delete workout
export const deleteWorkout = catchError(async (req, res) => {
  const workout = await Workout.findOneAndDelete({
    _id: req.params.id,
    userId: req.user._id
  });
  if (!workout) {
    return res.status(404).json({ success: false, message: 'Workout not found' });
  }
  res.json({ success: true, message: 'Workout deleted' });
});