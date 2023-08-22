import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const Book = ({ bookDetails }) => {
  const { addCart } = useContext(Context);
  const {
    id,
    title,
    coverImageSrc,
    rating,
    price,
    authorName,
    authorId
  } = bookDetails;

  const handleAddCart = () => {
    addCart(id);
    
  };

  return (
    <div className="book">
      <div className="cover-img">
        <img src={coverImageSrc} alt="" />
        <div className="details">
          <div className="content">
            <h5>
              <Link style={{ color: "#fff" }} to={"/book/details/" + id}>
                {title}
              </Link>
            </h5>
            <h6>
              By{" "}
              <Link style={{ color: "#fff" }} to={"/author/" + authorId}>
                {authorName}
              </Link>
            </h6>
            <p>
              <i className="fa fa-star"></i> {rating}
            </p>
            <h4>Price: ${price}</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <Link className="btn btn-outline-primary" to={"/book/details/" + id}>
          Details
        </Link>
        <button onClick={handleAddCart} className="btn btn-outline-primary">
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default Book;
