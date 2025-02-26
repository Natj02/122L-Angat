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
import SuccessPage from './successPage.jsx'
import Projects from './Projects.jsx'
import ViewItem from './ViewItem.jsx'
import PendingProjects from './PendingProjects.jsx'
import AddNewsProjects from './addNewsProject.jsx'
import Base from './components/Base.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Base>
      <Landing />
      {/* <AboutUs/> */}
      {/* <ManageUsers/> */}
      {/* <Linkages/> */}
      {/* <PendingNews/> */}
      
      {/* <ViewItem /> */}
      {/* <Projects /> */}
      {/* <PendingProjects /> */}
      {/* <News /> */}
      {/* <AddNewsProjects/> */}
    </Base>
    
    {/* <Register /> */}
    {/* <Login/> */}
    {/* <ForgotPass/> */}
    {/* <CreateNewPass/> */}
    {/* <SuccessPage type="passwordChanged"/> */}
  </StrictMode>,
)
