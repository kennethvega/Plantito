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
const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, tags } = product;

  return (
    <div className="container">
      <div className={styles["product-detail-container"]}>
        <div className={styles["image-container"]}>
          <img src={urlFor(image && image[0])} />
        </div>
        {/* small images here */}
        <div className={styles["product-detail-desc"]}>
          <h4>{name}</h4>
          <div className={styles.reviews}>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <p>Good for {tags[0]}</p>
          <span>Details:</span>
          <p>{details}</p>
          <p>$ {price}</p>
          <div className={styles.quantity}>
            <p>Quantity</p>
            <p className={styles["quantity-desc"]}>
              <span className={styles.minus} onClick="">
                <AiOutlineMinus />
              </span>
              <span className={styles.num}>0</span>
              <span className={styles.plus} onClick="">
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles["add-to-cart"]} onClick="">
              Add to Cart
            </button>
            <button type="button" className={styles["buy-now"]} onClick="">
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

{
  /* <div className="maylike-products-wrapper">
<h2>You may also like</h2>
<div className="marquee">
  <div className="maylike-products-container track">
    {products.map((item) => (
      <Product key={item._id} product={item} />
    ))}
  </div>
</div>
</div> */
}
{
  /* <div className="maylike-products-wrapper">
<h2>You may also like</h2>
<div className="marquee">
  <div className="maylike-products-container track">
    {products.map((item) => (
      <Product key={item._id} product={item} />
    ))}
  </div>
</div>
</div> */
}

export const getStaticPaths = async () => {
  const query = `*[_type=="product"]{
    slug{
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
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
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  console.log(product);
  return {
    props: { products, product },
  };
};

export default ProductDetails;
