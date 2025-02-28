import { useState } from 'react'

function LandingCard(props){
    return (
        <>
        <div className='flex flex-col w-full max-w-full md:max-w-1/4 max-h-80 bg-base-300 rounded'>
                <img className="object-cover w-full h-full min-h-0 min-w-0 max-h-40 rounded-t" src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="" />
                <div className='flex flex-col p-4'>
                  <div className='font-bold text-lg md:text-xl overflow-hidden text-ellipsis line-clamp-3'>
                  {props.title}
                  </div>
                  <div className="font-bold text-sm mt-2">
                    {props.date}
                  </div>
                </div>
              </div>
        </>)
}

export default LandingCard