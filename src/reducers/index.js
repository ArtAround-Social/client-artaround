import { combineReducers } from 'redux';
import artistForm from './artistFormReducer';
import galleryForm from './galleryFormReducer';
import user from './signinReducer';
import userImages from './userImagesReducer';
import invites from './InvitesContainer';
import userPartners from './userPartnersReducers';
import allArtists from './allArtistsReducer';
import profileImages from './profileImagesReducer';
import profilePartners from './profilePartnersReducer';
import artistInfo from './artistInfoReducer';
import galleryInfo from './galleryInfoReducer';
 
export default combineReducers({
  user,
  userImages,
  userPartners,
  invites,
  profileImages,
  profilePartners,
  artistInfo,
  galleryInfo,
  allArtists,
  artistForm,
  galleryForm,
});
