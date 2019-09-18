import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import AllArtistsContainer from '../../containers/AllArtistsContainer';
import UserHome from '../home_pages/UserHome';
import ArtistProfile from '../profiles/ArtistProfile';
import GalleryProfile from '../profiles/GalleryProfile';
import LandingPage from './LandingPage';

export default function Routes() {
  return(
    <Switch>
      <Route path='/userhome' component={UserHome}/>
      <Route path='/artist/:id' component={ArtistProfile}/>
      <Route path='/gallery/:id' component={GalleryProfile}/>
      <Route path='/allartists' component={AllArtistsContainer}/>
      <Route exact path='/' component={LandingPage}/>
    </Switch>
  );
}

{/* <Route exact path='/' component={LandingPageContainer}/> */}
