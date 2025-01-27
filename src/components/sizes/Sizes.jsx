import React, { useState } from 'react'

const Sizes = () => {
    const [selectedSize, setSize] = useState(null)
    const sizes = ["Small", "Medium", "Large", "X-Large"]
  return (
    <div className='flex items-center gap-3'>
        {
            sizes.map((size, inx) => (
                <span onClick={() => setSize(size)} key={inx} className={`font-[Inter] text-base py-3 px-6 rounded-[62px] select-none cursor-pointer ${selectedSize === size ? 'bg-black text-white' : 'text-black/60 bg-[#F0F0F0]'}`}>{size}</span>
            ))
        }
    </div>
  )
}

export default Sizes