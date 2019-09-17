import React from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import ImageGridContainer from '../../containers/ImageGridContainer';
import InvitesContainer from '../../containers/InvitesContainer';
import PartnersContainer from '../../containers/PartnersContainer';

export default function ArtistHome() {
  return(
    <>
      <HeaderContainer />
      <ImageGridContainer/>
      <InvitesContainer/>
      <PartnersContainer/>
    </>
  );
}
