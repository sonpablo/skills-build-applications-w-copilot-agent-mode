import mongoose from 'mongoose';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Team from '../models/Team.js';
import User from '../models/User.js';
import Workout from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        name: 'Maya Chen',
        username: 'mayachen',
        email: 'maya.chen@example.com',
        avatar: 'MC',
      },
      {
        name: 'Jordan Brooks',
        username: 'jordanbrooks',
        email: 'jordan.brooks@example.com',
        avatar: 'JB',
      },
      {
        name: 'Samira Patel',
        username: 'samirapatel',
        email: 'samira.patel@example.com',
        avatar: 'SP',
      },
    ]);

    const teams = await Team.insertMany([
      {
        name: 'Sunrise Striders',
        description: 'A friendly team for consistent morning movement.',
        members: [users[0]._id, users[1]._id],
      },
      {
        name: 'Peak Performers',
        description: 'Strength and conditioning goals, shared together.',
        members: [users[2]._id],
      },
    ]);

    await Activity.insertMany([
      {
        user: users[0]._id,
        type: 'run',
        durationMinutes: 32,
        calories: 286,
        distanceKm: 5.1,
        performedAt: new Date('2026-09-15T06:30:00Z'),
      },
      {
        user: users[1]._id,
        type: 'cycle',
        durationMinutes: 45,
        calories: 410,
        distanceKm: 16.8,
        performedAt: new Date('2026-09-15T07:00:00Z'),
      },
      {
        user: users[2]._id,
        type: 'strength',
        durationMinutes: 38,
        calories: 245,
        performedAt: new Date('2026-09-14T18:00:00Z'),
      },
    ]);

    await Leaderboard.insertMany([
      { user: users[0]._id, points: 1280, rank: 1, period: '2026-W38' },
      { user: users[1]._id, points: 1125, rank: 2, period: '2026-W38' },
      { user: users[2]._id, points: 980, rank: 3, period: '2026-W38' },
    ]);

    await Workout.insertMany([
      {
        name: 'Full Body Foundation',
        description: 'A balanced session for building strength and mobility.',
        difficulty: 'beginner',
        durationMinutes: 25,
        exercises: [
          { name: 'Bodyweight squat', sets: 3, reps: 12 },
          { name: 'Incline push-up', sets: 3, reps: 8 },
          { name: 'Dead bug', sets: 3, reps: 10 },
        ],
        tags: ['strength', 'mobility'],
      },
      {
        name: 'Endurance Builder',
        description: 'Intervals to improve cardiovascular capacity and pacing.',
        difficulty: 'intermediate',
        durationMinutes: 35,
        exercises: [
          { name: 'Easy run', sets: 1, reps: 1 },
          { name: 'Fast interval', sets: 6, reps: 1 },
          { name: 'Walking recovery', sets: 6, reps: 1 },
        ],
        tags: ['cardio', 'running'],
      },
    ]);

    console.log(`Seeded ${users.length} users, ${teams.length} teams, 3 activities, 3 leaderboard entries, and 2 workouts`);

    console.log('Database seeding complete');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
