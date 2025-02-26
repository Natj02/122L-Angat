import { useState } from 'react'
import angatLogo from '../assets/img/logo.svg'
import banner from '../assets/img/banner.png'
import './components/header'
import Header from './components/header'
import Footer from './components/footer'
import PendingProject from './components/pendingproject'

function PendingProjects() {
  const [count, setCount] = useState(0)

  return (
    <> 
        <div className="w-full lg:w-7/10 px-4 sm:px-16 py-10 mx-auto bg-base-200">
                <div className="flex flex-row justify-between ">
                    <div className="text-3xl font-bold">
                        Pending Projects
                    </div>
                    <div className='flex gap-2'>
                        <div className='btn btn-primary'>
                           Back
                        </div>

                    </div>
                </div>
                
                <div className="flex flex-col pt-4 gap-4">
                    <PendingProject
                    title="Project Title"
                    date ="date"
                    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Morbi fermentum consectetur vestibulum. Etiam elementum porttitor mi eu rutrum. Duis ut varius ex, at egestas augue. Aenean dui ligula, mattis a mi eget, egestas dictum velit. Aliquam a arcu nec tortor imperdiet efficitur."/>

                    
                    
                    
                </div>
             
            </div>

          

    </>
  )
}

export default PendingProjects
