import React from 'react'

import loginBg from "../../assets/login001.jpg"
import loginGoogleIcon from "../../assets/login002.svg"

const LogIn = () => {
  return (
    <div className='min-h-screen relative'>
        <div className='w-full he-full'>
            <img src={loginBg} alt="" className='w-full h-full' />
        </div>
        <div className='absolute w-full h-full top-0 left-0 flex items-center justify-center'>
            <div className='max-w-[450px] w-full py-8 px-10 bg-[#f5f5f5] rounded-xl flex flex-col gap-10 '>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-[Inter] text-4xl font-medium text-center capitalize'>Welcome back</h2>
                    <p className='font-[Inter] text-center text-black/60 '>Welcome back! Please enter your details.</p>
                </div>
                <div className='flex flex-col gap-8'>
                    <button className='flex item-center justify-center cursor-pointer gap-4 font-[Inter] py-2 rounded-sm border border-black/30 bg-[#f5f5f5] transition-all duration-200 ease-in-out hover:shadow-sm shadow-[#0004] '><img src={loginGoogleIcon} alt="" className=' w-4 h-4 self-baseline ' /> Log in with Google</button>
                    <div className='flex items-center gap-1.5'>
                        <span className='h-[1px] bg-black/30 w-full'></span>
                        <p className='font-[Inter] text-base leading-0 '>or</p>
                        <span className='h-[1px] bg-black/30 w-full'></span>
                    </div>
                    <form action="" className='flex flex-col gap-4'>
                        <input type="email" placeholder='Email' className='outline-none border-b border-black/30 indent-1.5 py-2'/>
                        <input type="password" placeholder='Password' className='outline-none border-b border-black/30 indent-1.5 py-2'/>
                        <div className='flex items-center justify-between  '>
                            <div className='flex items-center gap-2 font-[Inter] text-sm'>
                                <input type="checkbox" />
                                <p>Remember for 30 days</p>
                            </div>
                            <a href="#"  className='font-[Inter] text-sm underline '>Forgot Password</a>
                        </div>
                        <button className=' font-[Inter] text-base text-white py-3 mt-8 bg-black cursor-pointer '>Log in</button>
                        <p className=' text-center font-[Inter] text-base text-black/80 '>
                            Don’t have an account?
                        <a href="#" className='underline text-black ml-2 '>Sign up for free</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn