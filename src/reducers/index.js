import {combineReducers} from 'redux';
import splash from '../features/splash/reducers/index';

const rootReducer = combineReducers({
  splash,
});
export default rootReducer;
