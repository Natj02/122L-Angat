import { useState } from 'react'
import angatLogo from '../assets/img/logo.svg'
import banner from '../assets/img/banner.png'
import './components/header'
import Header from './components/header'
import Footer from './components/footer'

function ManageUsers() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className="w-full  bg-base-300">
        {/* Navbar */}
        <Header />
            <div className="w-7/10 px-16 py-10 mx-auto bg-base-200">
                <div className="flex flex-row justify-between ">
                    <div className="text-3xl font-bold">
                        Manage Users
                    </div>
                </div>
                
                <div className="flex flex-col pt-4 gap-4">
                    <div className='flex flex-row gap-4 w-full items-center bg-base-300 p-3'>
                        <div className='flex flex-col w-full'>
                            <div className='font-bold text-2xl'>
                                Username
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className="font-bold text-sm">
                                    Email
                                </div>
                                <div className="font-bold text-sm">
                                    Password
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

                    
                    
                    
                </div>
             
            </div>
        <Footer />
      </div>

          

    </>
  )
}

export default ManageUsers
