import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AddToCart } from "../actions";

const Products = props => {
    console.log("Products props: ", props);

    return (
        <div>
            <h2>
                <span>Kitap Listesi</span>
                <Link to="/cart">Sepetim</Link>
            </h2>
            {props.bookList.map(book => (
                <div className="book" key={book.id}>
                    <img
                        src={book.image}
                        alt={book.name}
                    />
                    <div>
                        <h4>{book.name}</h4>
                        <p>Yazar: {book.price}</p>
                        <p>Fiyat: &#8378; {book.price}</p>
                        <button onClick={() => props.AddToCart(book)}>Sepete Ekle</button>
                    </div>
                </div>)
            )}

        </div>
    );
};

const mapStateToProps = state => {
    return {
        bookList: state.bookList,
        cart: state.cart
    }
}

const mapActionsToProps = { AddToCart };

export default connect(mapStateToProps, mapActionsToProps)(Products);
