import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Plantito</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="An Ecommerce store for plants"></meta>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className={styles["main-container"]}>{children}</main>
      <footer className={styles.footer}>
        <Footer />
        <p className={styles.dev}>Design and built by Kenneth Vega</p>
      </footer>
    </div>
  );
};

export default Layout;
