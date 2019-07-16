import { connect } from 'react-redux';
import {
  addExpense,
  deleteExpense,
} from '../../redux/expenses/expensesActions';
import saveBudget from '../../redux/budget/budgetActions';
import App from './App';

const mapStateToProps = state => ({
  budget: state.budget,
  expenses: state.expenses,
});
const mapDispatchToProps = dispatch => ({
  saveBudget: budget => dispatch(saveBudget(budget)),
  addExpense: (name, amount) => dispatch(addExpense(name, amount)),
  deleteExpense: id => dispatch(deleteExpense(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
