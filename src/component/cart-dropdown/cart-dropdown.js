import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import CustomButton from "../custombutton/custombutton";
import './cart-dropdown.scss'
import CartItem from "../cart-item/cart-item";
import { toggleCartHidden } from "../../redux/Cart/cart-action";
const CartDropdown = ({cartItems,history,dispatch}) => {
    console.log('fazal',cartItems)
    return (
        <div className="cart-dropdown">
            <div className='cart-items'>
            {
                cartItems?.length?
                cartItems.map((cartItem=><CartItem key={cartItem.id} item={cartItem}/>))
                :(
                    <span className="empty-messege">Your Cart is Empty</span>
                )
            }
            </div>
                <CustomButton onClick={()=>{
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }}>
                Go To Checkout
                </CustomButton>
        </div>
    )
}

const mapStateToProps=(state)=>({
    cartItems:state?.cart?.cartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));