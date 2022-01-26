import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/eshop.jpg";
import CartIcon from '../cart-icon/cart.icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import './header.scss'


const Header = ({ hidden }) => {
    console.log('khaleel', hidden)
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <img src={Logo} className='logo' style={{ width: '50px', height: '50px' }} />
                <div className="e-shop">EShoping</div>
            </Link>
            <div className='options'>
                <Link to='/' className='option'>
                    Shop
                </Link>
                <div className='option'>
                    Sign Out
                </div>

                <CartIcon />
                {hidden ? null :
                    <CartDropdown />}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    hidden: state?.cart?.hidden
})


export default connect(mapStateToProps)(Header);