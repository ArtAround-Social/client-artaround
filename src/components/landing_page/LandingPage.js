import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ArtistFormContainer from '../../containers/ArtistFormContainer';

function LandingPage({ handleSignin, email, password }) {
  return(
    <>
        <h3>CREATE ACCOUNT:</h3>
      <Router>
        <Link to='/artistform'>Artist Account</Link><br/>
        <Link to='/galleryform'>Gallery Account</Link>

        <Route path='/artistform' component={ArtistFormContainer}></Route>
        <Route path='/galleryform' component=''></Route>
      </Router>

        <h3>ALREADY HAVE AN ACOUNT:</h3>
      <form onSubmit={handleSignin}>
        <input value={email} placeholder='email'/><br/>
        <input value={password} placeholder='password'/><br/>
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
