import { Request, Response, NextFunction } from 'express';
import directorService from '../services/directorService';
import CustomError from '../config/CustomError';

const getAllDirectors = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const directors = await directorService.getAllDirectors();
    return res.status(200).json({
      success: true,
      directors,
      message: 'List of directors',
    });
  } catch (error) {
    return next(error);
  }
};

const getDirectorById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      throw new CustomError('Invalid director ID', 400);
    }
    const director = await directorService.getDirectorById(id);
    if (!director) {
      throw new CustomError(`Director with id ${id} not found`, 404);
    }
    return res.status(200).json({ success: true, director });
  } catch (error) {
    return next(error);
  }
};

const createDirector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    if (!name) {
      throw new CustomError('Missing required field: name', 400);
    }
    const directorId = await directorService.createDirector(name);
    return res.status(201).json({
      success: true,
      message: `Director created with id: ${directorId}`,
      director: {
        id: directorId,
        name,
      },
    });
  } catch (error) {
    return next(error);
  }
};

const updateDirector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
      throw new CustomError('Missing required field: name', 400);
    }
    const success = await directorService.updateDirector(parseInt(id), name);
    if (!success) {
      throw new CustomError('Director not found', 404);
    }
    return res.status(200).json({
      success: true,
      message: 'Director updated successfully',
    });
  } catch (error) {
    return next(error);
  }
};

const deleteDirector = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const success = await directorService.deleteDirector(parseInt(id));
    if (!success) {
      throw new CustomError('Director not found', 404);
    }
    return res.status(200).json({
      success: true,
      message: 'Director deleted successfully',
    });
  } catch (error) {
    return next(error);
  }
};

export default {
  getAllDirectors,
  getDirectorById,
  createDirector,
  updateDirector,
  deleteDirector,
};