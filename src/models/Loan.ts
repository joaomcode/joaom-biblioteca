import { uuid } from 'uuidv4';

class Loan {
  id: string;

  bookTitle: string;

  date: Date;

  constructor({ bookTitle, date }: Omit<Loan, 'id'>) {
    this.id = uuid();
    this.bookTitle = bookTitle;
    this.date = date;
  }
}

export default Loan;
