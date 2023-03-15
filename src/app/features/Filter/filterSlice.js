import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    brand: [],
    keyword: ""
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        toggle: (state, action) => {
            state.status = !state.status;
        },
        toggleBrand: (state, action) => {
            const selectedBrand = state.brand.find(brand => brand === action.payload)
            if (!selectedBrand) {
                state.brand.push(action.payload)
            } else {
                state.brand = state.brand.filter(brand => brand !== action.payload)
            }

        }
    }
})
export const { toggle, toggleBrand } = filterSlice.actions;

export default filterSlice.reducer;