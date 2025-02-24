import { useState } from 'react'
import angatLogo from '../assets/img/logo.svg'
import banner from '../assets/img/banner.png'
import './components/header'
import Header from './components/header'
import Footer from './components/footer'
// import './App.css'

function Landing() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className="w-full">
        {/* Navbar */}
        <Header />
        {/* Hero Banner */}
        <div
          class="hero min-h-160 justify-items-start items-end "
          style={{
            backgroundImage: `url(${banner})`,
          }}>
          <div class="hero-overlay"></div>
          <div class="hero-content text-base-100">
            <div class="max-w-2xl">
              <h1 class="mb-5 text-8xl font-bold ">Angat Cembo</h1>
              <p class="mb-5">
                insert info
              </p>
            </div>
          </div>
        </div>
        {/* //////////////////////// */}
        <div className='w-full p-16 bg-base-200   shadow-sm'>
          <div className="m-auto    w-xl">
            <div className="text-center text-4xl font-bold">
              Insert Title
            </div>
            <div className='flex flex-row mt-8 gap-8 justify-center'>
              <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="" />
              <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="" />  
            </div>
          </div>
        </div>

        <div className='w-full p-16 bg-secondary shadow-sm'>
          <div className="m-auto    w-xl">
            <div className="text-center text-4xl font-bold">
              Insert Title
            </div>
            <div className='flex flex-row mt-8 gap-8 justify-center'>
              <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="" />
              <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="" />  
            </div>
          </div>
        </div>
        

        <Footer />
      </div>

          

    </>
  )
}

export default Landing
