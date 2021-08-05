import express from 'express';
import ideasController from '../../http/controllers/ideas/idea';

const router = express.Router();

router.post('/farmer/farms', ideasController);

export default router;
