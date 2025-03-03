import { useState } from 'react'
import banner from '../assets/img/banner.png'
import './components/header'
import donate from '../assets/img/donate.jpg'

function Linkages() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <div className='w-full bg-base-300' class="scroll-smooth">

    
         <div className="w-[90%] max-w-9xl mx-auto my-10">
          {/* Three Columns for Partner, Contribute, Volunteer */}
          <div className="grid grid-flow-row lg:grid-flow-col gap-8">
            
            {/* Partner Section */}
            <div className="bg-gray-100 p-6 shadow-md rounded-lg">
              <div className="w-full bg-gray-400 flex items-center justify-center">
                <img src={banner} alt="Contribute" />
              </div>
              <a class="email-link" href="mailto:angatcembo.org@gmail.com" target = "_blank" rel="noreferrer"><h3 className="text-2xl font-semibold mt-4 text-center">Partner</h3></a>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Join us as a partner and help expand our impact.
              </p>
            </div>

            {/* Contribute Section */}
            <div className="bg-gray-100 p-6 shadow-md rounded-lg">
              <div className="w-full bg-gray-400 flex items-center justify-center">
              <img src={banner} alt="Contribute" />
              </div>
              <a href="#donation"><h3 className="text-2xl font-semibold mt-4 text-center">Contribute</h3></a>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Support our cause through contributions and donations.
              </p>
            </div>

            {/* Volunteer Section */}
            <div className="bg-gray-100 p-6 shadow-md rounded-lg">
              <div className="w-full bg-gray-400 flex items-center justify-center">
                <img src={banner} alt="Contribute" />
              </div>
              <a class="email-link" href="mailto:angatcembo.org@gmail.com" target = "_blank" rel="noreferrer"><h3 className="text-2xl font-semibold mt-4 text-center">Volunteer</h3></a>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Be a part of our mission by volunteering your time and skills.
              </p>
            </div>

          </div>
          {/* How to Donate Instructions */}
          <div className="text-left mt-12 px-8">
                <h2 className="mt-15 text-gray-700 space-y-2 text-xl mb-10 flex justify-center">
                <strong>
                We, the Angat Cembo Community Inc., are a non-government organization based in
                Cembo, Taguig City that aims to help, serve, and uplift our fellow people by empowering them
                towards becoming active citizens of the Cembo community advocating for volunteerism and
                social welfare.           
                </strong>
                </h2>
            </div>

          {/* Additional Content - Centered */}
          
            <div className="text-center my-16">
            {/* Donation Header */}
            <h2 className="text-3xl font-semibold text-pink-600 mb-20 mt-20">Thank you for supporting our cause!</h2>
            

            {/* Donation Methods Tabs */}
            <section id="donation">
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift tabs-lg">
              <span className='tab'></span>
              <input type="radio" name="my_tabs_3" className="tab" aria-label="GCash" defaultChecked/>
              <div className="tab-content bg-base-100 border-base-300 p-6">
              <div className="divider divider-primary"></div>
              <div className="flex justify-center">
                <div className="bg-teal-500 p-6 rounded-lg">
                <img src={donate} alt="QR Code" className="w-100 h-100 mx-auto" />
                </div>
            </div>
            

            {/* How to Donate Instructions */}
            <div className="text-left mt-12 px-8">
                <h3 className="mt-10 text-3xl font-bold text-pink-600 text-center">How to Donate via GCash QR Code</h3>
                <h2 className="mt-15 text-gray-700 space-y-2 flex justify-center text-xl mb-10">
                <strong>
                  <ul>
                    <li>
                    1. Open the GCash app and log in using your PIN or biometric authentication.
                    </li>
                    <li>
                    2. Tap the "QR" icon on the home screen.
                    </li>
                    <li>
                    3. Choose "Scan QR Code" to use your phone's camera to scan the QR code displayed in front.
                    </li>
                    <li>
                    4. Align your phone’s camera with the QR code to scan it.
                    </li>
                    <li>
                    5. Enter the amount you want to pay or donate.
                    </li>
                    <li>
                    6. Tap "Next" and review the transaction details.
                    </li>
                    <li>
                    7. Confirm the payment by tapping "Pay" or "Confirm".
                    </li>
                    <li>
                    8. Receive an SMS confirmation and an in-app receipt for proof of payment.
                    </li>
                    <li>
                    9. Take a screenshot of the receipt if needed for future reference.
                    </li>
                  </ul>                
                </strong>
                </h2>
            </div>
              </div>

              <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 2"  />
              <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

              <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 3" />
              <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
              <span className='tab'></span>
            </div>
            </section>

            


            {/* QR Code Section */}
           
            

            
          </div>

        </div>
        </div>
    </>
  )
}

export default Linkages
