import { combineReducers } from "redux";
import { CartReducer } from './CartReducer';
import { CartSelected } from './CartSelected';

//store 
export const rootReducer = combineReducers ({
    CartReducer : CartReducer,
    CartSelected: CartSelected,
})