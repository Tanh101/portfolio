import { createStore, combineReducers } from 'redux';
import themeReducer from '../reducers/themeReducer';
import scrollReducer from '../reducers/scrollReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  scroll: scrollReducer,
});

const store = createStore(rootReducer);

export default store;
