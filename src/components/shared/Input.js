import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  color: #171718;
  font: inherit;
  font-size: 1.2rem;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  width: 100%;
  outline: 0;

  &:focus {
    border: 1px solid #2b32b2;
  }
`;

const Input = ({
  type = ' text',
  value,
  onChange = () => null,
  name = '',
  placeholder = '',
}) => (
  <StyledInput
    type={type}
    value={value}
    required
    placeholder={placeholder}
    onChange={onChange}
    name={name}
  />
);
Input.defaultProps = {
  name: '',
};
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  // value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default Input;
