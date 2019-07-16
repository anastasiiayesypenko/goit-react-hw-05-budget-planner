import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BudgetForm from '../BudgetForm/BudgetForm';
import ExpenseForm from '../Expenses/ExpensesForm/ExpenseForm';
import ExpensesTable from '../Expenses/ExpensesTable/ExpensesTable';
import Values from '../Values/Values';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({ budget, expenses, saveBudget, addExpense, deleteExpense }) => {
  return (
    <Container>
      <BudgetForm onSave={saveBudget} />

      <Values
        budget={budget}
        expenses={expenses.reduce((acc, expense) => acc + expense.amount, 0)}
        balance={
          budget - expenses.reduce((acc, expense) => acc + expense.amount, 0)
        }
      />

      <ExpenseForm onSave={addExpense} />

      {expenses.length > 0 && (
        <ExpensesTable items={expenses} onRemove={deleteExpense} />
      )}
    </Container>
  );
};
App.propTypes = {
  budget: PropTypes.number.isRequired,
  saveBudget: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      expenseName: PropTypes.string.isRequired,
      expenseAmount: PropTypes.number.isRequired,
    }),
  ).isRequired,
  addExpense: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired,
};
export default App;
