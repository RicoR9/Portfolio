import pool from '../database';
import { RowDataPacket, FieldPacket } from 'mysql2/promise';
import { IDirector } from '../interfaces/directorInterface';

const getAllDirectors = async (): Promise<IDirector[]> => {
  const [rows]: [RowDataPacket[], FieldPacket[]] = await pool.execute(
    'SELECT id, name FROM directors'
  );
  return rows as IDirector[];
};

const getDirectorById = async (id: number): Promise<IDirector | null> => {
  const [rows]: [RowDataPacket[], FieldPacket[]] = await pool.execute(
    'SELECT id, name FROM directors WHERE id = ?',
    [id]
  );
  if (rows.length === 0) {
    return null;
  }
  return rows[0] as IDirector;
};

const createDirector = async (name: string): Promise<number> => {
  const [result]: any = await pool.execute(
    'INSERT INTO directors (name) VALUES (?)',
    [name]
  );
  return result.insertId;
};

const updateDirector = async (id: number, name: string): Promise<boolean> => {
  const [result]: any = await pool.execute(
    'UPDATE directors SET name = ? WHERE id = ?',
    [name, id]
  );
  return result.affectedRows > 0;
};

const deleteDirector = async (id: number): Promise<boolean> => {
  const [result]: any = await pool.execute(
    'DELETE FROM directors WHERE id = ?',
    [id]
  );
  return result.affectedRows > 0;
};

export default {
  getAllDirectors,
  getDirectorById,
  createDirector,
  updateDirector,
  deleteDirector,
};