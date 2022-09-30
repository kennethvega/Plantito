import React from "react";
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
import { motion } from "framer-motion";
const ProductDetails = ({ products, product }) => {
  const {
    decQty,
    incQty,
    qty,
    indexColor,
    setIndexColor,
    onAdd,
    setShowCart,
    setQty,
  } = useStateContext();

  const handleVariant1 = () => {
    setIndexColor(1);
    setQty(1);
  };
  const handleVariant2 = () => {
    setIndexColor(0);
    setQty(1);
  };
  const handleClick = () => {
    if (indexColor === 0) {
      return onAdd(product, qty);
    } else {
      return onAdd(product.variety, qty);
    }
  };
  const handleBuy = () => {
    if (indexColor === 0) {
      onAdd(product, qty);
      setShowCart(true);
    } else if (indexColor === 1) {
      onAdd(product.variety, qty);
      setShowCart(true);
    }
  };
  console.log(indexColor);
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className={styles["product-detail-container"]}>
        <div>
          <div className={styles["image-container"]}>
            {indexColor === 0 && <img src={urlFor(product.image)} />}
            {indexColor === 1 && <img src={urlFor(product.variety.image)} />}
          </div>
          <div className={styles["small-images-container"]}>
            <img
              src={urlFor(product.variety.image)}
              className={
                1 === indexColor
                  ? ` ${styles["small-image"]} ${styles["selected-image"]}
          `
                  : `${styles["small-image"]}`
              }
              onClick={() => handleVariant1()}
            />
            <img
              src={urlFor(product.image)}
              className={
                0 === indexColor
                  ? ` ${styles["small-image"]} ${styles["selected-image"]}
          `
                  : `${styles["small-image"]}`
              }
              onClick={() => handleVariant2()}
            />
          </div>
        </div>

        <div className={styles["product-detail-desc"]}>
          <h4>{product.name}</h4>
          <p>
            {indexColor === 0 && product.potColor + " " + "ceramic pot"}
            {indexColor === 1 && product.variety.potColor + " " + "ceramic pot"}
          </p>
          <div className={styles.reviews}>
            <p>Good for {product.tags[0]}</p>
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
          <p className={styles.details}>{product.details}</p>
          <p className={styles.price}>$ {product.price}</p>
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
            <button
              type="button"
              className={styles["buy-now"]}
              onClick={() => handleBuy()}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      <div className={styles["maylike-products-wrapper"]}>
        <h2>You may also like</h2>
        <div className={styles.marquee}>
          <div
            className={`${styles["maylike-products-container"]} ${styles.track}`}
          >
            {products.map((item) => (
              <CardPlantList
                key={item._id}
                product={item.variety}
                className={styles["media-element"]}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
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
  const products1Query = '*[_type == "product3"]';
  const products = await client.fetch(products1Query);
  //

  // const query1 = `*[_type == "product1" && slug.current == '${slug}'][0]`;
  // const product1 = await client.fetch(query1);

  // const query2 = `*[_type == "product2" && slug.current == '${slug}'][0]`;
  // const product2 = await client.fetch(query2);
  const query = `*[_type == "product3" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
