import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { request } from '../../api'
import { Toaster, toast } from 'sonner'

import { MdOutlineNavigateNext } from "react-icons/md";
import Stars from '../../components/starsForProduct/Stars';
import Colors from '../../components/colors/Colors';
import Sizes from '../../components/sizes/Sizes';
import Counter from '../../components/counter/Counter';

const Detail = () => {
    const {id} = useParams()
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchSingleProduct = async () => {
            try {
                setLoading(true)
                const response = await request.get(`/product/${id}`)
                setProduct(response.data)
                console.log(response.data)
            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }

        fetchSingleProduct()
    }, [])

  return (
    <div className='w-full min-h-screen font-[Inter] '>
        <div className='container max-w-7xl mx-auto'>
            <div className='flex flex-col gap-9 mt-6'>
                <div className='flex items-center gap-1 text-base text-black/40 '>
                    <span>Home</span>
                    <span><MdOutlineNavigateNext/></span>
                    <span>Shop</span>
                    <span><MdOutlineNavigateNext/></span>
                    <span>{product?.category}</span>
                    <span><MdOutlineNavigateNext/></span>
                    <span className='text-black' >{product?.brand}</span>
                </div>
                <div className='flex items-start gap-10'>
                    <div className='flex items-start gap-4 shrink-0'>
                        <div className={`grid grid-cols-1 gap-[14px] grid-rows-${product?.images?.length}`}>
                            {
                                product?.images?.map((img, inx) => (
                                    <div key={inx} className='w-[152px] h-[167px] bg-[#F0EEED] rounded-[20px] overflow-hidden border border-black/30'>
                                    <img src={img} alt="" className='object-contain' />
                                </div>
                                ))
                            }
                        </div>
                        <div className=' overflow-hidden bg-[#F0EEED] rounded-[20px] border border-black/30 '>
                            <img src={product?.thumbnail} alt="" className='h-[540px] w-[444px] ' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-[14px]'>
                                <h2 className='font-[Archivo_Black] font-bold text-[40px] '>One Life Graphic T-shirt</h2>
                                <div className='flex items-center gap-4'>
                                    {
                                        product && 
                                        <Stars rating={product?.rating}/>
                                    }
                                    <div className='flex items-center'>
                                        <p className='text-base text-black'>{product?.rating} / </p>
                                        <p className='text-base text-black/30'>5</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3 text-[32px] font-bold'>
                                    <p className='text-black'>${product?.price}</p>
                                    <p className='text-black/40 line-through'>${Math.round((product?.price + (product?.price * 20 / 100)))}</p>
                                    <p className='text-base py-[6px] px-3 rounded-[62px] text-[#FF3333] bg-[#FF3333]/10 '>-{product?.discountPercentage}%</p>
                                </div>
                            </div>
                            <p className='text-base text-black/60'>
                                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                            </p>
                        </div>
                        <div className=' flex flex-col '>
                            <div className='border-t border-black/10 py-6 flex flex-col gap-4'>
                                <Colors/>
                            </div>
                            <div className='border-t border-black/10 py-6 flex flex-col gap-4'>
                                <Sizes/>
                            </div>
                            <div className='border-t border-black/10 py-6 grid grid-cols-3 gap-5 '>
                                <Counter/>
                                <button className='col-span-2 bg-black text-white rounded-[62px] cursor-pointer transition-all duration-300 hover:opacity-80 '>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detail