import { useState } from 'react'
import angatLogo from '../../assets/img/logo.svg'
import banner from '../../assets/img/banner.png'

function User(props){
    let deleteId = props.username + 'Delete'
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
                            <button className='btn btn-primary' onClick={()=>document.getElementById(props.username).showModal()}>
                                Edit
                            </button>
                            <dialog id={props.username} className="modal">
                            <div className="modal-box bg-base-200">
                                <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Edit User</h3>
                                <div>
                                {props.email}
                                <input type="text" placeholder="Type here" className="input mt-2" value={props.username}/>
                                </div>
                            </div>
                            </dialog>
                            <div className='btn btn-primary' onClick={()=>document.getElementById(deleteId).showModal()}>
                                Delete
                            </div>
                            <dialog id={deleteId} className="modal">
                            <div className="modal-box bg-base-200">
                                <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Delete User</h3>
                                <div>
                                 Are you sure you want to delete user account <span className="font-bold">{props.username}</span>?
                                </div>
                                <div className="flex flex-row gap-2">
                                    <div className='btn btn-primary grow '>
                                        Yes
                                    </div>
                                    <div className='btn btn-primary grow ' onClick={()=>document.getElementById(deleteId).close()}>
                                        No
                                    </div>
                                </div>
                            </div>
                            </dialog>
                        </div>
                    </div>
        </>)
}

export default User