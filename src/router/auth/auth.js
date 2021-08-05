import express from 'express';

import authController from '../../http/controllers/auth/auth';

const router = express.Router();

router.post('/signup', authController.registerUser);

router.post('/login', authController.login);
router.patch('/user/:id', authController.updateUser);

export default router;
