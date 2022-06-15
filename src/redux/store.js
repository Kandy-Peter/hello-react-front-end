import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reducer } from './greeting';

const rootReducer = combineReducers({
  reducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
