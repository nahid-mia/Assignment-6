import React from 'react';
import EmptyCart from './EmptyCart';
import CartItems from './CartItems';

const Cart = ({ selectedProducts, setSelectedProducts }) => {
    return (
        <div>
            {selectedProducts.length === 0 ? <EmptyCart></EmptyCart> : <CartItems selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}></CartItems>}
        </div>
    );
};

export default Cart;