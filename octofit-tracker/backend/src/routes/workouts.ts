import { createResourceRouter } from './resourceRouter.js';
import Workout from '../models/Workout.js';

export default createResourceRouter(Workout, 'workouts');