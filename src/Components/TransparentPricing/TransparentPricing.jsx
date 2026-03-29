import React from 'react';

const TransparentPricing = () => {
    return (
        <div>
            <div className='flex flex-col items-center mt-10'>
                <div className='mt-10'>
                    <p className='text-6xl font-bold'>Simple, Transparent Pricing</p>
                    <p className='text-[16px] text-center mt-2'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-20 mt-10'>
                    <div className='p-7 shadow-xl bg-gray-100 relative h-100 rounded-2xl'>
                        <p className='font-bold text-xl'>Starter</p>
                        <p className='text-gray-500 mb-4'>Perfect for getting started</p>
                        <p className='text-gray-500 mb-4'><span className='font-bold text-black text-2xl'>$0</span>/Month</p>
                        <div>
                            <ul>
                                <li className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <p>Access to 10 free tools</p>
                                </li>
                                <li className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <p>Basic templates</p>
                                </li>
                                <li className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <p>Community support</p>
                                </li>
                                <li className='flex items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <p>1 project per month</p>
                                </li>
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
                                <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <p>Unlimited templates</p></li>
                                <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <p>Priority support</p></li>
                                <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <p>Unlimited projects</p></li>
                                <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <p>Cloud sync</p></li>
                                <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <p>Advanced analytics</p></li>
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
                                <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <p>Everything in Pro</p></li>
                                <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <p>Team collaboration</p></li>
                                <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <p>Custom integrations</p></li>
                                <li className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <p>Dedicated support</p></li>
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