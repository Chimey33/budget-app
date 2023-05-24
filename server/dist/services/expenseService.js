"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpense = exports.updateExpense = exports.createExpense = exports.getExpense = exports.getAllExpenses = void 0;
const getAllExpenses = (req, res) => {
    res.send('Hello World From the Typescript Server!');
    // res.status(200).json({
    //     status: 'success',
    //     // requestedAt: req.requestTime,
    //     // results: expenses.length,
    //     // data: {
    //     //     results: expenses
    //     // }
    // });
};
exports.getAllExpenses = getAllExpenses;
const getExpense = (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        status: 'success',
        data: {}
    });
};
exports.getExpense = getExpense;
const createExpense = (req, res) => {
};
exports.createExpense = createExpense;
const updateExpense = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {}
    });
};
exports.updateExpense = updateExpense;
const deleteExpense = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    });
};
exports.deleteExpense = deleteExpense;
