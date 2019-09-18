import React from 'react';
import Routes from './landing_page/Routes';
import FileUpload from './file-upload/FileUpload';
import UserForm from './auth-header/UserForm';

export default function App() {
  return(
  <>
    <UserForm />
    <Routes/>
    <FileUpload />
  </>
  );
}
