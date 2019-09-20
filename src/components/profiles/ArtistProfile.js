import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import ProfileImagesContainer from '../../containers/ProfileImagesContainer';
import ProfilePartnersContainer from '../../containers/ProfilePartnersContainer';
import RequestButton from './RequestButton';
import AuthHeader from '../auth-header/AuthHeader';
import styles from './Profile.css';
// import { addUserById } from '../../actions/userActions';

function ArtistProfile({ match: { params }, addUser, currentUser, profileUser, addPartnership }) {
  useEffect(() => {
    addUser(params.id);
  }, []);

  const clickHandler = () => {
    addPartnership(currentUser._id, profileUser._id);
  };

  return(
    <div>
      <AuthHeader/>
      <h2>artist</h2>
      <div className={styles.images}>
        {/* <ProfileImagesContainer/> */}
      </div>
      <div className={styles.info}>
      </div>
      <div className={styles.partners}>
        <ProfilePartnersContainer/>
        <RequestButton handleRequest={clickHandler}/>
      </div>
    </div>
  );
}

ArtistProfile.propTypes = {
  match: PropTypes.object.isRequired,
  addUser: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  profileUser: PropTypes.object.isRequired,
  addPartnership: PropTypes.func.isRequired
};

export default ArtistProfile;
