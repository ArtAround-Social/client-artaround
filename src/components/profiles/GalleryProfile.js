import React from 'react';
// import PropTypes from 'prop-types';
import ProfileImagesContainer from '../../containers/ProfileImagesContainer';
import ProfilePartnersContainer from '../../containers/ProfilePartnersContainer';
import GalleryInfoContainer from '../../containers/GalleryInfoContainer';
import ReviewButtons from './ReviewButton';
import AuthHeader from '../auth-header/AuthHeader';
import styles from './Profile.css';

function GalleryPropfile() {
  return(
    <div>
      <AuthHeader/>
      <h2>gallery</h2>
      <div className={styles.images}>
        <ProfileImagesContainer/>
      </div>
      <div className={styles.info}>
        <GalleryInfoContainer/>
      </div>
      <div className={styles.partners}>
        <ProfilePartnersContainer/>
        <ReviewButtons/>
      </div>
    </div>
  );
}

GalleryPropfile.propTypes = {

};

export default GalleryPropfile;
