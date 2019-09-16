import { combineReducers } from 'redux';
import artist from './artistFormReducer';
import landingPage from './landingPageReducer';
import user from './signinReducer';

export default combineReducers({
  artist,
  landingPage,
  user
});
