import express from 'express';
import authController from '../../http/controllers/auth/auth';
import { requireAuth } from './../../middleware/passport';

const router = express.Router();

router.post('/signup', authController.registerUser);

router.post('/login', authController.login);
router.patch('/user/:id', requireAuth, authController.updateUser);

export default router;
