import React, { useState } from 'react'

import { FaPlus } from "react-icons/fa6"
import { FaMinus } from "react-icons/fa6"

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='grid grid-cols-3 bg-[#F0F0F0] py-[15px] px-[30px] rounded-[32px] '>
        <button onClick={() => setCount(prev => prev - 1)} className='flex justify-center cursor-pointer items-center'><FaMinus/></button>
        <span className='flex justify-center items-center'>{count}</span>
        <button onClick={() => setCount(prev => prev + 1)} className='flex justify-center cursor-pointer items-center'><FaPlus/></button>
    </div>
  )
}

export default Counter