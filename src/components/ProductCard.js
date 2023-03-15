import React from 'react';
import { BiListPlus } from "react-icons/bi";

const ProductCard = ({ product }) => {
    return (
        <div className='shadow-lg rounded-3xl relative border p-3 flex flex-col text-indigo-900'>
            {/* {
            location === '/card' &&
            <div className='bg-indigo-500 rounded-full grid place-items-center text-white absolute top-2 right-2 h-8 w-8'><p>{product.quantity}</p></div>
        } */}
            <div className='h-52 w-52 mx-auto'>
                <img src={product.image} alt={product.model} />
            </div>
            <h1 className='font-bold text-center'>{product.model}</h1>
            <p className='font-semibold text-center mb-3'>Rating: {product.rating}</p>
            <div className='flex-1'>
                <ul className='space-y-2'>
                    {
                        product.keyFeature.map(feature => {
                            return <li key={feature} className='text-sm'>{feature}</li>
                        })
                    }
                </ul>
            </div>
            <div className='flex gap-2 mt-5'>
                <button className='bg-indigo-500 rounded-full flex-1 py-1 px-2 text-white font-bold'
                >Add to card
                </button>

                <button title='Add to wishlist' className='bg-indigo-500 py-1 px-2 rounded-full'

                ><BiListPlus className='text-white'></BiListPlus></button>
            </div>
        </div>
    );
};

export default ProductCard;