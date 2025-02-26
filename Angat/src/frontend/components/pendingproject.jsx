import { useState } from 'react'
import angatLogo from '../../assets/img/logo.svg'
import banner from '../../assets/img/banner.png'

function PendingProject(props){
    return (
        <>
                <div className='flex flex-col md:flex-row gap-4 w-full items-center bg-base-300 p-3 rounded-lg'>
                        <img className='object-cover w-full h-full   min-h-0 min-w-0 rounded-lg
                        max-h-64 md:max-h-32
                        max-w-none md:max-w-48' src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="" />
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
                        <div className="flex flex-row gap-2 w-full md:w-auto">
                            <div className='btn btn-primary grow md:grow-0'>
                                Approve
                            </div>
                            <div className='btn btn-primary grow md:grow-0'>
                                Reject
                            </div>
                        </div>
                    </div>
        </>)
}

export default PendingProject