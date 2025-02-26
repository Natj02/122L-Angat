import { useState } from 'react'
import angatLogo from '../../assets/img/logo.svg'
import banner from '../../assets/img/banner.png'

function NewsItem(props){
    return (
        <>
        <div className='flex flex-row gap-4 w-full max-h-32 bg-base-300 p-3 rounded-lg'>
                        <img className='object-cover w-full h-full min-h-0 min-w-0 rounded-lg
                        max-h-24 
                        max-w-24' src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="" />
                        <div className='flex flex-col w-full justify-center'>
                            <div className='font-bold text-lg md:text-2xl overflow-hidden text-ellipsis line-clamp-2 md:line-clamp-2 
                            max-h-18
                            '>
                                {props.title}
                            </div>
                            <div className="font-bold text-sm">
                                {props.date}
                            </div>
                        </div>
                    </div>
        </>)
}

export default NewsItem