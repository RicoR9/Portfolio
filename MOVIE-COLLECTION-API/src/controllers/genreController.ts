import { Request, Response, NextFunction } from 'express';
import genreService from '../services/genreService';
import CustomError from '../config/CustomError';

const getAllGenres = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const genres = await genreService.getAllGenres();
    return res.status(200).json({
      success: true,
      genres,
      message: 'List of genres',
    });
  } catch (error) {
    return next(error);
  }
};

const getGenreById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      throw new CustomError('Invalid genre ID', 400);
    }
    const genre = await genreService.getGenreById(id);
    if (!genre) {
      throw new CustomError(`Genre with id ${id} not found`, 404);
    }
    return res.status(200).json({ success: true, genre });
  } catch (error) {
    return next(error);
  }
};

const createGenre = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    if (!name) {
      throw new CustomError('Missing required field: name', 400);
    }
    const genreId = await genreService.createGenre(name);
    return res.status(201).json({
      success: true,
      message: `Genre created with id: ${genreId}`,
      genre: { id: genreId, name },
    });
  } catch (error) {
    return next(error);
  }
};

const updateGenre = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
      throw new CustomError('Missing required field: name', 400);
    }
    const success = await genreService.updateGenre(parseInt(id), name);
    if (!success) {
      throw new CustomError('Genre not found', 404);
    }
    return res.status(200).json({
      success: true,
      message: 'Genre updated successfully',
    });
  } catch (error) {
    return next(error);
  }
};

const deleteGenre = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const success = await genreService.deleteGenre(parseInt(id));
    if (!success) {
      throw new CustomError('Genre not found', 404);
    }
    return res.status(200).json({
      success: true,
      message: 'Genre deleted successfully',
    });
  } catch (error) {
    return next(error);
  }
};

export default {
  getAllGenres,
  getGenreById,
  createGenre,
  updateGenre,
  deleteGenre,
};