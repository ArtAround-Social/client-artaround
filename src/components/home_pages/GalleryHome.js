import React from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import UserImagesContainer from '../../containers/UserImagesContainer';
import UserPartnersContainer from '../../containers/UserPartnersContainer';
import { Link } from 'react-router-dom';
import FileUpload from '../file-upload/FileUpload';


export default function ArtistHome() {
  return(
    <>
      <HeaderContainer/>
      <UserImagesContainer/>
      <FileUpload/>
      <UserPartnersContainer/>
      <Link to='/allartists'>Find New Artists</Link>    
    </>
  );
}
