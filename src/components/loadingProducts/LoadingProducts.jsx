import React from 'react'
import {Skeleton} from '@mui/material';

const LoadingProducts = ({loadingCount}) => {
  return (
    <div className='grid grid-cols-4 gap-y-6 gap-x-5'>
    {
        Array(loadingCount).fill().map((_, inx) => (
            <div key={inx} className='rounded-[20px]'>
                <Skeleton animation={'wave'} variant='rectangular' height={300} width={'100%'} sx={{borderRadius: '20px'}}/>
                <div className='flex flex-col gap-1 py-4'>
                    <Skeleton animation={'wave'} variant='text' height={28} width={'80%'}/>
                    <Skeleton animation={'wave'} variant='text' height={28} width={'80%'}/>
                    <Skeleton animation={'wave'} variant='text' height={28} width={'80%'}/>
                </div>
            </div>
        ))
    }
    </div>
  )
}

export default LoadingProducts