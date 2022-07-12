import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import Image from "next/image";
import plantImage from "../images/hero-image.png";
import { runFireWorks } from "../lib/utility";
const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireWorks();
  }, []);
  return (
    <div className="success-container">
      <div className="text-box">
        <h3>Thank you for purchasing</h3>
        <p className="sub-heading">Check your email inbox for the receipt</p>
        <p className="sub-heading">
          If you have questions please email us at plantito@gmail.com
        </p>
        <p className="icon">
          <BsBagCheckFill />
        </p>

        <Link href="/">
          <button type="button" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
      <div className="image-box">
        <Image src={plantImage} height={200} width={215} />
      </div>
    </div>
  );
};

export default Success;
