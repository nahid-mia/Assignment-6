import React from 'react';
import { GoDotFill } from "react-icons/go";

const FooterExtra = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] '>
            <div className='w-10/12 mx-auto flex flex-col space-y-5 items-center text-center'>
                <p className='text-5xl font-bold text-white mt-20'>Ready to Transform Your Workflow?</p>
                <p className='text-[14px] font-semibold text-[#e8d9f4]'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
                <div className='flex gap-3'>
                    <button className="btn bg-white px-2 py-2 rounded-2xl w-40">
                        <span className='text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Explore Products</span>
                    </button>
                    <button className='btn border w-40 border-white  px-2 py-2 rounded-2xl bg-white bg-clip-text text-transparent'>View Pricing</button>
                </div>
                <div className='flex gap-2 text-white mb-20 items-center'>
                    <p>14-day free trial</p>
                    <GoDotFill />
                    <p>No credit card required</p>
                    <GoDotFill />
                    <p>Cancel anytime</p>
                </div>
                
            </div>
        </div>
    );
};

export default FooterExtra;