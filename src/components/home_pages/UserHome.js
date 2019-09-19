import React from 'react';
import UserImagesContainer from '../../containers/UserImagesContainer';
import UserPartnersContainer from '../../containers/UserPartnersContainer';
import UserForm from '../auth-header/UserForm';
import { useAuth0 } from '../../AuthProvider';
import { findUser } from '../../services/userApi';
import AuthHeader from '../auth-header/AuthHeader';

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
      <>
        <AuthHeader/>
        <UserImagesContainer/>
        <UserPartnersContainer/>
      </>
    );
  } else {
    return<h1>hi</h1>;
  }
}
