import { Router } from 'express';

import BooksRepository from '../repositories/BooksRepository';
import CreateBookService from '../services/CreateBookService';

const booksRouter = Router();
const booksRepository = new BooksRepository();

booksRouter.get('/', (request, response) => {
  const books = booksRepository.listAllBooks();

  return response.json(books);
});

booksRouter.post('/', (request, response) => {
  try {
    const { author, title, year } = request.body;

    const createBook = new CreateBookService(booksRepository);

    const book = createBook.execute({ author, title, year });

    return response.json(book);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default booksRouter;
