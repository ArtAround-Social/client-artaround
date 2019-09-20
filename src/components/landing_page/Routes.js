import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import AllArtistsContainer from '../../containers/AllArtistsContainer';
import UserHome from '../home_pages/UsrHome';
// import ArtistProfile from '../profiles/ArtistProfile';
import GalleryProfile from '../profiles/GalleryProfile';
import LandingPage from './LandingPage';
import { withSession } from '../../AuthProvider';
import AuthContainer from '../../containers/AuthContainer';
import ArtistInfoContainer from '../../containers/ArtistInfoContainer';



export default function Routes() {
  return(
    <Switch>
      <Route path='/auth' component={withSession(AuthContainer)}/>
      <Route path='/userhome' component={withSession(UserHome)}/>
      <Route path='/artist/:id' component={ArtistInfoContainer}/>
      <Route path='/gallery/:id' component={GalleryProfile}/>
      <Route path='/allartists' component={AllArtistsContainer}/>
      <Route exact path='/' component={LandingPage}/>
    </Switch>
  );
}

{/* <Route exact path='/' component={LandingPageContainer}/> */}
