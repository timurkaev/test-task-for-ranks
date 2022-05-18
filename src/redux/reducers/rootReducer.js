import { combineReducers } from 'redux';
import { valutesReducer } from './valutesReducer';

export const rootReducer = combineReducers({
  valutes: valutesReducer,
});
