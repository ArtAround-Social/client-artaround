import React from 'react';
import { useAuth0 } from '../../../authProvider';

export default function AuthHeader() {
  const { isAuthenticated, auth0Client, user } = useAuth0();
  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout({ returnTo: 'http://localhost:7890' });

  console.log(user && 'unknown user');

  return(
    <>
      {!isAuthenticated && <button onClick={login}>Login</button>}
      {isAuthenticated && <button onClick={logout}>Logout</button>}
    </>
  );
}
