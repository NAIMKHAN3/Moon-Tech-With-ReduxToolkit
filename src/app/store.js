import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { productApi } from "./features/api/productApi";
import cardSlice from './features/Card/cartSlice'
import filterSlice from "./features/Filter/filterSlice";

const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        card: cardSlice,
        filter: filterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
})

export default store;
