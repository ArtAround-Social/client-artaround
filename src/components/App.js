import React from 'react';
import Routes from './landing_page/Routes';
import HeaderContainer from '../containers/HeaderContainer';
import FileUpload from './file-upload/FileUpload';

export default function App() {
  return(
  <>
    <HeaderContainer/>
    <Routes/>
    <FileUpload />
  </>
  );
}
