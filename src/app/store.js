import { configureStore } from "@reduxjs/toolkit";
import cardSlice from './features/Card/cartSlice'
import filterSlice from "./features/Filter/filterSlice";
import productSlice from "./features/Products/productSlice";

const store = configureStore({
    reducer: {
        card: cardSlice,
        filter: filterSlice,
        products: productSlice,
    }
})

export default store;
