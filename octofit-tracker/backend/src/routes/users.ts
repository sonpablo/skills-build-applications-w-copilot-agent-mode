import { createResourceRouter } from './resourceRouter.js';
import User from '../models/User.js';

export default createResourceRouter(User, 'users');