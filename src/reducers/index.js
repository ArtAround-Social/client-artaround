import { combineReducers } from 'redux';
import artist from './artistFormReducer';
import gallery from './galleryFormReducer';
import user from './signinReducer';

export default combineReducers({
  artist,
  gallery,
  user
});
