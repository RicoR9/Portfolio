import express from 'express';
import userRouter from './routes/userRouter';
import directorRouter from './routes/directorRouter';
import genreRouter from './routes/genreRouter';
import movieRouter from './routes/movieRouter';
import logger from './middleware/logger';
import notFoundMiddleware from './utilities/notFoundMiddleware';
import errorMiddleware from './utilities/errorMiddleware';

const app = express();

app.use(express.json());
app.use(logger);

app.use('/users', userRouter);
app.use('/directors', directorRouter);
app.use('/genres', genreRouter);
app.use('/movies', movieRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server töötab aadressil: http://localhost:3000');
  });
}

export default app;