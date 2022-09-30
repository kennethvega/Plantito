import React from "react";

import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import { images } from "../constants";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={`${styles["hero-section"]}  grid`}>
      <motion.div className={styles["hero-text"]}>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Spread <span>green</span> in your life.
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Beautiful plants for homes and offices
        </motion.p>
        <Link href="/#plants">
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            type="button"
            className="btn margin-top"
          >
            <a>Shop now</a>
          </motion.button>
        </Link>
        <div className={styles["hero-num"]}>
          <div className={styles["hero-num-content"]}>
            <p>3202+</p>
            <span>Customers</span>
          </div>
          <div className={styles["hero-num-content"]}>
            <p>5230+</p>
            <span>Delivered</span>
          </div>
        </div>
      </motion.div>
      <div className={styles["hero-image-container"]}>
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
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={styles.leaf1}
          >
            <Image src={images.leaf3} alt="leaf" />
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={styles.leaf2}
          >
            <Image src={images.leaf2} alt="leaf" />
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={styles.leaf3}
          >
            <Image src={images.leaf1} alt="leaf" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
