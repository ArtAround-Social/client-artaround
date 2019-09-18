import React from 'react';
import UserImagesContainer from '../../containers/UserImagesContainer';
import UserPartnersContainer from '../../containers/UserPartnersContainer';
import UserForm from '../auth-header/UserForm';

export default function UserHome() {
  return(
    <>
    <h2>userHome</h2>
      <UserForm/>
      <UserImagesContainer/>
      <UserPartnersContainer/>
    </>
  );
}
