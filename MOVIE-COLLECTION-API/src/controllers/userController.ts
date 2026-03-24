import { Request, Response, NextFunction } from 'express';
import userService from '../services/userService';
import jwt from 'jsonwebtoken';
import CustomError from '../config/CustomError';

const jwtSecret = process.env.JWT_SECRET || 'default-secret';

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json({
      success: true,
      users,
      message: 'List of users',
    });
  } catch (error) {
    return next(error);
  }
};

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      throw new CustomError('Invalid user ID', 400);
    }
    const user = await userService.getUserById(id);
    if (!user) {
      throw new CustomError(`User with id ${id} not found.`, 404);
    }
    return res.status(200).json({
      success: true,
      message: 'User',
      user,
    });
  } catch (error) {
    return next(error);
  }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      throw new CustomError('Name, email or password is missing', 400);
    }
    const existingUser = await userService.getUserByEmail(email);
    if (existingUser) {
      throw new CustomError('User already exists', 400);
    }
    const user = await userService.createUser(name, email, password, role);
    return res.status(201).json({
      success: true,
      message: `User created with id: ${user.id}`,
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
  } catch (error) {
    return next(error);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new CustomError('Email and password are required', 400);
    }
    const user = await userService.getUserByEmail(email);
    if (!user) {
      throw new CustomError('Invalid email or password', 401);
    }
    const isPasswordValid = userService.validatePassword(password, user.password);
    if (!isPasswordValid) {
      throw new CustomError('Invalid email or password', 401);
    }
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      jwtSecret,
      { expiresIn: '1h' }
    );
    return res.status(200).json({
      success: true,
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    return next(error);
  }
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  login,
};