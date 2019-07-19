import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

import { notifySubzero } from '../Expenses/ExpensesForm/ExpenseForm';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const labelStyles = `
  margin-bottom: 16px;
`;

const BudgetForm = ({ onSave }) => {
  const [budget, setBudget] = useState('');

  const handleChange = e => {
    setBudget(Number(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (budget > 0) {
      onSave(budget);
    } else {
      notifySubzero();
    }
    setBudget('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label customStyles={labelStyles}>
        Enter your total budget
        <Input
          type="number"
          value={budget}
          onChange={handleChange}
          placeholder="0"
        />
      </Label>

      <Button label="Save" type="submit" />
    </Form>
  );
};

BudgetForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
export default BudgetForm;
