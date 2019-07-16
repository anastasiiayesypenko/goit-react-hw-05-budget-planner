import shortid from 'shortid';
import actionTypes from '../actionTypes';

export const addExpense = (expenseName, expenseAmount) => ({
  type: actionTypes.ADD_EXPENSE,
  payload: {
    id: shortid.generate(),
    name: expenseName,
    amount: expenseAmount,
  },
});

export const deleteExpense = id => ({
  type: actionTypes.DELETE_EXPENSE,
  payload: {
    id,
  },
});
