import React from "react"
import App from 'next/app'
import { Auth0Provider } from "../react-auth0-spa"
import config from "../auth_config.json"
import history from "../utils/history"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const MyApp = ({ Component, pageProps }) =>
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri='http://localhost:3000'
      onRedirectCallback={onRedirectCallback}
    >
      <Component {...pageProps} />
    </Auth0Provider>;

 MyApp.getInitialProps = async (appContext) => {
   const appProps = await App.getInitialProps(appContext);
   return { ...appProps }
 };

export default MyApp
