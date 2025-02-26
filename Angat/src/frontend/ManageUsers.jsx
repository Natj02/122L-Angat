import { useState } from 'react'
import angatLogo from '../assets/img/logo.svg'
import banner from '../assets/img/banner.png'
import './components/header'
import Header from './components/header'
import Footer from './components/footer'
import User from './components/user'

function ManageUsers() {
  const [count, setCount] = useState(0)

  return (
    <> 
            <div className=" w-full lg:w-7/10 px-4 sm:px-16 py-10 mx-auto bg-base-200">
                <div className="flex flex-row justify-between ">
                    <div className="text-3xl font-bold">
                        Manage Users
                    </div>
                </div>
                
                <div className="flex flex-col pt-4 gap-4">
                    <User 
                    username="username"
                    email="email"
                    password="password"/>
                    
                </div>
             
            </div>


          

    </>
  )
}

export default ManageUsers
