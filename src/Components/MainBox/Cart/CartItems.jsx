import React from 'react';
import CartItem from './CartItem';

const CartItems = ({ selectedProducts, setSelectedProducts, money, setMoney }) => {

    const checkOut = () => {
        setSelectedProducts([]);
        setMoney(0);
    }

    return (
        <div>
            <div className='w-10/12 flex flex-col space-y-4 mx-auto p-5 shadow-2xl rounded-2xl'>
                <p className='font-bold text-2xl'>Your Cart</p>
                {selectedProducts.map(product => {
                    return <CartItem key={product.id} product={product} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts} money={money} setMoney={setMoney}></CartItem>
                })}
                <div className='flex justify-between'>
                    <p>Total</p>
                    <p className='font-bold text-xl'>${money}</p>
                </div>
                <button
                    onClick={() => checkOut()}
                    className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl'>Proceed To checkout</button>
            </div>

        </div>
    );
};

export default CartItems;