import React from "react";
import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero.jsx";
import { client } from "../lib/client";
const Home = () => {
  return (
    <>
      navbar
      <Hero />
    </>
  );
};

// export const getServerSideProps = async ()=>{
//   const query='*[_type == '']'
// }

export default Home;
