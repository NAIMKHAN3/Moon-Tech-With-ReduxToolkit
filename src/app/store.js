import { configureStore } from "@reduxjs/toolkit";
import cardSlice from './features/Card/cartSlice'
import filterSlice from "./features/Filter/filterSlice";

const store = configureStore({
    reducer: {
        card: cardSlice,
        filter: filterSlice,
    }
})

export default store;
