import React from "react";

import { client } from "../lib/client";
import { Hero, FeaturedBrands } from "../components";
import Plants from "../components/Plants";
import { motion } from "framer-motion";

const Home = ({ products, bestsellers }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <FeaturedBrands />
      <Plants products={products} bestsellers={bestsellers} />
    </motion.div>
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
