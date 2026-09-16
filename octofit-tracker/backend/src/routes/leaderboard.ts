import { createResourceRouter } from './resourceRouter.js';
import Leaderboard from '../models/Leaderboard.js';

export default createResourceRouter(Leaderboard, 'leaderboard');