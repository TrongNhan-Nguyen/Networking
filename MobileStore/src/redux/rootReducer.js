import {combineReducers} from 'redux';
import filterReducer from './reducers/filter';
import searchbarReducer from './reducers/searchbar';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  searchbar: searchbarReducer,
  filter: filterReducer,
  user: userReducer,
});
export default rootReducer;
