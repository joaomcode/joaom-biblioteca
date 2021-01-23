import { startOfHour } from 'date-fns';

import Loan from '../models/Loan';
import LoansRepository from '../repositories/LoansRepository';

interface RequestLoanDTO {
  bookTitle: string;

  date: Date;
}

class CreateLoanService {
  private loansRepository: LoansRepository;

  constructor(loansRepository: LoansRepository) {
    this.loansRepository = loansRepository;
  }

  public execute({ bookTitle, date }: RequestLoanDTO): Loan {
    const loanDate = startOfHour(date);

    const findLoanInSameDate = this.loansRepository.findByDate(loanDate);

    if (findLoanInSameDate) {
      throw Error('This book already booked!');
    }

    const loan = this.loansRepository.create({
      bookTitle,
      date: loanDate,
    });

    return loan;
  }
}

export default CreateLoanService;
