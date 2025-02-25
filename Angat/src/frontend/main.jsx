import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Landing from './Landing.jsx'
import Register from './Register.jsx'
import AboutUs from './AboutUs.jsx'
import Login from './Login.jsx'
import ForgotPass from './ForgotPass.jsx'
import CreateNewPass from './CreateNewPass.jsx'
import Linkages from './linkages.jsx'
import ManageUsers from './ManageUsers.jsx'
import News from './News.jsx'
import PendingNews from './PendingNews.jsx'
<<<<<<< Updated upstream
import SuccessPage from './successPage.jsx'
=======
import Projects from './Projects.jsx'
>>>>>>> Stashed changes

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Landing /> */}
    {/* <Register /> */}
    {/* <Login/> */}
    {/* <ForgotPass/> */}
    {/* <CreateNewPass/> */}
    {/* <AboutUs/> */}
    {/* <ManageUsers/> */}
    {/* <Linkages/> */}
<<<<<<< Updated upstream
    {/* <PendingNews/> */}
    <SuccessPage/>
=======
    <Projects />
    {/* <PendingNews/> */}
>>>>>>> Stashed changes
  </StrictMode>,
)
