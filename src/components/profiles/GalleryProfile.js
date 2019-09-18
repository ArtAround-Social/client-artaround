import React from 'react';
// import PropTypes from 'prop-types';
import ProfileImagesContainer from '../../containers/ProfileImagesContainer';
import HeaderContainer from '../../containers/HeaderContainer';
import ProfilePartnersContainer from '../../containers/ProfilePartnersContainer';
import GalleryInfoContainer from '../../containers/GalleryInfoContainer';
import ReviewButtons from './ReviewButton';

function GalleryPropfile() {
  return(
    <>
    <HeaderContainer/>
    <h2>gallery</h2>
    <GalleryInfoContainer/>
    <ProfileImagesContainer/>
    <ProfilePartnersContainer/>
    <ReviewButtons/>
    </>
  );
}

GalleryPropfile.propTypes = {

};

export default GalleryPropfile;
