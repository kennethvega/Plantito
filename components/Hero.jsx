import React from "react";
import styles from "./Hero.module.scss";
import { images } from "../constants";
import Image from "next/image";
const Hero = () => {
  return (
    <section
      className={`${styles["hero-section"]}  grid grid--2-cols container`}
    >
      <div className={styles["hero-text"]}>
        <h1>
          Spread <span>green</span> in your life.
        </h1>
        <p>Beautiful plants for homes and offices</p>
        <button className="btn margin-top">Shop now</button>
      </div>
      <div className={styles["hero-image"]}>
        <div className={styles["hero-images"]}>
          <Image
            src={images.heroImage}
            alt="Plants example"
            height={515}
            width={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
