import actionTypes from '../actionTypes';

const initialState = JSON.parse(localStorage.getItem('budget')) || 0;

const budgetReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SAVE_BUDGET:
      return payload.budget;
    case actionTypes.CHANGE_BUDGET:
      return payload.budget;
    default:
      return state;
  }
};
export default budgetReducer;
