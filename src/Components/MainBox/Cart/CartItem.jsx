import React from 'react';
import { toast } from 'react-toastify';

const CartItem = ({ product, selectedProducts, setSelectedProducts, money, setMoney }) => {

    const notify = () => toast(
        <>
            {product.name} removed from the cart
        </>
    );

    const handleRemove = () => {
        const updated = selectedProducts.filter(p => p.id !== product.id)
        setSelectedProducts(updated);
        setMoney(money - product.price);
        notify();
    }

    return (
        <div>
            <div className='flex p-3 justify-between bg-gray-200 items-center rounded-2xl'>
                <div className='flex gap-2'>
                    <img className='mask mask-circle outline-2 outline-gray-600 rounded-full p-2' src={product.image} alt="" />
                    <div>
                        <p className='font-bold text-xl'>{product.name}</p>
                        <p>${product.price}</p>
                    </div>
                </div>
                <div
                    onClick={() => handleRemove()}
                    className='text-red-500 hover:cursor-pointer'>Remove</div>
            </div>
        </div>
    );
};

export default CartItem;