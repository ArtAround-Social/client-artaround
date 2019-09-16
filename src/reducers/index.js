import { combineReducers } from 'redux';
import artist from './artistFormReducer';
import gallery from './galleryFormReducer';

export default combineReducers({
  artist,
  gallery  
});
