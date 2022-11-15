import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [indexColor, setIndexColor] = useState(1);
  const [active, setActive] = useState(false);
  let foundProduct;
  let index;

  useEffect(() => {
    const bodyStyle = document.body.style;
    if (showCart || active) {
      bodyStyle.overflowY = "hidden";
    } else {
      bodyStyle.overflowY = "auto";
    }
  }, [showCart, active]);

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item.id === product.id);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (product.id === cartProduct.id) {
          const newQty = cartProduct.quantity + quantity;
          return {
            ...cartProduct,
            quantity: newQty,
          };
        } else {
          return {
            ...cartProduct,
          };
        }
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(
      `${qty} ${product.name} + ${product.potColor} pot added to the cart.`
    );
  };


  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.id === product.id);
    const newCartItems = cartItems.filter((item) => item.id !== product.id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item.id === id);
    index = cartItems.findIndex((product) => product.id === id);
    const newCartItems = cartItems.filter((item) => item.id !== id);

    if (value === "inc") {
      newCartItems.splice(index, 0, {
        ...foundProduct,
        quantity: foundProduct.quantity + 1,
      });
      setCartItems(newCartItems);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        newCartItems.splice(index, 0, {
          ...foundProduct,
          quantity: foundProduct.quantity - 1,
        });
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };



  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        active,
        setActive,
        setQty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        indexColor,
        setIndexColor,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
