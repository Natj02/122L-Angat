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
      <div className="w-full">
        <Header />

        
        
        <Footer />
      </div>

          

    </>
  )
}

export default Linkages
