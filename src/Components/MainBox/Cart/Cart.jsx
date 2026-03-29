import React from 'react';
import EmptyCart from './EmptyCart';
import CartItems from './CartItems';

const Cart = ({ selectedProducts, setSelectedProducts, money, setMoney }) => {
    return (
        <div>
            {selectedProducts.length === 0 ? <EmptyCart></EmptyCart> : <CartItems selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} money={money} setMoney={setMoney}></CartItems>}
        </div>
    );
};

export default Cart;