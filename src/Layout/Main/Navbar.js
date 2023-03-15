import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosListBox } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
    return (
        <nav className='h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5'>
            <ul className='h-full mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
                <h1 className='flex-1'>Moon Tech</h1>
                <li className='flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3'>
                    <input
                        className='h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none'
                        type='text'
                        name='search'
                        id='search'
                    />
                    <button>
                        <BiSearchAlt />
                    </button>
                </li>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/top-rated'>Top Rated</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/deshboard'>Deshboard</Link>
                </li>
                <li className='bg-indigo-500 rounded-full p-2' title='Wishlist'>
                    <Link to='/wishlist'>
                        <IoIosListBox className='text-white'></IoIosListBox>
                    </Link>
                </li>
                <li className='bg-indigo-500 rounded-full p-2' title='Card'>
                    <Link to='/card'>
                        <BsFillCartFill className='text-white'></BsFillCartFill>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;