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
