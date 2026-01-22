// import logo from './logo.svg';
import "./App.css";
import Footer from "./components/Footer";
import Discounted from "./components/Discounted";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
import Explore from "./components/Explore";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Books  from "./Pages/Books";
import { books } from "./data"
import BookInfo from "./Pages/BookInfo";
// import Highlight from './components/ui/Highligh';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" render={() => <Books books={books} /> } />
        <Route path="/books/1" render={() => <BookInfo books={books} />} />
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
