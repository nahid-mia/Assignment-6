import { LuShoppingCart } from "react-icons/lu";

const Navbar = ({selectedProducts}) => {
    return (
        <div>
            <div className='flex w-10/12 mx-auto justify-between mt-5 items-center h-23'>
                <h1 className='text-4xl font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Digitools</h1>
                <ul className='flex gap-5'>
                    <li className='text-[16px]'><a href="">Products</a></li>
                    <li className='text-[16px]'><a href="">Features</a></li>
                    <li className='text-[16px]'><a href="">Pricing</a></li>
                    <li className='text-[16px]'><a href="">Testimonials</a></li>
                    <li className='text-[16px]'><a href="">FAQ</a></li>
                </ul>
                <div className='flex gap-3'>
                    <button className='btn rounded-full'> 
                        <span className='relative'>
                            <LuShoppingCart />
                            <div className='absolute bottom-1 left-2 bg-[#9514FA] rounded-full text-white mask mask-circle p-3'>{selectedProducts.length}</div>
                        </span>
                        </button>
                    <button className='btn bg-white hover:text-purple-600'>Login</button>
                    <button className='btn rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;