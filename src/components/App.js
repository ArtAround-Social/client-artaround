import React from 'react';
// import Routes from './landing_page/Routes';
// import HeaderContainer from '../containers/HeaderContainer';
import FileUpload from './file-upload/FileUpload';
import AuthHeader from './auth-header/AuthHeader';

export default function App() {
  return(
  <>
    {/* <HeaderContainer/> */}
    <AuthHeader/>
    <FileUpload />
  </>
  );
}
