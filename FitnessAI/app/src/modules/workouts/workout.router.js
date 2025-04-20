import { Router } from 'express';
import { createWorkout, getWorkouts, getWorkout, updateWorkout, deleteWorkout } from './workout.controller.js';
import { isAuthenticated } from '../../middleware/auth.middleware.js';
import { isValid } from '../../middleware/validation.middleware.js';
import { createWorkoutSchema, updateWorkoutSchema } from './workout.validation.js';

const router = Router();


router.post('/add', isAuthenticated, isValid(createWorkoutSchema), createWorkout);
router.get('/getall', isAuthenticated, getWorkouts);
router.get('/:id', isAuthenticated, getWorkout);
router.patch('/:id', isAuthenticated, updateWorkout);
router.delete('/:id', isAuthenticated, deleteWorkout);

export default router;