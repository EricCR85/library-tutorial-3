// import logo from './logo.svg';
import "./App.css";
import Footer from "./components/Footer";
import Discounted from "./components/Discounted";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
import Explore from "./components/Explore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from "./data";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";
import { useEffect, useState } from "react";
// import Highlight from './components/ui/Highligh';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    const dupeItem = cart.find((item) => +item.id === +book.id);
    if (dupeItem) {
      setCart(
        cart.map((item) => {
          if (item.id === dupeItem.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        }),
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  }

  function changeQuantity(id, quantity) {
    setCart(
      cart.map((item) =>
        +item.id === +id ? { ...item, quantity: Number(quantity) } : item,
      ),
    );
  }

  function removeItem(id) {
    setCart(cart.filter((item) => +item.id !== +id));
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <Nav cart={cart} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => <BookInfo books={books} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />
          )}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;