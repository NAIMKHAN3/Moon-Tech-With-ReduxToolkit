import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchProducts, postProducts } from "../../../utility/fetchApi";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    postSuccess: false,
}

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const data = fetchProducts();
    return data;
})
export const addProduct = createAsyncThunk("products/addProduct", async (product) => {
    const data = postProducts(product)
    return data;
})


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        togglePostSuccess: (state, action) => {
            state.postSuccess = false;
        }
    },
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
        builder.addCase(addProduct.pending, (state, action) => {
            state.isLoading = true;
            state.postSuccess = false;
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.postSuccess = true;
        })
        builder.addCase(addProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.postSuccess = false;
            state.isError = true;
        })
    }
})
export const { togglePostSuccess } = productSlice.actions;
export default productSlice.reducer;