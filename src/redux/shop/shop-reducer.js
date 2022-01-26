import SHOP_DATA from "./shop"
import ShopActionTypes from "./shop-action-types"
const INITIAL_STATE={
    collections:SHOP_DATA
}

const shopReducer=(state=INITIAL_STATE,action)=>{
    console.log('khaleel',state)
    switch(action.type){
        case ShopActionTypes.FILTER_VEG:
            return { collections:INITIAL_STATE.collections?.filter((item)=>item?.category==='Vegetables')}
        case ShopActionTypes.FILTER_FRUIT:
             return { collections:INITIAL_STATE.collections?.filter((item)=>item?.category==='Fruits')}
        case ShopActionTypes.FILTER_ALL:
            return INITIAL_STATE
        default:
            return state
    }
}

export default shopReducer