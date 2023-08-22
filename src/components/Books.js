import React, { useContext, Fragment } from "react";
import { Context } from "../context/Context";
import Book from "./Book";
import './App.css';
const Books = () => {
  const { books, clearSearch, searchedBooks, searchString } = useContext(
    Context
  );

  return (
    <div className="container">
      <h1
        style={{ marginLeft: "10px", color: "hotpink" }}
        className="display-4 text-center mb-3"
      >
        {searchString === null ? (
          <h3 style={{marginLeft:100}}>ALL BOOKS</h3>
        ) : (
          <Fragment>
            {" "}
            Searching for '{searchString}'
            <span onClick={() => clearSearch()} class="btn btn-danger ml-2">
              X
            </span>
          </Fragment>
        )}
      </h1>

      <div className="books">
        {searchedBooks.length === 0
          ? books.map(book => {
              const { id } = book;
              return <Book key={id} bookDetails={book} />;
            })
          : searchedBooks.map(book => {
              const { id } = book;
              return <Book key={id} bookDetails={book} />;
            })}
      </div>
    </div>
  );
};

export default Books;
