import { Router } from 'express';
import type { Model } from 'mongoose';

export function createResourceRouter<T>(model: Model<T>, resourceName: string) {
  const router = Router();

  router.get('/', async (_request, response) => {
    try {
      const data = await model.find().lean();
      response.json({ data, resource: resourceName });
    } catch (error) {
      response.status(500).json({ error: `Unable to load ${resourceName}`, details: error });
    }
  });

  router.post('/', async (request, response) => {
    try {
      const data = await model.create(request.body);
      response.status(201).json({ data, resource: resourceName });
    } catch (error) {
      response.status(400).json({ error: `Unable to create ${resourceName}`, details: error });
    }
  });

  return router;
}