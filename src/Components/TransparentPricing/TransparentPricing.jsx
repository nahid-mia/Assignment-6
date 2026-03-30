import React from 'react';
import Links from '../Links';

const TransparentPricing = () => {

    const arr1 = ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"];
    const arr2 = ["Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"];
    const arr3 = ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support"];

    return (
        <div>
            <div className='flex flex-col items-center mt-10'>
                <div className='mt-10'>
                    <p className='text-3xl text-center md:text-6xl font-bold'>Simple, Transparent Pricing</p>
                    <p className='text-[16px] text-center mt-2'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20 mt-10'>
                    <div className='p-7 shadow-xl bg-gray-100 relative h-100 rounded-2xl'>
                        <p className='font-bold text-xl'>Starter</p>
                        <p className='text-gray-500 mb-4'>Perfect for getting started</p>
                        <p className='text-gray-500 mb-4'><span className='font-bold text-black text-2xl'>$0</span>/Month</p>
                        <div>
                            <ul>
                                {arr1.map(el => {
                                    return <Links key={arr1.indexOf(el)} el={el}></Links>
                                })}
                            </ul>
                        </div>
                        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10/12 absolute bottom-2 rounded-3xl text-white'>Get Started Free</button>
                    </div>
                    <div className='p-5 shadow-xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white relative h-100 rounded-2xl'>
                        <p className='font-bold text-xs p-2 rounded-4xl absolute -top-3 left-1/2 -translate-x-1/2  bg-[#fef3c6] text-[#bb4d00]'>Most Popular</p>
                        <p className='font-bold text-xl'>Pro</p>
                        <p className=' mb-4'>Best for professionals</p>
                        <p className=' mb-4'><span className='font-bold text-2xl'>$29</span>/Month</p>
                        <div>
                            <ul>
                                {arr2.map(el => {
                                    return <Links key={arr2.indexOf(el)} el={el}></Links>
                                })}
                            </ul>
                        </div>
                        <button className='btn bg-white w-10/12 absolute bottom-2 left-7 rounded-3xl'>Start Pro Trial</button>
                    </div>
                    <div className='p-7 shadow-xl bg-gray-100 relative h-100 rounded-2xl'>
                        <p className='font-bold text-xl'>Enterprise</p>
                        <p className='text-gray-500 mb-4'>For teams and businesses</p>
                        <p className='text-gray-500 mb-4'><span className='font-bold text-black text-2xl'>$99</span>/Month</p>
                        <div>
                            <ul>
                                {arr3.map(el => {
                                    return <Links key={arr3.indexOf(el)} el={el}></Links>
                                })}
                            </ul>
                        </div>
                        <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10/12  absolute bottom-2 text-white rounded-3xl'>Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransparentPricing;