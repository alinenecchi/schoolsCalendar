import '../utils/styles/App.scss';
import '../utils/styles/reset.scss';
import NewNav from "../components/molecules/navbar";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} >
         <NewNav />
    </Component>
}

export default MyApp;
