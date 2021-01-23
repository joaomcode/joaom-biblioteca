import { uuid } from 'uuidv4';

class Book {
  id: string;

  author: string;

  title: string;

  year: number;

  constructor({ author, title, year }: Omit<Book, 'id'>) {
    this.id = uuid();
    this.author = author;
    this.title = title;
    this.year = year;
  }
}

export default Book;
