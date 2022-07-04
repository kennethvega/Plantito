import React from "react";

import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import { images } from "../constants";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={`${styles["hero-section"]}  grid container`}>
      <motion.div
        // initial={{ y: 20, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.5 }}
        className={styles["hero-text"]}
      >
        <h1>
          Spread <span>green</span> in your life.
        </h1>
        <p>Beautiful plants for homes and offices</p>
        <Link href="/#Plants">
          <button type="button" className="btn margin-top">
            <a>Shop now</a>
          </button>
        </Link>
      </motion.div>
      <div className={styles["hero-image"]}>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles["hero-images"]}
        >
          <Image
            src={images.heroImage}
            alt="Plants example"
            height={515}
            width={500}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
