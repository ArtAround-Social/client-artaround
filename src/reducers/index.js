import { combineReducers } from 'redux';

import artist from './artistFormReducer';
import gallery from './galleryFormReducer';
import user from './signinReducer';
import images from './ImageGridReducer';
import invites from './InvitesContainer';
import partners from './PartnersReducers';
import allArtists from './allArtistsReducer';

export default combineReducers({
  artist,
  gallery,
  user,
  images,
  invites,
  partners,
  allArtists
});
