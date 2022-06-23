import React from "react";
import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero.jsx";
import { client } from "../lib/client";
// import { BestSellerCard, CardPlantList } from "../components";
import CardPlantList from "../components/card/CardPlantList";
import BestSellerCard from "../components/card/BestSellerCard";

const Home = ({ products, bestsellers }) => {
  return (
    <>
      <Hero />
      <section
        className={`${styles["section-plants"]}container padding-top margin-top`}
      >
        <h3 className="margin-bottom">Best Seller Plants</h3>
        <div className={`${styles["card__container"]} container`}>
          {bestsellers?.map((bestseller) => (
            <BestSellerCard bestseller={bestseller} key={bestseller._id} />
          ))}
        </div>
      </section>
      <div className={` container  `}>
        <h3 className="margin-bottom">Available Plants</h3>
        <div className={`${styles["card__container"]}`}>
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
