import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Landing from './Landing.jsx'
import Register from './register.jsx'
import AboutUs from './AboutUs.jsx'
import Login from './login.jsx'
import ForgotPass from './forgotPass.jsx'
import CreateNewPass from './CreateNewPass.jsx'
import Linkages from './linkages.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Landing /> */}
    {/* <Register /> */}
    {/* <Login/> */}
    {/* <ForgotPass/> */}
    {/* <CreateNewPass/> */}
    {/* <AboutUs/> */}
    <Linkages/>
  </StrictMode>,
)
