import React, { useState } from "react";
import styles from "../../styles/Product.module.scss";
import { client, urlFor } from "../../lib/client";
import { CardPlantList } from "../../components";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ products, product1, product2 }) => {
  const { decQty, incQty, qty, indexColor, setIndexColor, onAdd, pot, setPot } =
    useStateContext();

  const handleClick = () => {
    onAdd(product1, qty);
  };
  // console.log(product1);
  return (
    <div className="container">
      <div className={styles["product-detail-container"]}>
        <div>
          <div className={styles["image-container"]}>
            <img src={urlFor(product1.image && product1.image[indexColor])} />
          </div>
          <div className={styles["small-images-container"]}>
            {product1.image?.map((item, i) => (
              <img
                src={urlFor(item)}
                className={
                  i === indexColor
                    ? ` ${styles["small-image"]} ${styles["selected-image"]}
            `
                    : `${styles["small-image"]}`
                }
                onClick={() => setIndexColor(i)}
              />
            ))}
          </div>
        </div>

        <div className={styles["product-detail-desc"]}>
          <h4>{product1.name}</h4>
          <p>{product1.potColor[indexColor]}</p>
          <div className={styles.reviews}>
            <p>Good for {product2.tags[0]}</p>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>

          <span className={styles.details}>Details:</span>
          <p className={styles.details}>{product1.details}</p>
          <p className={styles.price}>$ {product1.price}</p>
          <div className={styles.quantity}>
            <p>Quantity</p>
            <div className={styles["quantity-desc"]}>
              <span className={styles.minus} onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className={styles.num}>{qty}</span>
              <span className={styles.plus} onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </div>
          </div>
          <div className={styles.buttons}>
            <button
              type="button"
              className={styles["add-to-cart"]}
              onClick={() => handleClick()}
            >
              Add to Cart
            </button>
            <button type="button" className={styles["buy-now"]} onClick="">
              Buy now
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      {/* {indexColor === 1 && (
        <div className={styles["product-detail-container"]}>
          <div>
            <div className={styles["image-container"]}>
              <img src={urlFor(product2.image && product2.image[indexColor])} />
            </div>
            <div className={styles["small-images-container"]}>
              {product2.image?.map((item, i) => (
                <img
                  src={urlFor(item)}
                  className={
                    i === indexColor
                      ? ` ${styles["small-image"]} ${styles["selected-image"]}
            `
                      : `${styles["small-image"]}`
                  }
                  onClick={() => setIndexColor(i)}
                />
              ))}
            </div>
          </div>

          <div className={styles["product-detail-desc"]}>
            <h4>{product2.name}</h4>
            <p>{product2.potColor}</p>
            <div className={styles.reviews}>
              <p>Good for {product2.tags[0]}</p>
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>(20)</p>
            </div>

            <span className={styles.details}>Details:</span>
            <p className={styles.details}>{product2.details}</p>
            <p className={styles.price}>$ {product2.price}</p>
            <div className={styles.quantity}>
              <p>Quantity</p>
              <div className={styles["quantity-desc"]}>
                <span className={styles.minus} onClick={decQty}>
                  <AiOutlineMinus />
                </span>
                <span className={styles.num}>{qty}</span>
                <span className={styles.plus} onClick={incQty}>
                  <AiOutlinePlus />
                </span>
              </div>
            </div>
            <div className={styles.buttons}>
              <button
                type="button"
                className={styles["add-to-cart"]}
                onClick={() => handleClick()}
              >
                Add to Cart
              </button>
              <button type="button" className={styles["buy-now"]} onClick="">
                Buy now
              </button>
            </div>
          </div>
        </div>
      )} */}
      {/*  */}
      <div className={styles["maylike-products-wrapper"]}>
        <h2>You may also like</h2>
        <div className={styles.marquee}>
          <div
            className={`${styles["maylike-products-container"]} ${styles.track}`}
          >
            {products.map((item) => (
              <CardPlantList
                key={item._id}
                product={item}
                className={styles["media-element"]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type=="product1"]{
    slug{
      current
    }
  }`;

  const products1 = await client.fetch(query);

  const paths = products1.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const products1Query = '*[_type == "product1"]';
  const products = await client.fetch(products1Query);
  //

  const query1 = `*[_type == "product1" && slug.current == '${slug}'][0]`;
  const product1 = await client.fetch(query1);

  const query2 = `*[_type == "product2" && slug.current == '${slug}'][0]`;
  const product2 = await client.fetch(query2);

  return {
    props: { products, product1, product2 },
  };
};

export default ProductDetails;
