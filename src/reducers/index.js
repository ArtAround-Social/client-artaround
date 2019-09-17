import { combineReducers } from 'redux';
import artist from './artistFormReducer';
import gallery from './galleryFormReducer';
import user from './signinReducer';
import userImages from './userImagesReducer';
import invites from './InvitesContainer';
import userPartners from './userPartnersReducers';
import allArtists from './allArtistsReducer';
import profileImages from './profileImagesReducer';

export default combineReducers({
  artist,
  gallery,
  user,
  userImages,
  invites,
  userPartners,
  allArtists,
  profileImages
});
