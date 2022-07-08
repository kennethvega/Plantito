import React from "react";
import styles from "./FeaturedBrands.module.scss";

const FeaturedBrands = () => {
  return (
    <div className={styles.container}>
      <p>as Featured in</p>
      <div className={styles["brands-container"]}>
        <img src="./forbes.svg" alt="" />
        <img src="./businessinsider.svg" alt="" />
        <img src="./losangeles.svg" alt="" />
        <img src="./realsimple.svg" alt="" />
      </div>
    </div>
  );
};

export default FeaturedBrands;
