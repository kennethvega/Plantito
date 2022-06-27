import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  AiOutline,
  AiOutlinePluse,
  AiOutlineLeft,
  AiOutlineShopping,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import styles from "./Cart.module.scss";
import Image from "next/image";
import emptyCart from "../images/Cart-Transparent-PNG.jpg";

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();

  return (
    <div className={styles["cart-wrapper"]} ref={cartRef}>
      <div className={styles["cart-container"]}>
        <button
          type="button"
          className={styles["cart-heading"]}
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className={styles.heading}>Your Cart</span>
          <span className={styles["cart-num-items"]}>
            ({totalQuantities} items)
          </span>
        </button>

        {cartItems.length < 1 && (
          <div className={styles["empty-cart"]}>
            <Image
              src={emptyCart}
              alt="Empty cart image"
              height={300}
              width={340}
            />
            <h3>Your Cart Is Empty</h3>
            <p>
              Looks like you have not added anything to your cart. Go ahead &
              explore top categories
            </p>

            <button
              type="button"
              onClick={() => setShowCart(false)}
              className="btn-small"
            >
              Continue Shopping
            </button>
          </div>
        )}
        <div className={styles["product-container"]}>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className={styles.product} key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className={styles["cart-product-image"]}
                />
                <div className={styles["item-desc"]}>
                  <div className={`${styles.flex} ${styles.top}`}>
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className={`${styles.flex} ${styles.bottom}`}>
                    <div>
                      <div className={styles["quantity-desc"]}>
                        <span className={styles.minus} onClick="">
                          <AiOutlineMinus />
                        </span>
                        <span className={styles.num}>0</span>
                        <span className={styles.plus} onClick="">
                          <AiOutlinePlus />
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className={styles["remove-item"]}
                      onClick=""
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className={styles["cart-bottom"]}>
            <div className={styles.total}>
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
