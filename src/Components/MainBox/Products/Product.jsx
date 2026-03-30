import React from 'react';
import { toast } from 'react-toastify';

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

    return (
        <div>
            <div className="card bg-base-100 shadow-sm rounded-3xl">
                <div className="card-body">
                    <div className='relative'>
                        <img className='mask mask-circle outline-2 outline-gray-600 rounded-full p-2 self-end' src={product.image} alt="" />
                        <span className={`px-3 text-[14px] rounded-3xl ${product.rating === "New" ? "bg-green-300 text-green-800" : product.rating === "Popular" ? "bg-purple-300 text-purple-800" : product.rating === "Best Seller" ? "bg-[#fef3c6] text-[#bb4d00]" : ""} w-fit absolute top-0 right-0`}>{product.rating}</span>
                    </div>

                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">{product.name}</h2>
                    </div>
                    <p className='text-gray-600'>{product.description}</p>
                    <span className="text-xl font-bold">${product.price}<span className='text-[14px] text-gray-500'>{product.id % 2 === 0 ? "/Mo" : "/Year"}</span></span>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{product.quality1}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{product.quality2}</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{product.quality3}</span>
                        </li>
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