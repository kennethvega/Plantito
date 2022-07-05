import React from "react";
import styles from "./FeaturedBrands.module.scss";
import Image from "next/image";
const FeaturedBrands = () => {
  return (
    <div className={styles.container}>
      <p>Feature in</p>
      <div className={styles["brands-container"]}>{/* <Image src=''/> */}</div>
    </div>
  );
};

export default FeaturedBrands;
