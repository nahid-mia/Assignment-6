import React from 'react';

const BannerExtra = () => {
    return (
        <div className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] mt-5 py-20'>
            <div className='w-8/12 mx-auto flex justify-evenly'>
                <div className='text-white flex flex-col gap-3 md:gap-6 items-center justify-center'>
                    <p className='text-2xl md:text-5xl font-bold'>50K+</p>
                    <p className='text-[20x] md:text-2xl'>Active Users</p>
                </div>
                <div className="divider md:divider-horizontal before:bg-white after:bg-white"></div>
                <div className='text-white flex flex-col gap-3 md:gap-6 items-center justify-center'>
                    <p className='text-2xl md:text-5xl font-bold'>200+</p>
                    <p className='text-[20x] md:text-2xl'>Premium Tools</p>
                </div>
                <div className="divider md:divider-horizontal before:bg-white after:bg-white"></div>
                <div className='text-white flex flex-col gap-3 md:gap-6 items-center justify-center'>
                    <p className='text-2xl md:text-5xl font-bold'>4.9</p>
                    <p className='text-[20x] md:text-2xl'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default BannerExtra;