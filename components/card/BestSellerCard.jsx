import React from "react";
import styles from "./Card.module.scss";
import Link from "next/link";

import { urlFor } from "../../lib/client";

const BestSellerCard = ({
  bestseller: { image, slug, name, price, summary, tags },
}) => {
  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div className={styles["card__container"]}>
          <div className={styles["card__image"]}>
            <img
              src={urlFor(image && image[1])}
              className={styles.image}
              alt={name}
            />
          </div>
          <div className={styles["details-container"]}>
            <div className={styles["details__container"]}>
              <p>{name}</p>
              <p>$ {price}</p>
            </div>
            <div className={styles["card__summary"]}>{summary}</div>
          </div>
          <span className={styles["card__tag"]}>{tags && tags[0]}</span>
        </div>
      </Link>
    </>
  );
};

export default BestSellerCard;
