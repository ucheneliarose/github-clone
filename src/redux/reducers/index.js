import { combineReducers } from 'redux';
import userReducer from './userReducer';
import repositoryReducer from './repositoryReducer';
const rootReducer = combineReducers({
  user: userReducer,
  repositories: repositoryReducer,
});
export default rootReducer;
