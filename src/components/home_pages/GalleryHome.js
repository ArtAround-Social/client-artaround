import React from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import UserImagesContainer from '../../containers/UserImagesContainer';
import UserPartnersContainer from '../../containers/UserPartnersContainer';
import { Link } from 'react-router-dom';


export default function ArtistHome() {
  return(
    <>
      <HeaderContainer/>
      <UserImagesContainer/>
      <UserPartnersContainer/>
      <Link to='/allartists'>Find New Artists</Link>    
    </>
  );
}
