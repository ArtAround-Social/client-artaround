import React from 'react';
import UserImagesContainer from '../../containers/UserImagesContainer';
import UserPartnersContainer from '../../containers/UserPartnersContainer';
import { useAuth0 } from '../../AuthProvider';
import AuthHeaderContainer from '../../containers/AuthHeaderContainer';
import styles from './UserHome.css';
import FileUpload from '../file-upload/FileUpload';
import { Link } from 'react-router-dom';

export default function UserHome() {
  const { user } = useAuth0();

  if(user){
    return(
      <div className={styles.all}>
        <AuthHeaderContainer/>
        <div className={styles.images}>
          <FileUpload />
          <UserImagesContainer/>
        </div>
        <div className={styles.partners}>
          <UserPartnersContainer/>
          <Link to='/allartists'>Discover New Artist</Link>
        </div>
      </div>
    );
  } else {
    return<h1>hi</h1>;
  }
}

