import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import styles from "./Navbar.module.scss";
import { Cart } from "./";
import { motion } from "framer-motion";
import { useStateContext } from "../context/StateContext";
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [showHeader, setShowHeader] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShowHeader(document.body.getBoundingClientRect().top > scrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <nav
        className={`${styles["navbar-container"]} ${
          showHeader ? styles.visible : styles.hidden
        }`}
      >
        {/* menu */}

        <ul>
          <li>
            <Link href="/#Plants">Plants</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        <Link href="/">
          <div className={styles.logo}>
            <img src="./plantito-logo.svg" alt="plantito-logo image" />
            <span> Plantito</span>
          </div>
        </Link>
        <button
          type="button"
          className={styles["cart-icon"]}
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className={styles["cart-item-qty"]}>{totalQuantities}</span>
        </button>
        {showCart && <Cart />}
      </nav>
    </motion.div>
  );
};

export default Navbar;
