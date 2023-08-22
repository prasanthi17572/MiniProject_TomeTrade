import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import "./App.css";

const Navbar = () => {
  const { carts } = useContext(Context);
  return (
    <div className="navbar">
      <div className="cartname">
        <Link
          className="link1" to="/">
          HOME
        </Link>

        <Link className="link1" to="/">
        Read Books</Link>



        <Link className="link1" to="/">
            About
          </Link>

        {/* <nav className="my-2 my-md-0 mr-md-3">
          // <Link className="p-2 text-dark" to="/about">
          //   About
          // </Link>
        </nav> */}

       




        <Link className="link1" to="/book-cart" >
          BookCart (
          <span >
            {carts.length !== 0 ? carts.length : 0}
          </span>
          )
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
