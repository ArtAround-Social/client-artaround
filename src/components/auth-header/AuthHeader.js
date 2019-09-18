import React from 'react';
import { useAuth0 } from '../../AuthProvider';
import Header from '../header/Header';

export default function AuthHeader() {
  const { isAuthenticated, auth0Client, user } = useAuth0();
  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout({ returnTo: 'http://localhost:7890' });

  // console.log('### AUTH ###', user ? Object.keys(user) : 'No user');
  user
    ? console.log(Object.keys(user), user.sub)
    : 'No user';
  const userType = 'artist';
  const name = 'George';

  // console.log(user && 'unknown user');

  return(
    <>
      {!isAuthenticated && <button onClick={login}>Login</button>}
      {isAuthenticated &&
        <>
          <Header user_type={userType} name={name} />
          <button onClick={logout}>Logout</button>
        </>
      }
    </>
  );
}
