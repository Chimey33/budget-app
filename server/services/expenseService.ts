import { Request, Response, NextFunction } from 'express';

export const getAllExpenses= (req: Request, res: Response) => {
    res.send('Hello World From the Typescript Server!')

    // res.status(200).json({
    //     status: 'success',
    //     // requestedAt: req.requestTime,
    //     // results: expenses.length,
    //     // data: {
    //     //     results: expenses
    //     // }
    // });
};

export const getExpense = (req: Request, res: Response) => {
    const id = req.params.id;


    res.status(200).json({
        status: 'success',
        data: {

        }
    });
};

export const createExpense = (req: Request, res: Response) => {

};

export const updateExpense = (req: Request, res: Response) => {
    res.status(200).json({
        status: 'success',
        data: {
        }
    });
};

export const deleteExpense = (req: Request, res: Response) => {
    res.status(204).json({
        status: 'success',
        data: null
    });
};
