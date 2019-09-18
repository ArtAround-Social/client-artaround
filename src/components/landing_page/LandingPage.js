import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './LandingPage.css';
function LandingPage({ handleSignin, email, password }) {
  return(
    <div className={styles.body}>
      <h3 className={styles.header1}>CREATE ACCOUNT</h3>
      <p className={styles.signup}>
        <Link className={styles.artist} to='/artistform'>Artist Account</Link>
        <Link className={styles.gallery} to='/galleryform'> Gallery Account</Link>
      </p>
      
      <h3 className={styles.header2}>ALREADY HAVE AN ACOUNT</h3>
      <form onSubmit={handleSignin}>
        <input value={email} placeholder='email'/><br/>
        <input type='password' value={password} placeholder='password'/><br/>
        <button>Login</button>
      </form>
    </div>
  );
}

LandingPage.propTypes = {
  handleSignin: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string
};

export default LandingPage;
