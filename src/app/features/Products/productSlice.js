import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
}

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const res = await fetch("https://moon-tech-server-pied.vercel.app/products");
    const data = await res.json();
    return data;
})


const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.products = action.payload;
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.products = [];
        })
    }
})
export default productSlice.reducer;