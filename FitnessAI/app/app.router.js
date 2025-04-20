import Userrouter from './src/modules/users/user.router.js';
import DietRouter from './src/modules/diet/diet.router.js';
import workoutRouter from './src/modules/workouts/workout.router.js';

export const appRouter = (app, express) => {
    app.use(express.json());

    // Add this to your existing router setup
    app.use('/workout', workoutRouter);
    
    // User routes
    app.use('/user', Userrouter);

    // Diet routes
    app.use('/diet', DietRouter);

    // Error handling middleware
    app.use((error, req, res, next) => {
        return res.status(error.status || 500).json({
            success: false,
            message: error.message,
            stack: error.stack,
        });
    });

    // 404 route for undefined endpoints
    app.all('*', (req, res) => {
        return res.status(404).json({ success: false, message: 'Page not found' });
    });
};