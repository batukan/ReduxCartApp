import './App.css';
import { Route } from "react-router-dom";
import Products from "./components /Products";
import Cart from "./components /Cart";
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div className="App">
      <h1>
        Shopping Cart App
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />{" "}
        with Redux
      </h1>
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    bookList: state.bookList
  }
}

export default connect(mapStateToProps)(App);
