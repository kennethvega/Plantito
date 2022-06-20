import React from "react";
import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero.jsx";
import { client } from "../lib/client";
import { BestSellerCard } from "../components";
import CardPlantList from "../components/CardPlantList";
const Home = ({ products, bestsellers }) => {
  return (
    <>
      {console.log(bestsellers)}
      navbar
      <Hero />
      <div className={`${styles["best-seller-section"]} section`}>
        <h3>Best Seller Plants</h3>
        <div className={`${styles["best-seller-card__container"]} margin-top`}>
          {bestsellers?.map((bestseller) => (
            <BestSellerCard bestseller={bestseller} key={bestseller._id} />
          ))}
        </div>
      </div>
      <div className={`${styles["best-seller-section"]} section`}>
        <h3>Available Plants</h3>
        <div className={`${styles["products-container"]}`}>
          {products?.map((product) => (
            <CardPlantList product={product} key={product._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "bestseller"]';
  const bestsellers = await client.fetch(query);
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  return {
    props: { products, bestsellers },
  };
};

export default Home;
