import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://moon-tech-server-pied.vercel.app" }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/products"
            }),
            providesTags: ["Product"],
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: "/addproduct",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Product"],
        }),
        removeProduct: builder.mutation({
            query: (id) => ({
                url: `/deleteproduct/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Product"]
        })
    })
})

export const { useGetProductsQuery, useAddProductMutation, useRemoveProductMutation } = productApi;