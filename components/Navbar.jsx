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
  const [active, setActive] = useState(false);

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
  const handleClick = () => {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  console.log(active);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div
        className={`${styles["navbar-container"]} ${
          showHeader ? styles.visible : styles.hidden
        }`}
      >
        {/* className={
                0 === indexColor
                  ? ` ${styles["small-image"]} ${styles["selected-image"]}
          `
                  : `${styles["small-image"]}`
              }
              onClick={() => handleVariant()}
            /> */}

        <div className={styles.burger}>
          <div
            className={
              active === false
                ? `${styles.strip} ${styles["burger-strip-2"]}`
                : `${styles.strip} ${styles["burger-strip-2"]} ${styles.active}`
            }
            onClick={() => handleClick()}
          >
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
        </div>

        <nav className={styles["nav-links"]}>
          <ul>
            <li>
              <Link href="/#Plants">Plants</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>

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
      </div>
    </motion.div>
  );
};

export default Navbar;
