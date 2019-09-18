import React from 'react';
import AuthHeader from '../auth-header/AuthHeader';
import { useAuth0 } from '../../AuthProvider';
// import HeaderContainer from '../../containers/HeaderContainer';
// import UserImagesContainer from '../../containers/UserImagesContainer';
// import UserPartnersContainer from '../../containers/UserPartnersContainer';

export default function UserHome() {
  const { user } = useAuth0();
  
  if(user){
    console.log('##### USER #####', user.sub);
    return(
      <>
        <AuthHeader />
        <h2>userHome</h2>
          {/* <HeaderContainer/> */}
          {/* <UserImagesContainer/> */}
          {/* <UserPartnersContainer/> */}
      </>
    );
  } else {
    return<h1>Loading</h1>;
  }
  
}
