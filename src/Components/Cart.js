import React from 'react'
import { Link } from 'react-router-dom';
import "../Styles/Cart.css"
function Cart({ c }) {

    const SubTotal = () => {
        return c * 3;
    }

    const gst = () => {
        return (c * 3) * 0.1;
    }
    const total = () => {
        return SubTotal() + gst();
    }

    return (
        <div className="cart-main">
            <div className='cart-cart'>
                <div><h1>My Cart</h1></div>
                <div>
                    <Link className="back" to="/menu">Back to Menu</Link>
                    <h3 style={{ "marginTop": "1vw" }}>{c} Items </h3>
                    <div className='bill'><p>SubTotal:</p><p className="s">${SubTotal()}</p></div>
                    <div className='bill'><p>GST:</p><p>${gst()}</p></div>
                    <hr></hr>
                    <div className='bill'><p className="check">CheckOut:</p><p className="s">${total()}</p></div>
                </div>

            </div>
        </div>

    )
}

export default Cart;
