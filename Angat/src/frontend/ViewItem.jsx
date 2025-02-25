import { useState } from 'react'
import angatLogo from '../assets/img/logo.svg'
import banner from '../assets/img/banner.png'
import './components/header'
import Header from './components/header'
import Footer from './components/footer'
import Project from './components/project'

function ViewItem() {

  return (
    <> 
      <div className="w-full  bg-base-300">
        {/* Navbar */}
        <Header />
            <div className="w-4/5 px-16 py-10 mx-auto bg-base-200">
                <img src={banner} alt="" />
                <div className="w-full pt-4">
                    <div className="text-sm">
                        January 1, 2020
                    </div> 
                    <div className="text-4xl">
                        Title
                    </div>
                    <div className='text-sm pt-4'>
                        dsdlkkfjsdi
                    </div>
                </div>
            </div>
        <Footer />
      </div>

          

    </>
  )
}

export default ViewItem
