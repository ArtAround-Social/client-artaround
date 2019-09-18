import React from 'react';
import HeaderContainer from '../../containers/HeaderContainer';
import UserImagesContainer from '../../containers/UserImagesContainer';
import InvitesContainer from '../../containers/InvitesContainer';
import UserPartnersContainer from '../../containers/UserPartnersContainer';

export default function ArtistHome() {
  return(
    <>
      <HeaderContainer />
      <UserImagesContainer/>
      <InvitesContainer/>
      <UserPartnersContainer/>
    </>
  );
}
