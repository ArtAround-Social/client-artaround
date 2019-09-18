import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import ArtistFormContainer from '../../containers/ArtistFormContainer';
import GalleryFormContainer from '../../containers/GalleryFormContainer';
import LandingPageContainer from '../../containers/LandingPageContainer';
import ArtistHome from '../home_pages/ArtistHome';
import GalleryHome from '../home_pages/GalleryHome';
import AllArtistsContainer from '../../containers/AllArtistsContainer';
import ArtistProfile from '../profiles/ArtistProfile';
import GalleryProfile from '../profiles/GalleryProfile';

export default function Routes() {
  return(
    <Switch>
      <Route path='/artisthome' component={ArtistHome}/>
      <Route path='/artist/:id' component={ArtistProfile}/>
      <Route path='/gallery/:id' component={GalleryProfile}/>
      <Route path='/allartists' component={AllArtistsContainer}/>
      <Route path='/galleryhome' component={GalleryHome}/>
      <Route path='/artistform' component={ArtistFormContainer}/>
      <Route path='/galleryform' component={GalleryFormContainer}/>
      <Route exact path='/' component={LandingPageContainer}/>
    </Switch>
  );
}

{/* <Route exact path='/' component={LandingPageContainer}/> */}
