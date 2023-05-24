"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expensesRouter = void 0;
const express_1 = __importDefault(require("express"));
const expenseService_1 = require("../services/expenseService");
const expensesRouter = express_1.default.Router();
exports.expensesRouter = expensesRouter;
expensesRouter
    .route('/')
    .get(expenseService_1.getAllExpenses)
    .post(expenseService_1.createExpense);
expensesRouter
    .route('/:id')
    .get(expenseService_1.getExpense)
    .patch(expenseService_1.updateExpense)
    .delete(expenseService_1.deleteExpense);
