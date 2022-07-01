import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import { client } from "../lib/client";
// import { BestSellerCard, CardPlantList } from "../components";
import CardPlantList from "../components/card/CardPlantList";
import BestSellerCard from "../components/card/BestSellerCard";
import { Hero, FeaturedBrands } from "../components";

const Home = ({ products, bestsellers }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);
  useEffect(() => {
    setFilterWork(products);
  }, []);
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(products);
      } else {
        setFilterWork(
          products.filter((product) => product.tags.includes(item))
        );
      }
    }, 500);
  };

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
        <div className={`container margin-top`}>
          <h3 className="margin-bottom">Available Plants</h3>
          <div className={styles["app__work-filter"]}>
            {["All", "Indoor", "Outdoor", "Indoor/Outdoor"].map(
              (item, index) => (
                <div
                  key={index}
                  onClick={() => handleWorkFilter(item)}
                  className={
                    activeFilter === item
                      ? `${styles["app__work-filter-item"]} ${styles["item-active"]}`
                      : `${styles["app__work-filter-item"]}`
                  }
                >
                  {item}
                </div>
              )
            )}
          </div>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.4, delayChildren: 0.4 }}
            className={`${styles["card__container"]}`}
          >
            {filterWork?.map((product) => (
              <CardPlantList product={product} key={product._id} />
            ))}
          </motion.div>
        </div>
      </section>
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
