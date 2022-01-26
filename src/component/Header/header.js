import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from '../cart-icon/cart.icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import './header.scss'


const Header=({hidden})=>{
    console.log('khaleel',hidden)
    return(
        <div className='header'>
            <div className='logo-container'>
                <Logo className='logo'/> 
            </div>
            <div className='options'>
                <div className='option'>
                   Shop
                </div>
                <div className='option'>
                   Contact
                </div>
                    <div className='option'>
                        Sign Out
                    </div>
                
                <CartIcon/>
                { hidden?null:
            <CartDropdown/>}
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>({
    hidden:state?.cart?.hidden
})


export default connect(mapStateToProps)(Header);