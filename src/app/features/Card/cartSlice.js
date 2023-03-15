import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    card: []
}

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addToCard: (state, action) => {
            const selectedProduct = state.card.find(product => product._id === action.payload._id)
            if (!selectedProduct) {
                const product = { ...action.payload, quantity: 1, }
                state.card.push(product)
            } else {
                selectedProduct.quantity += 1;
                state.card.filter(product => product._id !== selectedProduct._id).push(selectedProduct)
            }
        },
        removeFromCard: (state, action) => {
            const selectedProduct = state.card.find(product => product._id === action.payload._id)
            if (action.payload.quantity > 1) {
                const product = {
                    ...action.payload,
                    quantity: action.payload.quantity - 1,
                }
                state.card = state.card.filter(product => product._id !== action.payload._id)
                state.card.push(product)
            } else {
                state.card = state.card.filter(product => product._id !== action.payload._id)
            }
        }
    }
})

export const { addToCard, removeFromCard } = cardSlice.actions;

export default cardSlice.reducer;