import "../styles/global.scss";
import "../styles/_utility.scss";
import { Layout } from "../components";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
