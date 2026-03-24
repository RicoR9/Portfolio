import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error('JWT_SECRET environment variable is not set. Please set it to a strong, randomly generated value.');
}

export const jwtSecret: string = secret;
export const jwtExpiresIn: string = process.env.JWT_EXPIRES_IN || '1h';