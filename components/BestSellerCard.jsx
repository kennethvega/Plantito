import React from "react";
import styles from "./Card.module.scss";
import Link from "next/link";

import { urlFor } from "../lib/client";

const BestSellerCard = ({
  bestseller: { image, slug, name, price, summary, tags },
}) => {
  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div className={styles["best-seller-card__container"]}>
          <div className={styles["best-seller-card__image"]}>
            <img
              src={urlFor(image && image[0])}
              width={250}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles["details-container"]}>
            <div className={styles["best-seller-card-details__container"]}>
              <p>{name}</p>
              <p>$ {price}</p>
            </div>

            <div className={styles["best-seller-card__summary"]}>{summary}</div>
          </div>
          <span className={styles["best-seller-card__tag"]}>
            {tags && tags[0]}
          </span>
        </div>
      </Link>
    </>
  );
};

export default BestSellerCard;
