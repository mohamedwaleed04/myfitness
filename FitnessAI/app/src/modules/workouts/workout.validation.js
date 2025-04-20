import Joi from 'joi';

const exerciseSchema = Joi.object({
  name: Joi.string().required(),
  sets: Joi.number().min(1),
  reps: Joi.number().min(1),
  weight: Joi.number().min(0),
  duration: Joi.number().min(1)
});

export const createWorkoutSchema = Joi.object({
  name: Joi.string().required(),
  exercises: Joi.array().items(exerciseSchema).min(1).required()
});

export const updateWorkoutSchema = Joi.object({
  name: Joi.string(),
  exercises: Joi.array().items(exerciseSchema).min(1)
});