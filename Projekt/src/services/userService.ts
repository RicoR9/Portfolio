import pool from '../database';
import IUser from '../interfaces/userInterface';
import { FieldPacket, RowDataPacket, ResultSetHeader } from 'mysql2';
import hashService from './hashService';

const getAllUsers = async (): Promise<IUser[]> => {
  const [users]: [RowDataPacket[], FieldPacket[]] = await pool.execute(
    'SELECT id, name, email, role FROM users'
  );
  return users as IUser[];
};

const getUserById = async (id: number): Promise<IUser | null> => {
  const [users]: [RowDataPacket[], FieldPacket[]] = await pool.execute(
    'SELECT id, name, email, role FROM users WHERE id = ?',
    [id]
  );
  if (users.length === 0) {
    return null;
  }
  return users[0] as IUser;
};

const getUserByEmail = async (email: string): Promise<IUser | null> => {
  const [users]: [RowDataPacket[], FieldPacket[]] = await pool.execute(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  if (users.length === 0) {
    return null;
  }
  return users[0] as IUser;
};

const createUser = async (
  name: string,
  email: string,
  password: string,
  role: string = 'user'
): Promise<IUser> => {
  const hashedPassword = hashService.hash(password);
  const [result]: [ResultSetHeader, FieldPacket[]] = await pool.execute(
    'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
    [name, email, hashedPassword, role]
  );
  const newUser: IUser = {
    id: result.insertId,
    name,
    email,
    password: hashedPassword,
    role
  };
  return newUser;
};

const validatePassword = (plainPassword: string, hashedPassword: string): boolean => {
  return hashService.compare(plainPassword, hashedPassword);
};

export default {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  validatePassword
};