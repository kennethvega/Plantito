import "../styles/global.scss";
import "../styles/_utility.scss";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            exit={{ opacity: 0, duration: 0.5 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </StateContext>
  );
}

export default MyApp;
