import React from 'react';
import './collectionItem.scss'
import CustomButton from '../custombutton/custombutton';
import Outof from "../../assets/outof.jpg";
import { connect } from 'react-redux';
import { AddItem } from '../../redux/Cart/cart-action';

const CollectionItem = ({ item, AddItem }) => {
    const { id, name, price, imageUrl, vendor, available } = item
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}

            />
            {!available && <img className='stock-out' src={Outof} />}
            <div className='collection-footer'>
                <span className='name'>{name}({vendor})</span>
                <span className='price'>₹{price}</span>
            </div>
            <CustomButton onClick={() => { available && AddItem(item) }} inverted>Add To Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    AddItem: item => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);