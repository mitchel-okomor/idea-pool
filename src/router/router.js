import express from 'express';
import path from 'path';
import authRoutes from './auth/auth';
import ideasRoutes from './Ideas/idea';
import { requireAuth } from '../middleware/passport';

export default function (app) {
  const homeRoutes = express.Router();
  const apiRoutes = express.Router();

  // API General Route
  homeRoutes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../static/index.html'));
  });

  // api Routes
  apiRoutes.use('/auth', authRoutes);
  apiRoutes.use('/ideas', requireAuth, ideasRoutes);

  // Set url for API group routes
  app.use('/api', apiRoutes);
  app.use('/', homeRoutes);
}
