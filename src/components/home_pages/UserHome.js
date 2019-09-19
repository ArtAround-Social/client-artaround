import React from 'react';
import UserImagesContainer from '../../containers/UserImagesContainer';
import UserPartnersContainer from '../../containers/UserPartnersContainer';
import UserForm from '../auth-header/UserForm';
import { useAuth0 } from '../../AuthProvider';
import { findUser } from '../../services/userApi';
import AuthHeader from '../auth-header/AuthHeader';
import styles from './UserHome.css';
import FileUpload from '../file-upload/FileUpload';
import { Link } from 'react-router-dom';

export default function UserHome() {
  const { user } = useAuth0();
  // console.log(user);
  
  if(user){

    // console.log('##### USER #####', user.sub);
    // console.log(findUser({ userAuth0Id: user.sub }).then(it => console.log(it)));
    // const auth0Id = findUser({ userAuth0Id: user.sub }).then(it => it.userAuth0Id);
    // console.log(auth0Id);
    
    // if(auth0Id === false) {
    //   return<UserForm userAuth0Id={user.sub}/>;
    // }
    // return findUser({ userAuth0Id: user.sub }).then(it => {
    //   console.log(it);
    //   if(!it.userAuth0Id) {
        
    //     return<UserForm userAuth0Id={user.sub}/>;
    //   }

    // return findUser({ userAuth0Id: user.sub })
    //   .then(it => {
    //     console.log(it);

    //     if(it.userAuth0Id === false) {
    //       return(
    //         <>
    //           <UserForm userAuth0Id={user.sub}/>
    //         </>);
    //     }
    return(
      <div className={styles.all}>
        <AuthHeader/>
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
    return<h1>hi</h1>;
  }
}
