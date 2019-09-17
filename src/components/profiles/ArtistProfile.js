import React from 'react';
// import PropTypes from 'prop-types';
import ProfileImagesContainer from '../../containers/ProfileImagesContainer';
import HeaderContainer from '../../containers/HeaderContainer';
import ProfilePartnersContainer from '../../containers/ProfilePartnersContainer';
import ArtistInfoContainers from '../../containers/ArtistInfoContainers';
import RequestButton from './RequestButton';

function ArtistPropfile() {
  return(
    <>
    <HeaderContainer/>
    <h2>artist</h2>
    <ArtistInfoContainers/>
    <ProfileImagesContainer/>
    <ProfilePartnersContainer/>
    <RequestButton/>
    </>
  );
}

ArtistPropfile.propTypes = {

};

export default ArtistPropfile;
