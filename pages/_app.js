import "../styles/global.scss";
import "../styles/_utility.scss";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </StateContext>
  );
}

export default MyApp;
