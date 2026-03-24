import express from 'express';
import movieController from '../controllers/movieController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', authMiddleware, movieController.createMovie);
router.put('/:id', authMiddleware, movieController.updateMovie);
router.delete('/:id', authMiddleware, movieController.deleteMovie);

export default router;