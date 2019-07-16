import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from '../../shared/Form';
import Label from '../../shared/Label';
import Input from '../../shared/Input';
import Button from '../../shared/Button';

const labelStyles = `
  margin-bottom: 16px;
`;

const ExpenseForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const handleChange = e => {
    const conditional =
      e.target.name === 'name'
        ? setName(e.target.value)
        : setAmount(e.target.value);
    return conditional;
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(name, Number(amount));
    setName('');
    setAmount(0);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label customStyles={labelStyles}>
        Enter expense name
        <Input type="text" name="name" value={name} onChange={handleChange} />
      </Label>

      <Label customStyles={labelStyles}>
        Enter expense amount
        <Input
          type="number"
          name="amount"
          value={amount}
          onChange={handleChange}
        />
      </Label>

      <Button label="Add" type="submit" />
    </Form>
  );
};
ExpenseForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default ExpenseForm;
