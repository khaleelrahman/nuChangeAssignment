import React from "react";
import "./cart.icon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/Cart/cart-action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden, length }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden} >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{length}</span>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = (state) => ({
  length: state?.cart?.cartItems?.length
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
