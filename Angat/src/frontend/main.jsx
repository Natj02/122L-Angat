import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Landing from './Landing.jsx'
import Register from './register.jsx'
import AboutUs from './AboutUs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Landing /> */}
    <Register />
  </StrictMode>,
)
