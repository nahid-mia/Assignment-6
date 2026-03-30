import React from 'react';

const SectionBtn = ({ activeTab, setActiveTab, selectedProducts }) => {
    return (
        <div>
            <div className='flex flex-col space-y-4 items-center justify-center mx-auto mt-30 mb-10'>
                <p className='text-4xl font-bold text-center'>Premium Digital Tools</p>
                <p className='text-[16px] text-gray-500 text-center px-8'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='flex'>
                    <button
                        onClick={() => setActiveTab("products")}
                        className={`btn btn-ghost p-4 rounded-3xl ${activeTab === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-white"}`}>Products</button>
                    <button
                        onClick={() => setActiveTab("cart")}
                        className={`btn btn-ghost p-4 rounded-3xl ${activeTab === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-white"}`}>Cart ({selectedProducts.length})</button>
                </div>
            </div>
        </div>
    );
};

export default SectionBtn;