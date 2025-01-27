import { selectClasses } from '@mui/material';
import React, { useState } from 'react'

import { FaCheck } from "react-icons/fa6";

const Colors = () => {
    const [selectedColor, setColor] = useState(null)
    const colors = ["#4F4631", "#314F4A", "#31344F"]
  return (
    <div className='flex items-center gap-4'>
        {
            colors.map((color, inx) => (
                <div onClick={() => setColor(color)} key={inx} className={`w-9 h-9 rounded-full cursor-pointer flex items-center justify-center`} style={{ backgroundColor: color}}>
                    {
                        selectedColor === color && <FaCheck className='text-white'/>
                    }
                </div>
            ))
        }
    </div>
  )
}

export default Colors