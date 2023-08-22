import React, { useContext } from "react";
import { Context } from "../context/Context";
import BookCartItem from "./BookCartItem";
import BookCartCheckOut from "./BookCartCheckOut";
import "./App.css";

const BookCart = () => {
  const { carts } = useContext(Context);

  if (carts.length === 0) {
    return (
      <h1 className="cardempty">
        Your cart is Empty. shop more!!! :(
      </h1>
    );
  } else {
    return (
      <div className="text-center">
        <h1 className="display-4">Book Cart</h1>
        <div className="container d-flex flex-column">
          {carts.map(cart => (
            <BookCartItem key={cart.id} cart={cart} />
          ))}
        </div>
        <BookCartCheckOut />
      </div>
    );
  }
};

export default BookCart;
