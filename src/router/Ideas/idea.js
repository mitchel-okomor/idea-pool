import express from 'express';
import ideasController from '../../http/controllers/ideas/idea';

const router = express.Router();

router.post('/idea/:userId', ideasController.createIdea);
router.get('/idea/:userId', ideasController.fetchUserIdeas);
router.delete('/idea/:id', ideasController.deleteIdea);
router.patch('/idea/:id', ideasController.updateIdea);

export default router;
