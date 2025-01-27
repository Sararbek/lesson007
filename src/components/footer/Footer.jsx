import React from 'react'

import { footerDesc, footerLinks, footerCards } from '../../static'
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className='bg-[#F0F0F0] pb-15'>
        <div className='container max-w-7xl mx-auto font-[Inter]'>
            <div className='relative'>
                <div className='absolute w-full py-9 px-16 rounded-[20px] bg-black flex items-center justify-between top-[-50%] translate-y-[80%] '>
                    <h2 className='font-[Archivo_Black] font-bold text-[40px] leading-11 text-white max-w-[50%] '>
                        STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </h2> 
                    <div className='max-w-[350px] w-full flex flex-col gap-[14px] '>
                        <div className='flex items-center gap-3 py-3 px-4 bg-white rounded-[62px]'>
                            <TfiEmail className='text-xl text-black/40'/> 
                            <input type="email" placeholder='Enter your email address' className='basis-2/3 text-black/40 outline-none' />
                        </div>
                        <button className='rounded-[62px] bg-white py-3 text-black font-medium cursor-pointer duration-300 hover:bg-white/90 '>Subscribe to Newsletter</button>
                    </div>
                </div>
                <div className='pt-[140px] pb-[50px] border-b border-b-black/40 flex justify-between items-start'>
                    <div className='flex flex-col gap-[35px]'>
                        <div className=' flex flex-col gap-[25px] '>
                        <h2 className='text-[32px] uppercase font-[Archivo_Black] font-bold '>{footerDesc.logo}</h2>
                            <p className=' max-w-[250px] text-sm text-black/60 leading-[22px]'>{footerDesc.desc}</p>
                        </div>
                        <ul className=' flex items-center gap-3 '>
                            {
                                footerDesc.social?.map((socialIcon) => (
                                    <li key={socialIcon.id} className='w-7 h-7 rounded-full border border-black/50 flex items-center justify-center cursor-pointer duration-300 ease-in-out hover:bg-black hover:text-white'>
                                        <a href="#" title={socialIcon.title} ><socialIcon.iconUrl className='text-xs'/></a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {
                        footerLinks?.map((links) => (
                        <ul key={links.id} className='flex flex-col gap-4'>
                            <li className='font-medium text-black tracking-[3px] uppercase text-base mb-2 '>{links.linksTitle}</li>
                            {
                                links.links?.map((link) => (
                                    <li key={link} className='text-base text-black/60'>
                                        <a href="#">{link}</a>
                                    </li>
                                ))
                            }
                        </ul>
                        ))
                    }
                </div>
                <div className='py-5 flex items-center justify-between'>
                    <p className='text-sm text-black/60'>
                        Shop.co © 2000-2023, All Rights Reserved
                    </p>
                    <ul className='flex gap-3'>
                        {
                            footerCards?.map((card, inx) => (
                                <li key={inx}>
                                    <a href="#">
                                        <img src={card} alt="" />
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer