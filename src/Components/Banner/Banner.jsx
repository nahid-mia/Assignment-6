import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import bannerImage from '../../assets/banner.png';
import { FaRegDotCircle } from "react-icons/fa";

const Banner = () => {
    return (
        <div>
            <div className='flex w-10/12 mx-auto justify-between items-center mt-5 flex-col gap-7 md:flex-row'>
                <div className='flex flex-col space-y-3'>
                    <div className='flex gap-2 items-center bg-purple-200 w-fit px-3 py-1 rounded-4xl'>
                        <FaRegDotCircle className='border-2 border-purple-300  bg-purple-700 rounded-full'/>
                        <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                    </div>
                    <p className='text-4xl md:text-7xl font-bold mt-4'>Supercharge Your <br />Digital Workflow</p>
                    <p className='text-[18px] text-gray-500 mb-4'>Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>
                    <div className='flex gap-3'>
                        <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl p-3 text-white cursor-pointer'>Explore Products</button>
                        <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl cursor-pointer'>
                            <div className='flex bg-white text-[#4f39f6] border-2 items-center p-3 rounded-4xl'>
                                <CiPlay1 />
                                <p>Watch Demo</p>
                            </div>

                        </button>
                    </div>
                </div>
                <div>
                    <img src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;