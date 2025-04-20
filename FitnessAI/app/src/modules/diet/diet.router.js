import { Router } from 'express';
import { nutrition, Lnutrition, retriveN, updatenN, deleteN } from './diet.controller.js';

const router = Router();

// Route to log nutrition intake
router.post('/nutrition', nutrition);

// Route to retrieve all nutrition logs
router.get('/nutrition', Lnutrition);

// Route to retrieve details about a specific log
router.get('/nutrition/:nutritionId', retriveN);

// Route to update a specific log
router.put('/nutrition/:nutritionId', updatenN);

// Route to delete a specific log
router.delete('/nutrition/:nutritionId', deleteN);

export default router;