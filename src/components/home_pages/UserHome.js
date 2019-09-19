import React from 'react';
// import Async from 'react-async';
import UserImagesContainer from '../../containers/UserImagesContainer';
import UserPartnersContainer from '../../containers/UserPartnersContainer';
import { useAuth0 } from '../../AuthProvider';
import AuthHeaderContainer from '../../containers/AuthHeaderContainer';
import styles from './UserHome.css';
import FileUpload from '../file-upload/FileUpload';
import { Link } from 'react-router-dom';

// <UserForm userAuth0Id={user.sub} />

export default function UserHome() {
  const { user: session } = useAuth0();

  if(session){
    return(
      <div className={styles.all}>
        <h1>UserHome</h1>
        <AuthHeaderContainer/>
        <div className={styles.images}>
          <FileUpload/>
          <UserImagesContainer/>
        </div>
        <div className={styles.partners}>
          <UserPartnersContainer/>
          <Link to='/allartists'>Discover New Artist</Link>
        </div>
      </div>
    );
  } else {
    return<h1>HIIIIII!!!!</h1>;
  }
}
