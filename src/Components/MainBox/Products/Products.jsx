import React, { use } from 'react';
import Product from './Product';

const Products = ({ dataPromise, selectedProducts, setSelectedProducts, money, setMoney }) => {

    const data = use(dataPromise);

    return (
        <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {data.map(product => {
                return <Product key={product.id} product={product} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} money={money} setMoney={setMoney}></Product>
            })}

        </div>
    );
};

export default Products;