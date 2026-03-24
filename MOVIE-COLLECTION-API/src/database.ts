import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3308'),
    user: process.env.DB_USER || 'movieuser',
    password: process.env.DB_PASSWORD || 'moviepass123',
    database: process.env.DB_NAME || 'moviedb',
})
.promise();

export default pool;