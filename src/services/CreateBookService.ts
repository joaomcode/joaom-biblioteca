import Book from '../models/Book';
import BooksRepository from '../repositories/BooksRepository';

interface RequestBookDTO {
  title: string;

  author: string;

  year: number;
}

class CreateBookService {
  private booksRepository = new BooksRepository();

  constructor(booksRepository: BooksRepository) {
    this.booksRepository = booksRepository;
  }

  public execute({ author, title, year }: RequestBookDTO): Book {
    const parsedTitle = title;

    const findSameTitle = this.booksRepository.findByTitle(parsedTitle);

    if (findSameTitle) {
      throw Error('This book is already registered');
    }

    if (typeof year !== 'number') {
      throw Error('Year must be a number');
    }

    const book = this.booksRepository.create({ author, title, year });

    return book;
  }
}

export default CreateBookService;
