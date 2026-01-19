// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Book from "./ui/Book";
import { books } from "../data";

const Featured = () => {
  console.log(books);
    // console.log(books.filter((books) => books.rating === 5).slice(0, 4));
  function getFiveStarBooks() {}
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="Blue">Books</span>
          </h2>
          <div className="books">
            {books
            .filter((book) => book.rating === 5)
            .sliced(0,4)
            .map(book => <div>Eric</div>)
            }
            <Book />
            <Book />
            <Book />
            <Book />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
