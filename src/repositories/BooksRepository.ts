import Book from '../models/Book';

interface CreateBookDTO {
  author: string;
  title: string;
  year: number;
}

class BooksRepository {
  private books: Book[];

  constructor() {
    this.books = [];
  }

  public listAllBooks(): Book[] {
    return this.books;
  }

  public findByTitle(title: string): Book | null {
    const findTitle = this.books.find(book => book.title === title);

    return findTitle || null;
  }

  public create({ author, title, year }: CreateBookDTO): Book {
    const book = new Book({ author, title, year });

    this.books.push(book);

    return book;
  }
}

export default BooksRepository;
