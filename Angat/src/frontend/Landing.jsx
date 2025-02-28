import { useState } from 'react'
import angatLogo from '../assets/img/logo.svg'
import banner from '../assets/img/banner.png'
import './components/header'
import Header from './components/header'
import Footer from './components/footer'
import LandingCard from './components/LandingCard.jsx'
// import './App.css'

function Landing() {
  const [count, setCount] = useState(0)

  return (
    <> 
        {/* Hero Banner */}
        <div
          class="hero min-h-160 justify-items-start items-end "
          style={{
            backgroundImage: `url(${banner})`,
          }}>
          <div class="hero-overlay"></div>
          <div class="hero-content text-base-100">
            <div class="max-w-4xl">
              <h1 class="mb-5 text-8xl font-bold ">Angat Cembo</h1>
              <p class="mb-5">
              We, the Angat Cembo Community Inc., are a non-government organization based in Cembo, Taguig City that aims to help, serve, and uplift our fellow people by empowering them towards becoming active citizens of the Cembo community advocating for volunteerism and social welfare.
              </p>
            </div>
          </div>
        </div>
        {/* //////////////////////// */}
        <div className='w-full p-8 md:p-16 bg-base-200 shadow-sm'>
          <div className="m-auto w-full lg:w-7/10">
            <div className="text-center text-4xl font-bold">
              Recent Projects
            </div>
            <div className='flex flex-col md:flex-row mt-8 gap-8 justify-center'> 
              <LandingCard 
                title="Neglected cellphone charger seen as possible trigger of Makati fire, 1 dead"
                date="date"
                />
              <LandingCard 
                title="Neglected cellphone charger seen as possible trigger of Makati fire, 1 dead"
                date="date"
                />
                <LandingCard 
                title="Neglected cellphone charger seen as possible trigger of Makati fire, 1 dead"
                date="date"
                />
                <LandingCard 
                title="Neglected cellphone charger seen as possible trigger of Makati fire, 1 dead"
                date="date"
                />
            </div>
          </div>
        </div>

        <div className='w-full p-8 md:p-16 bg-secondary shadow-sm'>
          <div className="m-auto w-full lg:w-7/10">
            <div className="text-center text-4xl font-bold text-base-100">
              Recent Projects
            </div>
            <div className='flex flex-col md:flex-row mt-8 gap-8 justify-center'> 
              <LandingCard 
                title="Neglected cellphone charger seen as possible trigger of Makati fire, 1 dead"
                date="date"
                />
              <LandingCard 
                title="Neglected cellphone charger seen as possible trigger of Makati fire, 1 dead"
                date="date"
                />
                <LandingCard 
                title="Neglected cellphone charger seen as possible trigger of Makati fire, 1 dead"
                date="date"
                />
                <LandingCard 
                title="Neglected cellphone charger seen as possible trigger of Makati fire, 1 dead"
                date="date"
                />
            </div>
          </div>
        </div>
    </>
  )
}

export default Landing
