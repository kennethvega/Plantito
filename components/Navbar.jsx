import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Logo from "../images/plantito-logo.svg";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    console.log("top", document.body.getBoundingClientRect().top);
    console.log();
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
    <div
      className={`${styles["navbar-container"]} ${
        showHeader ? styles.visible : styles.hidden
      }`}
    >
      <ul>
        {["Plants", "About", "Contact"].map((item) => (
          <li key={`link=${item}`}>
            <Link href={`${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.logo}>
        <Link href="/">
          <>
            <Logo /> <span>Plantito</span>
          </>
        </Link>
      </div>
      <button type="button" className={styles["cart-icon"]} onClick="">
        <AiOutlineShopping />
        <span className={styles["cart-item-qty"]}>1</span>
      </button>
    </div>
  );
};

export default Navbar;
