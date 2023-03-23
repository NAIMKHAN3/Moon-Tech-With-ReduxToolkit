import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { deleteProducts, fetchProducts, postProducts } from "../../../utility/fetchApi";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    postSuccess: false,
    deleteSuccess: false,
    deleteLoading: false,
}

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const data = fetchProducts();
    return data;
})
export const addProduct = createAsyncThunk("products/addProduct", async (product) => {
    const data = postProducts(product)
    return data;
})
export const removeProduct = createAsyncThunk("products/removeProduct", async (id, thunkAPI) => {
    const data = await deleteProducts(id)
    thunkAPI.dispatch(removeFromState(id))
    return data;
})


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        togglePostSuccess: (state, action) => {
            state.postSuccess = false;
        },
        toggleDeleteSuccess: (state, action) => {
            state.deleteSuccess = false;
        },
        removeFromState: (state, action) => {
            state.products = state.products.filter(product => product._id !== action.payload)
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
        builder.addCase(removeProduct.pending, (state, action) => {
            state.deleteLoading = true;
            state.deleteSuccess = false
        })
        builder.addCase(removeProduct.fulfilled, (state, action) => {
            state.deleteLoading = false;
            state.deleteSuccess = true;
        })
        builder.addCase(removeProduct.rejected, (state, action) => {
            state.deleteLoading = false;
            state.deleteSuccess = false;
            state.isError = true;
        })
    }
})
export const { togglePostSuccess, removeFromState, toggleDeleteSuccess } = productSlice.actions;
export default productSlice.reducer;