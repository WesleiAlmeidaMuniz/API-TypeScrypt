import express from 'express';
import petRouter from './petRoutes';
import adotanteRoutes from './adotanteRoutes'

const router = (app: express.Application) => {
  app.use('/pets', petRouter);
  app.use('/adotantes', adotanteRoutes)
};

export default router