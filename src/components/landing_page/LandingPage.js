import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LandingPage({ handleSignin, email, password }) {
  return(
    <>
      <h3>CREATE ACCOUNT:</h3>
      
        <Link to='/artistform'>Artist Account </Link><br/>
        <Link to='/galleryform'> Gallery Account</Link>
      

      <h3>ALREADY HAVE AN ACOUNT:</h3>
      <form onSubmit={handleSignin}>
        <input value={email} placeholder='email'/><br/>
        <input type='password' value={password} placeholder='password'/><br/>
        <button>Login</button>
      </form>
    </>
  );
}

LandingPage.propTypes = {
  handleSignin: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string
};

export default LandingPage;
