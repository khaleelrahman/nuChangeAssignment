import ShopActionTypes from "./shop-action-types";

export const filterVeg=()=>({
    type:ShopActionTypes.FILTER_VEG
})
export const filterFruit=()=>({
    type:ShopActionTypes.FILTER_FRUIT
})
export const filterALL=()=>({
    type:ShopActionTypes.FILTER_ALL
})