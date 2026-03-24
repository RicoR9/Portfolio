import { Request, Response, NextFunction } from 'express';
import movieService from '../services/movieService';
import CustomError from '../config/CustomError';

const getAllMovies = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const movies = await movieService.getAllMovies();
    return res.status(200).json({
      success: true,
      movies,
      message: 'List of movies',
    });
  } catch (error) {
    return next(error);
  }
};

const getMovieById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    if (!id) {
      throw new CustomError('Invalid movie ID', 400);
    }
    const movie = await movieService.getMovieById(id);
    if (!movie) {
      throw new CustomError(`Movie with id ${id} not found`, 404);
    }
    return res.status(200).json({ success: true, movie });
  } catch (error) {
    return next(error);
  }
};

const createMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, year, genre_id, director_id } = req.body;
    if (!title || !year || !genre_id || !director_id) {
      throw new CustomError('Missing required fields: title, year, genre_id, director_id', 400);
    }
    const movieId = await movieService.createMovie(title, year, genre_id, director_id);
    return res.status(201).json({
      success: true,
      message: `Movie created with id: ${movieId}`,
      movie: { id: movieId, title, year, genre_id, director_id },
    });
  } catch (error) {
    return next(error);
  }
};

const updateMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { title, year, genre_id, director_id } = req.body;
    if (!title || !year || !genre_id || !director_id) {
      throw new CustomError('Missing required fields: title, year, genre_id, director_id', 400);
    }
    const success = await movieService.updateMovie(
      parseInt(id),
      title,
      year,
      genre_id,
      director_id
    );
    if (!success) {
      throw new CustomError('Movie not found', 404);
    }
    return res.status(200).json({
      success: true,
      message: 'Movie updated successfully',
    });
  } catch (error) {
    return next(error);
  }
};

const deleteMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const success = await movieService.deleteMovie(parseInt(id));
    if (!success) {
      throw new CustomError('Movie not found', 404);
    }
    return res.status(200).json({
      success: true,
      message: 'Movie deleted successfully',
    });
  } catch (error) {
    return next(error);
  }
};

export default {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};