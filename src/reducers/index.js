import { combineReducers } from 'redux';
import artist from './artistFormReducer';
import gallery from './galleryFormReducer';
import user from './signinReducer';
import images from './ImageGridReducer';

export default combineReducers({
  artist,
  gallery,
  user,
  images
});
