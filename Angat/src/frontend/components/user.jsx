import { useState } from 'react'
import angatLogo from '../../assets/img/logo.svg'
import banner from '../../assets/img/banner.png'

function User(props){
    return (
        <>
        <div className='flex flex-col md:flex-row gap-4 w-full items-center bg-base-300 p-3 rounded-lg'>
                        <div className='flex flex-col items-center md:items-start w-full'>
                            <div className='font-bold text-2xl'>
                                {props.username}
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className="font-bold text-sm">
                                {props.email}
                                </div>
                                <div className="font-bold text-sm">
                                    {props.password}
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className='btn btn-primary'>
                                Edit
                            </div>
                            <div className='btn btn-primary'>
                                Delete
                            </div>
                        </div>
                    </div>
        </>)
}

export default User