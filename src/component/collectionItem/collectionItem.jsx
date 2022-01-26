import React from 'react';
import './collectionItem.scss'
import CustomButton from '../custombutton/custombutton';
import { connect } from 'react-redux';
import Outof  from "../../assets/outof.jpg";

const CollectionItem=({item,AddItem})=>{
    const {id,name,price,imageUrl,vendor,available}=item
    return(
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    backgroundImage:`url(${imageUrl})`
                }}
            
            />
            {!available&&<img className='stock-out' src={Outof}/>}
        <div className='collection-footer'>
            <span className='name'>{name}({vendor})</span>
            <span className='price'>₹{price}</span>
        </div>
        <CustomButton  inverted>Add To Cart</CustomButton>
        </div>
    )
}

export default CollectionItem;