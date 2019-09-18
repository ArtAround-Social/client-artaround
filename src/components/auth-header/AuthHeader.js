import React from 'react';
import { useAuth0 } from '../../AuthProvider';
import Header from '../header/Header';
// import { findUser } from '../../services/userApi';
import UserForm from '../signup_forms/UserForm';

export default function AuthHeader() {
  const { isAuthenticated, auth0Client, user } = useAuth0();
  const login = () => auth0Client.loginWithRedirect();
  const logout = () => auth0Client.logout({ returnTo: 'http://localhost:7890' });

  // console.log('### AUTH ###', user ? Object.keys(user) : 'No user');
  // if(isAuthenticated && !findUser(user.sub)) userComponent = <UserForm />;

  user
    ? console.log(Object.keys(user), user.sub)
    : 'No user';
  const userType = 'artist';
  const name = 'George';

  // if(user) console.log(findUser(user.sub));
  

  return(
    <>
      {!isAuthenticated && <button onClick={login}>Login</button>}
      {/* {isAuthenticated && !findUser('user.sub') &&
        <UserForm />
      } */}
      <UserForm />
      {isAuthenticated &&
        <>
          <Header user_type={userType} name={name} />
          <button onClick={logout}>Logout</button>
        </>
      }
    </>
  );
}
