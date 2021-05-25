import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './reducers';

const enhancers = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
));

export const store = createStore(
  reducers,
  enhancers,
);
