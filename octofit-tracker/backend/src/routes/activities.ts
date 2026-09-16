import { createResourceRouter } from './resourceRouter.js';
import Activity from '../models/Activity.js';

export default createResourceRouter(Activity, 'activities');