import { Router } from 'express';
import { parseISO } from 'date-fns';

import LoansRepository from '../repositories/LoansRepository';
import CreateLoanService from '../services/CreateLoanService';

const loansRouter = Router();
const loansRepository = new LoansRepository();

loansRouter.get('/', (request, response) => {
  const loans = loansRepository.listAllLoans();

  return response.json(loans);
});

loansRouter.post('/', (request, response) => {
  try {
    const { bookTitle, date } = request.body;

    const parsedDate = parseISO(date);

    const createLoan = new CreateLoanService(loansRepository);

    const loan = createLoan.execute({ bookTitle, date: parsedDate });

    return response.json(loan);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default loansRouter;
