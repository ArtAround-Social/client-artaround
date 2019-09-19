import React  from 'react';
import { useAuth0 } from '../../AuthProvider';
import styles from './AuthHeader.css';

export default function AuthHeader() {
  const { isAuthenticated, auth0Client } = useAuth0();
  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout({ returnTo: process.env.CLIENT_URL });
  
  return(
    <section className={styles.header}>
      {!isAuthenticated && <button onClick={login}>Login</button>}
      {isAuthenticated && <button onClick={logout}>Logout</button>}
    </section>
  );
}
