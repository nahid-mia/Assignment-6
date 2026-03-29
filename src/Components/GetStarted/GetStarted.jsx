import React from 'react';
import userImage from '../../assets/user.png'
import packageImage from '../../assets/package.png'
import rocketImage from '../../assets/rocket.png'

const GetStarted = () => {
    return (
        <div className='bg-gray-100'>
            <div className='w-10/12 mx-auto flex flex-col items-center p-10 mt-20 space-y-4'>
                <p className='text-3xl font-bold mt-20'>Get Started in 3 Steps</p>
                <p className='text-[16px] text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 mx-auto pb-20'>
                <div className='bg-white flex flex-col items-center px-3 space-y-5 py-20 rounded-3xl relative text-center'>
                    <p className='mask mask-circle text-right bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute top-5 right-5 p-1 text-white text-[12px]'>01</p>
                    <img className='bg-[#d1b8e4] p-3 rounded-full' src={userImage} alt="" />
                    <p className='font-semibold text-2xl'>Create Account</p>
                    <p className='text-[14px] text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='bg-white flex flex-col items-center p-3 space-y-5 py-20 rounded-3xl relative text-center'>
                    <p className='mask mask-circle text-right bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute top-5 right-5 p-1 text-white text-[12px]'>02</p>
                    <img className='bg-[#d1b8e4] p-3 rounded-full' src={packageImage} alt="" />
                    <p className='font-semibold text-2xl'>Choose Product</p>
                    <p className='text-[14px] text-gray-500'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='bg-white flex flex-col items-center p-3 space-y-5 py-20 rounded-3xl relative text-center'>
                    <p className='mask mask-circle text-right bg-linear-to-r from-[#4F39F6] to-[#9514FA] absolute top-5 right-5 p-1 text-white text-[12px]'>03</p>
                    <img className='bg-[#d1b8e4] p-3 rounded-full' src={rocketImage} alt="" />
                    <p className='font-semibold text-2xl'>Start creating</p>
                    <p className='text-[14px] text-gray-500'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;