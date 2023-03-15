import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle, toggleBrand } from '../app/features/Filter/filterSlice';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter)
    const { status, brand } = filter;


    useEffect(() => {
        fetch("https://moon-tech-server-pied.vercel.app/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const activeClass = 'bg-indigo-500 text-white border-white';

    let content;

    if (products.length) {
        content = products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
    }
    if (products.length && (status || brand.length)) {
        content = products.filter(product => {
            if (status) {
                return product.status === true;
            }
            return product;
        })
            .filter(product => {
                if (brand.length) {
                    return brand.includes(product.brand)
                }
                return product;
            })
            .map(product => <ProductCard key={product._id} product={product}></ProductCard>)
    }


    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='mb-10 flex justify-end gap-5'>
                <button className={`border px-3 py-2 rounded-full font-semibold ${filter.status && activeClass}`}
                    onClick={() => dispatch(toggle())}
                >In Stock</button>
                <button className={`border px-3 py-2 rounded-full font-semibold ${filter.brand.includes("amd") && activeClass}`}
                    onClick={() => dispatch(toggleBrand("amd"))}
                >AMD</button>
                <button className={`border px-3 py-2 rounded-full font-semibold ${filter.brand.includes("intel") && activeClass}`}
                    onClick={() => dispatch(toggleBrand("intel"))}
                >Intel</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
                {
                    content
                }
            </div>

        </div>
    );
};

export default Home;