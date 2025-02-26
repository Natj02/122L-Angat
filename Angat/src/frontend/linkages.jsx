import { useState } from 'react'
import angatLogo from '../assets/img/logo.svg'
import banner from '../assets/img/banner.png'
import './components/header'
import Header from './components/header'
import Footer from './components/footer'

function Linkages() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <div className='w-full bg-base-300'>

    
         <div className="w-[90%] max-w-6xl mx-auto my-10">
          {/* Three Columns for Partner, Contribute, Volunteer */}
          <div className="grid grid-flow-row lg:grid-flow-col gap-8">
            
            {/* Partner Section */}
            <div className="bg-gray-100 p-6 shadow-md rounded-lg">
              <div className="w-full bg-gray-400 flex items-center justify-center">
                <img src={banner} alt="Contribute" />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center">Partner</h3>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Join us as a partner and help expand our impact.
              </p>
            </div>

            {/* Contribute Section */}
            <div className="bg-gray-100 p-6 shadow-md rounded-lg">
              <div className="w-full bg-gray-400 flex items-center justify-center">
              <img src={banner} alt="Contribute" />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center">Contribute</h3>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Support our cause through contributions and donations.
              </p>
            </div>

            {/* Volunteer Section */}
            <div className="bg-gray-100 p-6 shadow-md rounded-lg">
              <div className="w-full bg-gray-400 flex items-center justify-center">
                <img src={banner} alt="Contribute" />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center">Volunteer</h3>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Be a part of our mission by volunteering your time and skills.
              </p>
            </div>

          </div>

          {/* How to Donate Instructions */}
          <div className="text-left mt-12 px-8">
                <h2 className="mt-4 text-gray-700 space-y-2">
                <strong>
                Lorem ipsum dolor sit amet. Cum blanditiis velit et soluta galisum aut enim possimus nam quae quisquam qui magnam asperiores a rerum omnis. Quo commodi ducimus ea vero consectetur ut odio molestiae est dolore quod in fuga tempora. Et consequatur placeat nam voluptatem provident ut accusantium quia.
                </strong>
                </h2>
            </div>

          {/* Additional Content - Centered */}
            <div className="text-center my-16">
            {/* Donation Header */}
            <h2 className="text-lg font-semibold text-pink-600">Thank you for supporting our cause!</h2>

            {/* Donation Methods Tabs */}
            <div className="flex justify-center mt-4 space-x-4">
                <button className="px-4 py-2 bg-cyan-900 text-white font-semibold rounded-md">
                GCash
                </button>
                <button className="px-4 py-2 border border-primary text-gray-800 font-semibold rounded-md hover:bg-primary bg-base-200">
                Bank Transfer
                </button>
                <button className="px-4 py-2 border border-primary text-gray-800 font-semibold rounded-md hover:bg-primary bg-base-200">
                Lorem Ipsum
                </button>
                <button className="px-4 py-2 border border-primary text-gray-800 font-semibold rounded-md hover:bg-primary bg-base-200">
                Lorem Ipsum
                </button>
            </div>

            

            <div className="divider divider-primary"></div>

            {/* QR Code Section */}
            <div className="flex justify-center">
                <div className="bg-teal-500 p-6 rounded-lg">
                <img src={banner} alt="QR Code" className="w-64 h-64 mx-auto" />
                </div>
            </div>

            {/* How to Donate Instructions */}
            <div className="text-left mt-12 px-8">
                <h3 className="text-xl font-bold text-pink-600 text-center">How to Donate via GCash QR Code</h3>
                <h2 className="mt-4 text-gray-700 space-y-2">
                <strong>
                Lorem ipsum dolor sit amet. Cum blanditiis velit et soluta galisum aut enim possimus nam quae quisquam qui magnam asperiores a rerum omnis. Quo commodi ducimus ea vero consectetur ut odio molestiae est dolore quod in fuga tempora. Et consequatur placeat nam voluptatem provident ut accusantium quia.
                </strong>
                </h2>
            </div>
            </div>

        </div>
        </div>
    </>
  )
}

export default Linkages
