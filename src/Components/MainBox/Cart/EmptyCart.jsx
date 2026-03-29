import React from 'react';
import { LuShoppingCart } from "react-icons/lu";
const EmptyCart = () => {
    return (
        <div>
            <div className='bg-gray-300 rounded-2xl w-10/12 mx-auto items-center justify-center flex flex-col py-30'>
                <div> <LuShoppingCart className='text-9xl' /></div>
                <div><p>No item Added to Cart</p></div>
            </div>
        </div>
    );
};

export default EmptyCart;