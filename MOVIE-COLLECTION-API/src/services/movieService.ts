import pool from '../database';
import { RowDataPacket, FieldPacket } from 'mysql2/promise';
import { IMovie } from '../interfaces/movieInterface';
import { ResultSetHeader } from 'mysql2/promise';

const getAllMovies = async (): Promise<IMovie[]> => {
  const [rows]: [RowDataPacket[], FieldPacket[]] = await pool.execute(
    'SELECT id, title, year, genre_id, director_id FROM movies'
  );
  return rows as IMovie[];
};

const getMovieById = async (id: number): Promise<IMovie | null> => {
  const [rows]: [RowDataPacket[], FieldPacket[]] = await pool.execute(
    'SELECT id, title, year, genre_id, director_id FROM movies WHERE id = ?',
    [id]
  );
  if (rows.length === 0) {
    return null;
  }
  return rows[0] as IMovie;
};

const createMovie = async (
  title: string,
  year: number,
  genreId: number,
  directorId: number
): Promise<number> => {
  const [result]: [ResultSetHeader, FieldPacket[]] = await pool.execute(
    'INSERT INTO movies (title, year, genre_id, director_id) VALUES (?, ?, ?, ?)',
    [title, year, genreId, directorId]
  );
  return result.insertId;
};

const updateMovie = async (
  id: number,
  title: string,
  year: number,
  genreId: number,
  directorId: number
): Promise<boolean> => {
  const [result]: [ResultSetHeader, FieldPacket[]] = await pool.execute(
    'UPDATE movies SET title = ?, year = ?, genre_id = ?, director_id = ? WHERE id = ?',
    [title, year, genreId, directorId, id]
  );
  return result.affectedRows > 0;
};

const deleteMovie = async (id: number): Promise<boolean> => {
  const [result]: [ResultSetHeader, FieldPacket[]] = await pool.execute('DELETE FROM movies WHERE id = ?', [
    id,
  ]);
  return result.affectedRows > 0;
};

export default {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};