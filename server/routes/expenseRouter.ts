import express from 'express';
import {getAllExpenses, getExpense, createExpense, updateExpense, deleteExpense} from "../services/expenseService";

const expensesRouter = express.Router();

expensesRouter
    .route('/')
    .get(getAllExpenses)
    .post(createExpense);

expensesRouter
    .route('/:id')
    .get(getExpense)
    .patch(updateExpense)
    .delete(deleteExpense);

export { expensesRouter };
