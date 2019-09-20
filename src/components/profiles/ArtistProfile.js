import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import ProfileImagesContainer from '../../containers/ProfileImagesContainer';
import ProfilePartnersContainer from '../../containers/ProfilePartnersContainer';
import RequestButton from './RequestButton';
import AuthHeader from '../auth-header/AuthHeader';
import styles from './Profile.css';
// import { addUserById } from '../../actions/userActions';

function ArtistProfile({ match: { params }, addUser, user }) {
  useEffect(() => {
    addUser(params.id);
  }, []);

  console.log(user);
  // componentDidMount(){
  //   console.log('PARAMS', this.props.match.params.id);
  //   addUserById(this.props.match.params.id);
  // }
  
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
        <RequestButton/>
      </div>
    </div>
  );
}

ArtistProfile.propTypes = {
  match: PropTypes.object.isRequired,
  addUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default ArtistProfile;
