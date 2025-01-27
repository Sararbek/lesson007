import React from 'react'
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

const Stars = ({rating}) => {

    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 !== 0
    const emtyStars = 5 - fullStars - (halfStar ? 1 : 0)

  return (
    <ul className='flex items-center gap-2'>
        {
           Array(fullStars).fill().map((_, inx) => (
            <li key={inx}>
                <IoStar className='text-[#FFC633] text-2xl cursor-pointer'/>
            </li>
           )) 
        }
        {
            halfStar && (
                <li>
                    <IoStarHalf className=' text-[#FFC633] cursor-pointer text-2xl ' />
                </li>
            )
        }
        {
            Array(emtyStars)?.fill().map((_, inx) => (
                <li key={inx}>
                    <IoStarOutline className=' text-[#FFC633] cursor-pointer text-2xl ' />
                </li>
            ))
        }
    </ul>
  )
}

export default Stars