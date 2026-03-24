import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/jwt';

export interface AuthRequest extends Request {
  user?: {
    id: number;
    email: string;
    role?: string;
  };
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token puudub või on vales formaadis' });
  }
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token puudub või on vales formaadis' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret) as { id: number; email: string; role?: string };
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(403).json({ message: 'Kehtetu token' });
  }
};

export const adminMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ message: 'Ainult administraatoritel on ligipääs' });
  }
  return next();
};