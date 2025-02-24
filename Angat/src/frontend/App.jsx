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
    </>
  )
}

export default App
