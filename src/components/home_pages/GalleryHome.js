import React from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import ImageGridContainer from '../../containers/ImageGridContainer';
import PartnersContainer from '../../containers/PartnersContainer';
import { Link } from 'react-router-dom';


export default function ArtistHome() {
  return(
    <>
      <HeaderContainer />
      <ImageGridContainer/>
      <PartnersContainer/>
      <Link to='/allartists'>Find New Artists</Link>    
    </>
  );
}
