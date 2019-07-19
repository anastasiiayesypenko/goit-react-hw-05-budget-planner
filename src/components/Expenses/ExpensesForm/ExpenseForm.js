import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import Form from '../../shared/Form';
import Label from '../../shared/Label';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const labelStyles = `
  margin-bottom: 16px;
`;

export const notifySubzero = () =>
  toast.error('You entered negative number or 0!', {
    position: toast.POSITION.BOTTOM_CENTER,
  });

const ExpenseForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const handleChange = e => {
    const conditional =
      e.target.name === 'name'
        ? setName(e.target.value)
        : setAmount(Number(e.target.value));
    return conditional;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (amount > 0) {
      onSave(name, amount);
    } else {
      notifySubzero();
    }

    setName('');
    setAmount('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="type something..."
          />
        </Label>

        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={handleChange}
            placeholder="0"
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>

      <ToastContainer autoClose={10000} />
    </div>
  );
};
ExpenseForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default ExpenseForm;
