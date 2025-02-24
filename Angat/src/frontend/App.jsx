import { useState } from 'react'
import angatLogo from '../assets/img/logo.svg'
import banner from '../assets/img/banner.png'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className="w-full">
        {/* Navbar */}
        <div class="navbar px-6 bg-primary shadow-sm sticky top-0 z-50  ">
          <div class="navbar-start">
            {/* Dropdown for mobile */}
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabindex="0"
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li>
                  <a>Parent</a>
                  <ul class="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            {/* ////////////////////////// */}
            <div className='rounded-lg bg-base-100 p-1'>
              <a class="btn btn-ghost text-xl h-16 w-16 p-0">
                  <img src={angatLogo}  alt="Angat Logo"/>
              </a>
            </div>
            
            <label className="input ml-4">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
              <input type="search" className="grow" placeholder="Search" />
            </label>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 text-base-100 font-bold gap-2
            [&_li>a:hover]:bg-secondary
            [&_li>a]:px-4">
              <li><a>Home</a></li>
              <li><a>About Us</a></li>
              <li><a>Linkages</a></li>
              <li><a>Projects</a></li>
              <li><a>News</a></li>
            </ul>
          </div>
          <div class="navbar-end">
            <div className="flex gap-2
            [&_a:hover]:bg-accent [&_a:hover]:text-secondary [&_a:hover]:border-secondary
            [&_a]:bg-secondary [&_a]:text-base-100 [&_a]:border-accent [&_a]:border-3">
              <a class="btn">Sign In</a>
              <a class="btn">Register</a>
            </div>
            
          </div>
        </div>
        {/* //////////////////////// */}
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
        
      </div>

          <footer className="footer bg-primary text-base-content p-6 flex justify-between items-center px-50">
            {/* Left Section - Logo & Description */}
            <div className="flex items-center space-x-4 h-32 w-32 rounded-lg bg-base-100 p-1">
                <img src={angatLogo}  alt="Angat Logo"/>
              
            </div>

            <div className="flex items-center space-x-4">
              <p className="text-sm max-w-md">
                Lorem ipsum dolor sit amet. Cum blanditiis velit et soluta galisum aut enim possimus nam quae quisquam qui magnam asperiores a rerum omnis. Quo commodi ducimus ea vero consectetur ut odio molestiae est dolore quod in fuga tempora. Et consequatur placeat nam voluptatem provident ut accusantium quia.
              </p>
            </div>

            {/* Right Section - Socials */}
            <div className="flex flex-col items-center space-y-2">
            <nav>
              <h6 className="footer-title">Social</h6>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
            </div>
          </footer>
          <footer className="footer footer-center bg-base-300 text-base-content p-4">
            <aside className="text-center text-sm">
              <p>
                Copyright © {new Date().getFullYear()} - Angat Cembo Community Inc. All Rights Reserved. | Powered by SIGMA BOIZ
              </p>
            </aside>
          </footer>

    </>
  )
}

export default App
