import { combineReducers } from 'redux';
import budgetReducer from './budget/budgetReducer';
import expenseReducer from './expenses/expensesReducer';

const rootReducer = combineReducers({
  budget: budgetReducer,
  expenses: expenseReducer,
});
export default rootReducer;
