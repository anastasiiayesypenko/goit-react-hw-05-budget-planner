import actionTypes from '../actionTypes';

const saveBudget = budget => ({
  type: actionTypes.SAVE_BUDGET,
  payload: {
    budget,
  },
});
export default saveBudget;
