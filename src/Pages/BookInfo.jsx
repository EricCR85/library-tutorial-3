import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Book from "../components/ui/Book";

const BookInfo = ({ books, addToCart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);
  const [added, setAdded] = useState(false);

function addBookToCart(book) {
  setAdded(true)
  addToCart(book)
}

  
  // console.log(book);
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow_left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor voluptate recusandae nam. Nihil voluptatibus dolore
                    alias? Rem harum ut dolorum.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolor voluptate recusandae nam. Nihil voluptatibus dolore
                    alias? Rem harum ut dolorum.
                  </p>
                </div>
                {
                  added ? <button className="btn">Checkout</button> :
                }
                import React from "react";

const Cart = ({ cart = [], changeQuantity, removeItem }) => {
  function getItemPrice(item) {
    return item.salePrice ? item.salePrice : item.originalPrice;
  }
  function getTotal(item) {
    return (getItemPrice(item) * item.quantity).toFixed(2);
  }
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.length === 0 ? (
                  <div className="cart__empty">
                    <span className="cart__title">Your cart is empty</span>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div className="cart__item" key={item.id}>
                      <div className="cart__book">
                        <img src={item.url} className="cart__book--img" alt="" />
                        <div className="cart__book--info">
                          <span className="cart__book--title">{item.title}</span>
                          <span className="cart__book--price">${getItemPrice(item).toFixed(2)}</span>
                          <button className="cart__book--remove" onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={1}
                          max={99}
                          className="cart__input"
                          value={item.quantity}
                          onChange={(e) => changeQuantity(item.id, e.target.value)}
                        />
                      </div>
                      <div className="cart__total">${getTotal(item)}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="total">
               <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>${cart.reduce((sum, item) => sum + getItemPrice(item) * item.quantity, 0).toFixed(2)}</span>
               </div>
               <div className="total__item total__tax">
                <span>Tax</span>
                <span>${(cart.reduce((sum, item) => sum + getItemPrice(item) * item.quantity, 0) * 0.1).toFixed(2)}</span>
               </div>
               <div className="total__item total__price">
                <span>Total</span>
                <span>${(cart.reduce((sum, item) => sum + getItemPrice(item) * item.quantity, 0) * 1.1).toFixed(2)}</span>
               </div>
               <button className="btn btn__checkout no-cursor"
               onClick={() => alert(`Havent got around to doing this :(`)}>
                Proceed to checkout
               </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
