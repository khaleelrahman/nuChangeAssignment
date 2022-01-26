import React from "react";
import './collection.scss'
import { connect } from "react-redux";
import CollectionItem from "../../component/collectionItem/collectionItem";

const Collection=({collection})=>{
    console.log(collection)

    return(
        <div className="collection-page">
            <h2 className='title'>E-Market</h2>
            <div className='items'>
               {
                  collection?.shop?.collections?.map(item=><CollectionItem key={item.id} item={item}/>) 
               }
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>({
    collection:state
})

export default connect(mapStateToProps)(Collection)