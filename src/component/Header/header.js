import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from '../cart-icon/cart.icon'
import './header.scss'


const Header=()=>{
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
            </div>
        </div>
    )
}



export default Header;