import React, { useState, useEffect, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

// import { setToken } from './services/allImagesCall';

function DEFAULT_REDIRECT_CALLBACK(){
  window.history.replaceState({},
    document.title,
    window.location.pathname);
}

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);

export const withSession = Comp => {
  return function WithSessionHOC(props) {
    const { isAuthenticated, loading, auth0Client } = useAuth0();
    if(!isAuthenticated && !loading) auth0Client.loginWithRedirect();

    if(!isAuthenticated && loading) return null;

    return<Comp {...props} />;
  };
};

export default function Auth0Provider({
  // eslint-disable-next-line react/prop-types
  children, onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}){
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth0 = async() => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if(window.location.search.includes('code=')){
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      if(isAuthenticated){
        const user = await auth0FromHook.getUser();
        setUser(user);

        // const claims = await auth0FromHook.getIdTokenClaims();
        // setToken(claims.__raw);
      }

      setLoading(false);
    };
    initAuth0();
  }, []);

  return(
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        auth0Client
      }}>
      {children}
    </Auth0Context.Provider>
  );
}
