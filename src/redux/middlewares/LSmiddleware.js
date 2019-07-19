const LSMiddleware = store => next => action => {
  console.log(store);
  console.log('ls', localStorage.getItem('expensesList'));
  next(action);
};
export default LSMiddleware;
