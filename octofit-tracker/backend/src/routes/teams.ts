import { createResourceRouter } from './resourceRouter.js';
import Team from '../models/Team.js';

export default createResourceRouter(Team, 'teams');