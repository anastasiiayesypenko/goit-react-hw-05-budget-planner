import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stat from './Stat/Stat';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => {
  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget));
  }, [budget]);
  return (
    <Container>
      <Stat label="Budget" value={budget} isPositive />
      <Stat label="Expenses" value={expenses} />

      <Stat label="Balance" value={balance} isPositive={balance >= 0} />
    </Container>
  );
};
Values.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Values;
