import { isEqual } from 'date-fns';
import Loan from '../models/Loan';

interface CreateLoanDTO {
  bookTitle: string;
  date: Date;
}

class LoansRepository {
  private loans: Loan[];

  constructor() {
    this.loans = [];
  }

  public listAllLoans(): Loan[] {
    return this.loans;
  }

  public findByDate(date: Date): Loan | null {
    const findLoan = this.loans.find(loan => isEqual(date, loan.date));

    return findLoan || null;
  }

  public create({ bookTitle, date }: CreateLoanDTO): Loan {
    const loan = new Loan({ bookTitle, date });

    this.loans.push(loan);

    return loan;
  }
}

export default LoansRepository;
