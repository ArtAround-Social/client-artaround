import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import AllArtistsContainer from '../../containers/AllArtistsContainer';
import UsrHome from '../home_pages/UsrHome';
import ArtistProfile from '../profiles/ArtistProfile';
import GalleryProfile from '../profiles/GalleryProfile';
import LandingPage from './LandingPage';
import { withSession } from '../../AuthProvider';



export default function Routes() {
  // const { user } = useAuth0();
  // console.log(user);
  return(
    <Switch>
      <Route path='/userhome' component={withSession(UsrHome)}/>
      <Route path='/artist/:id' component={ArtistProfile}/>
      <Route path='/gallery/:id' component={GalleryProfile}/>
      <Route path='/allartists' component={AllArtistsContainer}/>
      <Route exact path='/' component={LandingPage}/>
    </Switch>
  );
}

{/* <Route exact path='/' component={LandingPageContainer}/> */}
