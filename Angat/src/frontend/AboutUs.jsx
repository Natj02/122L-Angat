import { useState } from 'react'
import angatLogo from '../assets/img/logo.svg'
import banner from '../assets/img/banner.png'
import './components/header'
import Header from './components/header'
import Footer from './components/footer'

function AboutUs() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className="w-full">
        {/* Navbar */}
        <Header />
        {/* Hero Banner */}
        <div className="flex flex-col md:flex-row">
          <div
            class="hero w-full md:w-1/3 min-h-160 justify-items-start items-end "
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
          <div
            class="hero w-full md:w-1/3 min-h-160 justify-items-start items-end "
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
          <div
            class="hero w-full md:w-1/3 min-h-160 justify-items-start items-end "
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
        </div>
        
        <div className='w-full p-14 bg-base-200 shadow-sm'>
          <div className="m-auto w-7/10">
            <div className="text-lg text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Morbi fermentum consectetur vestibulum. Etiam elementum porttitor mi eu rutrum. Duis ut varius ex, at egestas augue. Aenean dui ligula, mattis a mi eget, egestas dictum velit. Aliquam a arcu nec tortor imperdiet efficitur. Aenean ullamcorper nibh pharetra, hendrerit eros sit amet, venenatis sem. Integer laoreet nulla sem, vel vestibulum justo elementum quis. Suspendisse at molestie est, elementum aliquet est. Aenean enim lectus, maximus quis libero in, sagittis vulputate ante. Nulla pulvinar interdum tortor pulvinar dapibus. Nullam commodo hendrerit luctus. Suspendisse lacinia ligula ultricies tortor mollis maximus. Morbi ultrices lectus sit amet risus pretium, ac dignissim justo molestie.
            </div>
           
          </div>
        </div>

        <div className='w-full p-14 bg-secondary shadow-sm'>
          <div className="m-auto w-7/10">
            <div className='flex flex-col-reverse lg:flex-row justify-between'>
              <div>
                <div className='text-2xl font-bold'>
                  Our Vision
                </div>
                <div className='text-3xl font-bold mt-6 max-w-2xl'>
                  j;slfkjds;kljf
                </div>
              </div>
              <div>
                <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="" />
              </div>
            </div>
          </div>

          <div className="m-auto w-7/10">
            <div className='flex flex-col lg:flex-row  justify-between'>
              <div>
                <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="" />
              </div>
              <div>
                <div className='text-2xl font-bold'>
                  Our Vision
                </div>
                <div className='text-3xl font-bold mt-6 max-w-2xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Morbi fermentum consectetur vestibulum. Etiam elementum porttitor mi eu rutrum. Duis ut varius ex, at egestas augue. Aenean dui ligula, mattis a mi eget, egestas dictum velit. Aliquam a arcu nec tortor imperdiet efficitur. 
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

export default AboutUs
