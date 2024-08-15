import { useState } from 'react';
import Logo from '../assets/law-logo.png';
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Nav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <header className='w-full  z-20 bg-white'>
            <nav className='w-[90%] mx-auto py-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src={Logo} className='h-7 w-7' alt="" />
                    <h1 className='text-3xl font-semibold font-custom'>Law</h1>
                </div>
                <div>
                    <ul className='hidden md:flex gap-4 font-custom text-lg items-center'>
                        <li className=''>
                            <Link to={"/"}>Home </Link>
                        </li>
                        <li className=''>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li className=''>
                            <Link to={"/the-firm"}>The Firm</Link>
                        </li>
                        <li className=''>
                            <Link to={"/people"}>People</Link>
                        </li>
                        <li>
                            <Link>
                                <div className='border border-black rounded-md p-1'>
                                    Get in touch
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <div onClick={handleNav} className='block md:hidden'>
                        {nav ? <IoCloseOutline className='text-black' size={30} /> : <CiMenuBurger className='text-black' size={30} />}

                    </div>
                    {/* HAMBURGER MENU */}
                    <div className={nav ? `fixed md:hidden left-0 top-0 w-[60%] h-full border-r 
                        border-r-gray-900 bg-white ease-in-out duration-500 `
                        : `fixed left-[-100%]`}
                    >
                        <h1 className='w-full text-3xl font-semibold font-custom m-4 pt-2 text-black '>
                            Law.
                        </h1>
                        <ul onClick={() => { setNav(false) }} className='cursor-pointer uppercase font-custom'>
                            <li className='p-4 pl-4 hover:bg-[#000100] hover:text-white '>
                                <Link to={"/"}>Home </Link>
                            </li>
                            <li className='p-4 pl-4 hover:bg-[#000100] hover:text-white '>
                                <Link to={"/about"}>About</Link>
                            </li>
                            <li className='p-4 pl-4 hover:bg-[#000100] hover:text-white '>
                                <Link to={"/the-firm"}>The Firm</Link>
                            </li>
                            <li className='p-4 pl-4 hover:bg-[#000100] hover:text-white'>
                                <Link to={"/people"}>People</Link>
                            </li>
                            <li className=' '>
                                <Link to={"/contact"}>
                                    <div className='border border-black hover:bg-[#ffff] hover:text-black  p-2 rounded-2xl bg-black text-white w-40 text-center'>
                                        Get in touch
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav