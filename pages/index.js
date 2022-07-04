import React from "react";

import { client } from "../lib/client";
import { Hero, FeaturedBrands } from "../components";
import Plants from "../components/Plants";
const Home = ({ products, bestsellers }) => {
  return (
    <>
      <Hero />
      <Plants products={products} bestsellers={bestsellers} />
      <FeaturedBrands />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "bestseller"]';
  const bestsellers = await client.fetch(query);
  const productQuery = '*[_type == "product3"]';
  const products = await client.fetch(productQuery);

  return {
    props: { products, bestsellers },
  };
};

export default Home;
