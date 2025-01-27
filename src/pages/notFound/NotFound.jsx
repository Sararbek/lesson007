import React from 'react'

const NotFound = () => {
  return (
    <div className=' min-h-[70vh]'>
        <div className='container max-w-7xl mx-auto'>
            <div className='flex flex-col py-20 gap-5 text-center '>
                <p className=' font-[Archivo_Black] font-bold text-black/40 text-5xl'>404</p>
                <p className=' font-[Archivo_Black] font-bold text-black/40 text-5xl capitalize'>(not found)</p>
                <p className='font-[Inter] text-base font-bold text-black/40 tracking-wider ' >The page you are looking for is invalid. Please, check the url.</p>
            </div>
        </div>
    </div>
  )
}

export default NotFound