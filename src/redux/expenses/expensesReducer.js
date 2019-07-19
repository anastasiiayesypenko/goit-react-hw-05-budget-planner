import actionTypes from '../actionTypes';

const initialState = JSON.parse(localStorage.getItem('expensesList')) || [];
const expensesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_EXPENSE:
      return [payload, ...state];
    case actionTypes.DELETE_EXPENSE:
      return state.filter(expense => expense.id !== payload.id);
    default:
      return state;
  }
};
export default expensesReducer;
