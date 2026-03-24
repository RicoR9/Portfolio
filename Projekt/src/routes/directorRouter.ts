import express from 'express';
import directorController from '../controllers/directorController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', directorController.getAllDirectors);
router.get('/:id', directorController.getDirectorById);
router.post('/', authMiddleware, directorController.createDirector);
router.put('/:id', authMiddleware, directorController.updateDirector);
router.delete('/:id', authMiddleware, directorController.deleteDirector);

export default router;