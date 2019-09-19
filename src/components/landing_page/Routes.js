import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import AllArtistsContainer from '../../containers/AllArtistsContainer';
import UserHome from '../home_pages/UserHome';
import ArtistProfile from '../profiles/ArtistProfile';
import GalleryProfile from '../profiles/GalleryProfile';
import LandingPage from './LandingPage';
import { withSession, useAuth0 } from '../../AuthProvider';



export default function Routes() {
  // const { user } = useAuth0();
  // console.log(user);
  return(
    <Switch>
      <Route path='/userhome' component={withSession(UserHome)}/>
      <Route path='/artist/:id' component={ArtistProfile}/>
      <Route path='/gallery/:id' component={GalleryProfile}/>
      <Route path='/allartists' component={AllArtistsContainer}/>
      <Route exact path='/' component={LandingPage}/>
    </Switch>
  );
}

{/* <Route exact path='/' component={LandingPageContainer}/> */}
