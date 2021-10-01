import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveFromCart, IncreaseBookCounter, DecreaseBookCounter } from "../actions";

const Cart = (props) => {
    console.log("Cart props: ", props);

    const totalPrice = props.cart.reduce((total, item) => (total += (item.price * item.count)), 0);

    return (
        <div>
            <h2>
                <Link to="/">Book List</Link> <span>My Cart</span>
            </h2>

            <h3>Subtotal: &#8378;{totalPrice.toFixed(2)}</h3>
            {
                props.cart.map(book => (
                    <div className="book" key={book.id}>
                        <img
                            src={book.image}
                            alt={book.name}
                        />
                        <div>
                            <h4>{book.name}</h4>
                            <p>Author: {book.author}</p>
                            <p>Price: &#8378;{(book.price * book.count).toFixed(2)}</p>
                            <p>
                                You have a total of {book.count} of this book in your cart.
                            </p>
                            {
                                book.count <= 1
                                    ? <></>
                                    :
                                    <button
                                        onClick={() => props.DecreaseBookCounter(book.id)}>
                                        -
                                    </button>
                            }
                            <button
                                onClick={() => props.RemoveFromCart(book.id)} >
                                Sepetten Çıkar
                            </button>
                            <button
                                onClick={() => props.IncreaseBookCounter(book.id)} >
                                +
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapActionsToProps = { RemoveFromCart, IncreaseBookCounter, DecreaseBookCounter }

export default connect(mapStateToProps, mapActionsToProps)(Cart);
