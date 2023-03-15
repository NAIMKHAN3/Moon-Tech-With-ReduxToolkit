import { configureStore } from "@reduxjs/toolkit";
import cardSlice from './features/Card/cartSlice'

const store = configureStore({
    reducer: {
        card: cardSlice,
    }
})

export default store;
