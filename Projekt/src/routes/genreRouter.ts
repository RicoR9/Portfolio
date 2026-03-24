import express from 'express';
import genreController from '../controllers/genreController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', genreController.getAllGenres);
router.get('/:id', genreController.getGenreById);
router.post('/', authMiddleware, genreController.createGenre);
router.put('/:id', authMiddleware, genreController.updateGenre);
router.delete('/:id', authMiddleware, genreController.deleteGenre);

export default router;