import React, { useState } from "react";
import './collection.scss'
import { connect } from "react-redux";
import CollectionItem from "../../component/collectionItem/collectionItem";
import Select from "react-select";
import { filterVeg,filterFruit,filterALL } from "../../redux/shop/shop-action";
const Collection=({collection,filterVeg,filterFruit,filterALL})=>{
    console.log(collection)
    const opt=[{value:0,label:'All'},{value:1,label:'Vegetables'},{value:2,label:'Fruits'}]
    const [filterValue,setFilterValue]=useState();
    const handleFilter=(opt)=>{
       
        if(opt.label==='Vegetables'){
            console.log('khaleel')
            filterVeg()
        }else if(opt.label==='Fruits'){
            filterFruit()
        }else{
            filterALL()
        }
        setFilterValue(opt.label)
    }
    console.log(filterValue)
    
    return(
        <div className="collection-page">
           <div className='heading'>
                <h2 className='title'>E-Market</h2>
               <div className="filter">Filter</div> 
                <Select
                className="select"
                classNamePrefix='select-box-inner'
                options={opt}
                onChange={(option)=>{
                    handleFilter(option)
                }}
                value={opt.filter((i)=>i.label===filterValue)}
                />
            </div>
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
const mapDispatchToProps=dispatch=>({
    filterVeg:()=>dispatch(filterVeg()),
    filterFruit:()=>dispatch(filterFruit()),
    filterALL:()=>dispatch(filterALL())
})

export default connect(mapStateToProps,mapDispatchToProps)(Collection)