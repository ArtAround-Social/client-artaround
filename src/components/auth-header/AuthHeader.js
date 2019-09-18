import React from 'react';
import { useAuth0 } from '../../AuthProvider';
// import { findUser } from '../../services/userApi';

export default function AuthHeader() {
  const { isAuthenticated, auth0Client } = useAuth0();
  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout({ returnTo: 'http://localhost:7890' });

  return(
    <>
      {!isAuthenticated && <button onClick={login}>Login</button>}
      {isAuthenticated && <button onClick={logout}>Logout</button>}
    </>
  );
}
