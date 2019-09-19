import React, { useEffect } from 'react';
import { useAuth0 } from '../../AuthProvider';
import styles from './AuthHeader.css';
import PropTypes from 'prop-types';

export default function AuthHeader({ userById }) {
  const { isAuthenticated, auth0Client, user: session } = useAuth0();
  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout({ returnTo: process.env.CLIENT_URL });

  useEffect(() => {
    console.log(session);
    
    if(session) {
      userById(session.sub);
    }
  }, []);
  
  return(
    <section className={styles.header}>
      {!isAuthenticated && <button onClick={login}>Login</button>}
      {isAuthenticated && <button onClick={logout}>Logout</button>}
      {/* <h5>{currentUser.userType} Account</h5> */}
    </section>
  );
}

AuthHeader.propTypes = {
  userById: PropTypes.func,
  currentUser: PropTypes.shape({
    userType: PropTypes.string
  })
};
