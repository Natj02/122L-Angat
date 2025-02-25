import { useState } from 'react'
import angatLogo from '../assets/img/logo.svg'
import banner from '../assets/img/banner.png'
import './components/header'
import Header from './components/header'
import Footer from './components/footer'
import Project from './components/project'

function Projects() {

  return (
    <> 
      <div className="w-full  bg-base-300">
        {/* Navbar */}
        <Header />
            <div className="w-7/10 px-16 py-10 mx-auto bg-base-200">
                <div className="flex flex-row justify-between">
                    <div className="text-3xl font-bold">
                        Projects
                    </div>
                    <div className='flex gap-2'>
                        <div className='btn btn-primary'>
                            Add
                        </div>
                        <div className='btn btn-primary'>
                            Pending
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col pt-4 gap-4">
                    <Project 
                    title='Project Title'
                    date='January 3'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. 
                            '/>

                    <Project 
                    title='Project Title'
                    date='January 3'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. 
                            '/>         
                    
                    
                </div>
             
            </div>
        <Footer />
      </div>

          

    </>
  )
}

export default Projects
