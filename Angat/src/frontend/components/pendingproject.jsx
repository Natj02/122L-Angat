import { useState } from 'react'
import angatLogo from '../../assets/img/logo.svg'
import banner from '../../assets/img/banner.png'

function PendingProject(props){
    return (
        <>
                    <div className='flex flex-row gap-4 w-full items-center '>
                        <div className="object-cover">
                            <img className='max-h-none max-w-none w-32 h-32' src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="" />
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='font-bold text-2xl'>
                                {props.title}
                            </div>
                            <div className="font-bold text-sm">
                                {props.date}
                            </div>
                            <div className="text-sm overflow-hidden text-ellipsis line-clamp-3 h-16">
                            {props.description}                            
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className='btn btn-primary'>
                                Approve
                            </div>
                            <div className='btn btn-primary'>
                                Reject
                            </div>
                        </div>
                    </div>
        </>)
}

export default PendingProject