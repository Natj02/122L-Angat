import { useState } from 'react'
import Header from './header'
import Footer from './footer'

function Base(props) {

  return (
    <> 
      <div className="w-full min-h-screen flex flex-col">
        <Header />
        <div className="flex grow flex-col">
          {props.children}
        </div>
            
        <Footer />
      </div>

          

    </>
  )
}

export default Base
