import React from 'react';
import { toast } from 'react-toastify';
import Links from '../../Links';

const Product = ({ product, selectedProducts, setSelectedProducts, money, setMoney }) => {

    const isSelected = selectedProducts.some(p => p.id === product.id); // I learned this from AI so that tab changing is not affected

    const notify = () => toast(
        <>
            {product.name} added to the cart<br />
            For ${product.price}
        </>
    );;

    const handleSelect = () => {
        if (selectedProducts.some(p => p.id === product.id)) {
            return;
        }
        setSelectedProducts([...selectedProducts, product]);
        setMoney(money + product.price);
        notify()
    }

    const arr = product.features;

    return (
        <div>
            <div className="card bg-base-100 shadow-sm rounded-3xl">
                <div className="card-body">
                    <div className='relative'>
                        <img className='mask mask-circle outline-2 outline-gray-600 rounded-full p-2 self-end' src={product.icon} alt="" />
                        <span className={`px-3 text-[14px] rounded-3xl ${product.tagType === "New" ? "bg-green-300 text-green-800" : product.tagType === "Popular" ? "bg-purple-300 text-purple-800" : product.tagType === "Best Seller" ? "bg-[#fef3c6] text-[#bb4d00]" : ""} w-fit absolute top-0 right-0`}>{product.tag}</span>
                    </div>

                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">{product.name}</h2>
                    </div>
                    <p className='text-gray-600'>{product.description}</p>
                    <span className="text-xl font-bold">${product.price}<span className='text-[14px] text-gray-500'>{product.period === "monthly" ? "/Mo" : "/Year"}</span></span>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        {arr.map(el => {
                            return <Links key={arr.indexOf(el)} el={el}></Links>
                        })}
                    </ul>
                    <div className="mt-6">
                        <button
                            onClick={() => handleSelect()}
                            className="btn rounded-3xl text-white w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">{isSelected ? "Added to Cart" : "Buy Now"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;