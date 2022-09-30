import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import { Cart } from "./";
import { motion } from "framer-motion";
import { useStateContext } from "../context/StateContext";
import Logo from "../images/plantito-logo.svg";
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, active, setActive } =
    useStateContext();

  const handleClick = () => {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className={styles["navbar-container"]}>
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
        <nav
          className={
            active === true
              ? `${styles["nav-links"]} ${styles["nav-links-active"]}`
              : `${styles["nav-links"]}`
          }
        >
          <ul>
            {active && (
              <Link href="/">
                <div onClick={() => setActive(false)} className={styles.logo2}>
                  <Logo />
                  <span> Plantito</span>
                </div>
              </Link>
            )}
            <li onClick={() => setActive(false)}>
              <Link href="/#plants">Plants</Link>
            </li>
            <li onClick={() => setActive(false)}>
              <Link href="/about">About</Link>
            </li>
            <li onClick={() => setActive(false)}>
              <Link href="/#contact">Contact us</Link>
            </li>
          </ul>
        </nav>
        <div
          className={active ? `${styles.overlay}` : ""}
          onClick={() => setActive(false)}
        ></div>
        <Link href="/">
          <div className={styles.logo}>
            <Logo />
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
