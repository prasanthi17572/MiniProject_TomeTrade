import React, { useContext } from "react";
import { Context } from "../context/Context";
import { useParams, Link } from "react-router-dom";
import "./BookDetails.css";
const BookDetails = () => {
  const { id } = useParams();
  const { addCart, books } = useContext(Context);

  const book = books.filter(book => book.id === id);
  const {
    title,
    coverImageSrc,
    rating,
    genre,
    price,
    description,
    authorName,
    authorId
  } = book[0];

  const handleAddCart = () => {
    addCart(id);
    
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center">Book Details</h1>
      <div className="book-details w-75 my-4 mx-auto">
        <div className="rows">
          <div className="img">
            <img className="w-100 h-60" src={coverImageSrc} alt="" />
          </div>
          <div className="contents col-lg-7 col-12">
            <h3>
              By <Link to={"/author/" + authorId}>{authorName}</Link>
            </h3>

            <h1 className="text-muted ml-0">{title}</h1>
            <p className="text-capitalize">Genre: {genre.join(", ")}</p>
            <h3>
              Goodreads Rating: <i className="fa fa-star"></i>
              {rating}
            </h3>

            <h4>{description}</h4>

            <h3>Price: ${price}</h3>

            <button
              style={{ fontSize: "1.3rem"}}
              className="btn btn-outline-primary px-5 py-3 m-auto"
              onClick={handleAddCart}
            >
              <h3>Add Cart</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
