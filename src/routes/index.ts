import { Router } from 'express';
import booksRouter from './books.routes';
import loansRouter from './loans.routes';

const routes = Router();

routes.use('/books', booksRouter);
routes.use('/loans', loansRouter);

export default routes;
