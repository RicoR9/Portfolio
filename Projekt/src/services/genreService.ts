import pool from '../database';
import { RowDataPacket, FieldPacket } from 'mysql2/promise';
import { IGenre } from '../interfaces/genreInterface';
import { ResultSetHeader } from 'mysql2/promise';

const getAllGenres = async (): Promise<IGenre[]> => {
  const [rows]: [RowDataPacket[], FieldPacket[]] = await pool.execute(
    'SELECT id, name FROM genres'
  );
  return rows as IGenre[];
};

const getGenreById = async (id: number): Promise<IGenre | null> => {
  const [rows]: [RowDataPacket[], FieldPacket[]] = await pool.execute(
    'SELECT id, name FROM genres WHERE id = ?',
    [id]
  );
  if (rows.length === 0) {
    return null;
  }
  return rows[0] as IGenre;
};

const createGenre = async (name: string): Promise<number> => {
  const [result]: [ResultSetHeader, FieldPacket[]] = await pool.execute(
    'INSERT INTO genres (name) VALUES (?)',
    [name]
  );
  return result.insertId;
};

const updateGenre = async (id: number, name: string): Promise<boolean> => {
  const [result]: any = await pool.execute(
    'UPDATE genres SET name = ? WHERE id = ?',
    [name, id]
  );
  return result.affectedRows > 0;
};

const deleteGenre = async (id: number): Promise<boolean> => {
  const [result]: any = await pool.execute('DELETE FROM genres WHERE id = ?', [
    id,
  ]);
  return result.affectedRows > 0;
};

export default {
  getAllGenres,
  getGenreById,
  createGenre,
  updateGenre,
  deleteGenre,
};