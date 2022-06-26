import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutline,
  AiOutlinePluse,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import styles from "./Cart.module.scss";

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();
  return (
    <div className={styles["cart-wrapper"]} ref={cartRef}>
      <div className={styles["cart-container"]}>
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className={styles.heading}>Your Cart</span>
          <span>({totalQuantities} items)</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
