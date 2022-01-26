import React from "react";
import "./checkout-page.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../component/checkout-item/checkout-item";
const Checkout = ({ cartItems }) => {
  const tot = cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-bloack">
          <span>Product</span>
        </div>
        <div className="header-bloack">
          <span>Name</span>
        </div>
        <div className="header-bloack">
          <span>Quantity</span>
        </div>
        <div className="header-bloack">
          <span>Price</span>
        </div>
        <div className="header-bloack">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map((cartItem) =>
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
      }
      <div className='total'>
        <span>Total:${tot}</span>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: state?.cart?.cartItems
})


export default connect(mapStateToProps)(Checkout);
