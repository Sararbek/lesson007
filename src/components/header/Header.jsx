import React from 'react'

import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiLogin } from "react-icons/ci"
import { Link, NavLink, useLocation } from 'react-router-dom'

const Header = () => {

    const {pathname} = useLocation()

  return (
    <div className={`w-full font-[Inter] ${pathname === '/login' && 'fixed z-10'} `}>
        <div className='w-full h-[38px] bg-[#000000] text-xs text-white'>
            <div className="container max-w-7xl mx-auto h-full">
                <div className='w-full flex items-center justify-center h-full'>
                    <p className='text-white/50 text-xs'>Sign up and get 20% off to your first order. <span className='text-white/100 underline'><Link to={'sign-up'}>Sign up now</Link></span></p>
                </div>
            </div>
        </div>
        <div className={`w-full bg-white `}>
            <div className="container max-w-7xl mx-auto">
                <nav className={`flex py-6 items-center gap-10 ${pathname !== '/' && 'border-b border-b-black/30'}`}>
                    <h2 className='text-[32px] font-[Archivo_Black] font-bold '>SHOP.CO</h2>
                    <ul className='flex items-center gap-6 text-base'>
                        <li className='text-black/40'>
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li className='text-black/40'>
                            <NavLink to={'/about'}>About</NavLink>
                        </li>
                        <li className='text-black/40'>
                            <NavLink to={'/contact'}>Contact</NavLink>
                        </li>
                        <li className='text-black/40'>
                            <NavLink to={'/location'}>Location</NavLink>
                        </li>
                    </ul>
                    <div className='flex-1 flex items-center h-12 bg-[#F0F0F0] text-black/40 rounded-[62px] px-4 gap-3'>
                        <div>
                            <IoSearchOutline className='text-2xl'/>
                        </div>
                        <input type="text" placeholder='Serch for products...' className='flex-1 outline-none'/>
                    </div>
                    <ul className='flex items-center gap-4 text-2xl font-bold'>
                        <li className='text-black/40'>
                            <NavLink to={'/cart'}><CiShoppingCart/></NavLink>
                        </li>
                        <li className='text-black/40'>
                            <NavLink to={'/login'}><CiLogin/></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header