import { useState } from 'react'
import angatLogo from '../assets/img/logo.svg'
import banner from '../assets/img/banner.png'
import './components/header'
import Header from './components/header'
import Footer from './components/footer'

function News() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className="w-full  bg-base-300">
        {/* Navbar */}
        <Header />
            <div className="w-5xl px-16 py-10 mx-auto bg-base-200">
                <div className="flex flex-row justify-between">
                    <div className="text-3xl font-bold">
                        News
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
                    <div className='flex flex-row gap-4 w-full'>
                        <div className="object-cover">
                            <img className='max-h-none max-w-none w-32 h-32' src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="" />
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='font-bold text-2xl'>
                                News Title
                            </div>
                            <div className="font-bold text-sm">
                                January 3
                            </div>
                            <div className="text-sm overflow-hidden text-ellipsis line-clamp-3 h-16">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum.   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. 
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

export default News
