import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import LSMiddleware from './middlewares/LSmiddleware';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(LSMiddleware)),
);
export default store;
