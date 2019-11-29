import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

 MyApp.getInitialProps = async (appContext) => {
   const appProps = await App.getInitialProps(appContext);
   return { ...appProps }
 };

export default MyApp
