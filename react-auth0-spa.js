import React, { useState, useEffect, useContext, createContext } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";
import Loading from "./components/shared/Loading";
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import { useInterval } from "./utils/useInterval";

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = createContext();
export const useAuth0 = () => useContext(Auth0Context);
export const Auth0Provider = ({
                                children,
                                onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
                                ...initOptions
                              }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [auth0Client, setAuth0] = useState(null);
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  const [expiresAt, setExpiresAt] = useState(new Date().getTime());
  const [isSiteOwner, setIsSiteOwner] = useState(false);

  const namespace = `${process.env.NAMESPACE}`;

  useInterval(() => {
    const actualDate = new Date().getTime();
    const beforeDate = expiresAt * 1000;
    if (actualDate > beforeDate) {
      auth0Client.logout();
    }
  }, 15000);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);
      if (window.location.search.includes("code=")) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        auth0FromHook.getIdTokenClaims().then(data => {
          setExpiresAt(data.exp)
          if(new Date().getTime() < data.exp) {
            return auth0FromHook.logout()
          }
          Cookies.set('jwt', data.__raw);
        });
        setUser(user);
        const owner = user[namespace + '/role'] === 'siteOwner';
        setIsSiteOwner(owner)
      } else {
        Cookies.remove('jwt');
      }

      setLoading(false);
    };
    initAuth0();
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    setUser(user);
    setIsAuthenticated(true);
    const owner = user[namespace + '/role'] === 'siteOwner';
    setIsSiteOwner(owner)
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
    const owner = user[namespace + '/role'] === 'siteOwner';
    setIsSiteOwner(owner)
  };
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        isSiteOwner,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p)
      }}
    >
      {loading ? <Loading/> : children}
    </Auth0Context.Provider>
  );
};
