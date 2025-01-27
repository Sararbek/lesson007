import React, { useEffect, useState } from 'react'
import heroImg from '../../assets/001.png'
import sparkleImg from '../../assets/002.png'
import {Pagination} from '@mui/material';
import CountUp from 'react-countup';
import Aos from 'aos';
import "aos/dist/aos.css"
import { Toaster, toast } from 'sonner';

import logo001 from '../../assets/logo001.png'
import logo002 from '../../assets/logo002.png'
import logo003 from '../../assets/logo003.png'
import logo004 from '../../assets/logo004.png'
import logo005 from '../../assets/logo005.png'
import { request } from '../../api'

import { IoStar } from "react-icons/io5";
import { dressStyles } from '../../static'
import LoadingProducts from '../../components/loadingProducts/LoadingProducts';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [error, setError] =  useState()
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(0);
    const handleChange = (event, value) => {
      setPage(value);
    };
  
    const limit = 8

    useEffect(() => {

        const fetchProducs =async () => {
            try {
                setLoading(true)
                const response = await request.get(`/products`, {
                    params: {
                        limit,
                        skip: (page - 1) * limit
                    }
                })
                setProducts(response.data.products)
                setTotal(response.data.total)
            } catch (error) {
                    setError(error.messaage)
                    toast.error(`${error.message}`)
            }finally{
                setLoading(false)
            }
        }

        fetchProducs()
    }, [page])

    useEffect(() => {
        Aos.init({
            offset: 150,
            easing: 'ease-in-sine',
        })
    }, [])

  return (
    <div className='w-full'>
        {/* Hero */}
        <Toaster/>
        <section className='w-full pt-[100px] pb-[116px] bg-[#F2F0F1] overflow-hidden'>
            <div className="container max-w-7xl mx-auto">
                <div className="flex gap-12">
                    <div className='flex flex-col gap-12 max-w-[50%] '>
                        <div className='flex flex-col gap-8'>
                            <h1 data-aos="fade-right" data-aos-duration='500'
                                className='font-[Archivo_Black] font-bold text-[64px] leading-16 '>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                            <p data-aos="fade-right" data-aos-duration="700"
                                className='font-[Inter] text-base text-black/60 '>
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                            </p>
                            <button data-aos="fade-right" data-aos-duration="1000"
                                    className=' font-[Inter] text-base text-white capitalize py-4 px-16 bg-black rounded-[62px] self-baseline cursor-pointer hover:bg-black/90 duration-200 ease-in '>Shop Now</button>
                        </div>
                        <div className='flex gap-16'>
                            <div className='flex flex-col'>
                                <p className='font-[Inter] font-bold text-[40px]'><CountUp end={200} duration={2}/>+</p>
                                <p className='font-[Inter] text-base text-black/60 whitespace-nowrap '>International Brands</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-[Inter] font-bold text-[40px]'><CountUp end={2000} duration={2}/>+</p>
                                <p className='font-[Inter] text-base text-black/60 whitespace-nowrap '>High-Quality Products</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-[Inter] font-bold text-[40px]'><CountUp end={30000} duration={2}/>+</p>
                                <p className='font-[Inter] text-base text-black/60 whitespace-nowrap '>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-[50%] '>
                        <div className='absolute top-[100%] translate-y-[-70%] left-[50%] translate-x-[-50%]'>
                            <img src={heroImg} alt="" className='scale-230 object-cover'/>
                        </div>
                        <div className='absolute top-[300px] w-14 h-14'>
                            <img src={sparkleImg} className='object-cover w-full'/>
                        </div>
                        <div className='absolute w-[104px] h-[104px] top-20 right-0'>
                            <img src={sparkleImg} className='object-contain w-full'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Brand logos */}
        <section className='w-full bg-black h-[122px]'>
            <div className="container max-w-7xl mx-auto h-full">
                <ul className='flex items-center h-full justify-between'>
                    <li>
                        <img src={logo001} alt="" />
                    </li>
                    <li>
                        <img src={logo002} alt="" />
                    </li>
                    <li>
                        <img src={logo003} alt="" />
                    </li>
                    <li>
                        <img src={logo004} alt="" />
                    </li>
                    <li>
                        <img src={logo005} alt="" />
                    </li>
                </ul>      
            </div>
        </section>
        {/* Products */}
        <section className='w-full mt-[72px] mb-16'>
            <div className="container max-w-7xl mx-auto">
                <div className='flex flex-col gap-14 border-b border-b-black/20 pb-16'>
                    <div>
                        <h2 data-aos='fade-right' data-aos-duration="1500" data-aos-offset='0'
                            className='font-[Archivo_Black] font-bold text-center text-5xl'>NEW ARRIVALS</h2>
                    </div>
                    <div className='flex flex-col gap-6'>
                        {
                            loading ? <LoadingProducts loadingCount={limit}/> :
                            <div className='font-[Inter] grid grid-cols-4 gap-y-6 gap-x-5'>
                            {
                                products?.map((product) =>  (
                                <div key={product.id} 
                                     className='rounded-[20px] overflow-hidden'>
                                    <div className='w-full bg-[#f0eeed] h-[300px] rounded-[20px] overflow-hidden'>
                                        <img src={product.thumbnail} alt="" className='hover:scale-105 cursor-pointer duration-300' onClick={() => navigate(`/product/detail/${product.id}`)}/>
                                    </div>
                                    <div className='flex flex-col gap-2 py-4'>
                                        <p className='font-bold text-xl line-clamp-1'>{product.title}</p>
                                        <div className='flex items-center gap-3'>
                                            <div>
                                                <IoStar className='text-lg text-[#FFC633] '/>
                                            </div>
                                            <p className='text-sm text-black'>{product.rating}/<span className='text-black/60'>5</span></p>
                                            <p className={`text-sm text-black/80 ${product.stock ? 'text-green-500' : 'text-red-500'}`}>(In stock: {product.stock})</p> 
                                        </div>
                                        <div className='flex items-center gap-[10px] text-xl font-bold'>
                                            <p className='text-black'>${product.price}</p>
                                            <p className='text-black/40 line-through'>${Math.round((product.price + (product.price * 20 / 100)))}</p>
                                            <p className='text-xs py-[6px] px-3 rounded-[62px] text-[#FF3333] bg-[#FF3333]/10 '>-{product.discountPercentage}%</p>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                        </div>
                        }
                        <div className='flex justify-center'>
                        <Pagination count={Math.ceil(total / limit)} page={page} onChange={handleChange} />
                            {/* <button className='capitalize text-base font-[Inter] px-20 py-4 rounded-[62px] border border-black/20 border-solid hover:bg-black/80 hover:text-white duration-200 cursor-pointer'>view all</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Dress style */}
        <section className='w-full'>
            <div className='container max-w-7xl mx-auto'>
                <div className='flex flex-col gap-16 py-[70px] px-16 bg-[#F0F0F0] rounded-[40px]'>
                    <div className='text-center'>
                        <h2 data-aos='fade-right' data-aos-duration="1500"
                            className='font-[Archivo_Black] font-bold text-5xl uppercase '>BROWSE BY dress STYLE</h2>
                    </div>
                    <div className='grid grid-cols-3 gap-5 font-[Inter]'>
                        {
                            dressStyles?.map((style) => (
                            <div key={style.id} data-aos={[1,3].includes(style.id) ? `fade-right` : 'fade-left'} data-aos-duration='1000' className={`relative bg-white rounded-[20px] overflow-hidden max-h-[290px] ${[2, 3].includes(style.id) ? 'col-span-2' : 'col-span-1'} cursor-pointer hover:bg-black/70 hover:text-white/70 transition duration-100`}>
                                <div className='w-full h-full'>
                                    <img src={style.imgUrl} alt="" className='w-full h-full'/>
                                </div>
                                <div className='absolute top-0 left-0 z-2 w-full h-full py-6 px-9  hover:bg-black/30 hover:text-white/70 transition-all duration-300 ease-in select-none'>
                                    <h3 className='font-bold text-4xl transition duration-300'>{style.title}</h3>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home