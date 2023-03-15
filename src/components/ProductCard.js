import React from 'react';
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { addToCard, removeFromCard } from '../app/features/Card/cartSlice';
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const location = window.location.pathname;
    return (
        <div className='shadow-lg rounded-3xl relative border p-3 flex flex-col text-indigo-900'>
            {
                location === '/card' &&
                <div className='bg-indigo-500 rounded-full grid place-items-center text-white absolute top-2 right-2 h-8 w-8'><p>{product.quantity}</p></div>
            }
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
                {
                    location === '/card' ? <button className='bg-red-500 flex justify-between items-center rounded-full flex-1 py-1 px-2 text-white'
                        onClick={() => dispatch(removeFromCard(product))}
                    >Remove <RiDeleteBin6Line size={20}></RiDeleteBin6Line>
                    </button> : <button className='bg-indigo-500 rounded-full flex-1 py-1 px-2 text-white font-bold'
                        onClick={() => dispatch(addToCard(product))}
                    >Add to card
                    </button>
                }

                <button title='Add to wishlist' className='bg-indigo-500 py-1 px-2 rounded-full'

                ><BiListPlus className='text-white'></BiListPlus></button>
            </div>
        </div>
    );
};

export default ProductCard;