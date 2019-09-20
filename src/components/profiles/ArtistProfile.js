import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileImagesContainer from '../../containers/ProfileImagesContainer';
import ProfilePartnersContainer from '../../containers/ProfilePartnersContainer';
import ArtistInfoContainers from '../../containers/ArtistInfoContainers';
import RequestButton from './RequestButton';
import AuthHeader from '../auth-header/AuthHeader';
import styles from './Profile.css';
import { addUserById } from '../../actions/userActions';

class ArtistProfile extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object,
    history: PropTypes.object
  }

  componentDidMount(){
    console.log('PARAMS', this.props.match.params.id);
    addUserById(this.props.match.params.id);
  }

  render() {
    return(
      <div>
        <AuthHeader/>
        <h2>artist</h2>
        <div className={styles.images}>
          <ProfileImagesContainer/>
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
}

export default ArtistProfile;
