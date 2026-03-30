import React from 'react';
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import LinkBack from './linkBack';


const Footer = () => {
    const ul1 = ["Features", "pricing", "Templates", "Integrations"]
    const ul2 = ["About", "Blog", "Careers", "Press"];
    const ul3 = ["Documentation", "Help Center", "Community", "Contact"];
    const ul4 = ["Privacy Policy", "Terms of Service", "Cookies"];
    return (
        <div className='bg-[#101727]'>
            <div className='flex flex-col w-10/12 text-white mx-auto pb-20'>
                <div className='grid grid-cols-2 gap-7 md:flex justify-between mt-20'>
                    <div className='space-y-3'>
                        <p className='font-bold text-4xl'>Digitools</p>
                        <p className='font-semibold text-gray-100 text-[14px]'>Premium digital tools for creators, professionals, and businesses. <br /> Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div>
                        <ul className='text-[12px] space-y-3'>
                            <li className='font-bold text-lg'>Product</li>
                            {ul1.map(el => { return <LinkBack key={ul1.indexOf(el)} el={el}></LinkBack> }
                            )}
                        </ul>
                    </div>
                    <div>
                        <ul className='text-[12px] space-y-3'>
                            <li className='font-bold text-lg'>Company</li>
                            {ul2.map(el => { return <LinkBack key={ul2.indexOf(el)} el={el}></LinkBack> }
                            )}
                        </ul>
                    </div>
                    <div>
                        <ul className='text-[12px] space-y-3'>
                            <li className='font-bold text-lg'>Resources</li>
                            {ul3.map(el => { return <LinkBack key={ul3.indexOf(el)} el={el}></LinkBack> }
                            )}
                        </ul>
                    </div>
                    <div>
                        <p>Social Links</p>
                        <ul className='flex gap-1 mt-2'>
                            <li className='mask mask-circle bg-white text-black p-1'><FaFacebookSquare /></li>
                            <li className='mask mask-circle bg-white text-black p-1'><FaApple /></li>
                            <li className='mask mask-circle bg-white text-black p-1'><FaSquareInstagram /></li>
                        </ul>
                    </div>
                </div>
                <hr className='text-white my-7' />
                <div className='flex flex-col-reverse items-center gap-4 md:flex-row md:justify-between'>
                    <div className='flex gap-1 items-center'>
                        <FaRegCopyright />
                        <p className='text-[14px]'>2026 Digitools. All rights reserved.</p>
                    </div>
                    <div>
                        <ul className='flex gap-4 text-[14px]'>
                            {ul4.map(el => { return <LinkBack key={ul4.indexOf(el)} el={el}></LinkBack> }
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;