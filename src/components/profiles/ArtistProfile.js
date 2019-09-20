import React from 'react';
// import PropTypes from 'prop-types';
import ProfileImagesContainer from '../../containers/ProfileImagesContainer';
import ProfilePartnersContainer from '../../containers/ProfilePartnersContainer';
import ArtistInfoContainers from '../../containers/ArtistInfoContainers';
import RequestButton from './RequestButton';
import AuthHeader from '../auth-header/AuthHeader';
import styles from './Profile.css';

function ArtistPropfile() {
  return(
    <div>
      <AuthHeader/>
      <h2>artist</h2>
      <div className={styles.images}>
        {/* <ProfileImagesContainer/> */}
      </div>
      <div className={styles.info}>
        <ArtistInfoContainers/>
      </div>
      <div className={styles.partners}>
        <ProfilePartnersContainer/>
        <RequestButton/>
      </div>
    </div>
  );
}

ArtistPropfile.propTypes = {

};

export default ArtistPropfile;
