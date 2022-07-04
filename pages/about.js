import styles from "../styles/about.module.scss";
import React from "react";

const about = () => {
  return (
    <div className={styles["about-container"]}>
      <h3>About Plantito</h3>
      <p>
        Plantito is a fully functioning e-commerce website for plants and is
        only a personal project of{" "}
        <a
          href="https:kennethvega.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          kennethvega.com
        </a>{" "}
        it aims to showcase my skills as a front-end developer that can build
        not only beautiful UI/UX experience, but also highly useful web
        application such as an E-commerce store. This website is built using
        Next.js, Sanity, Scss, and Stripe. Disclaimer the images used in this
        website are not mine, it belongs to{" "}
        <a
          href="https://www.leonandgeorge.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          https://www.leonandgeorge.com/
        </a>
        .
      </p>
    </div>
  );
};

export default about;
