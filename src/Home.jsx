import React from 'react'
import Headers from './components/Headers'
import Hero from './components/Hero'
import Catogory from './components/Category'
import MostSeached from './components/MostSeached'
import InfoSection from './components/infoSection'
import Footer from './components/Footer'
function Home() {
  return (
    <div >
     {/* Headers */}
      <Headers />
     {/* Hero */}
     <Hero />
     {/* Category */}
     <Catogory />
      {/* MostSearched */}
      <MostSeached />
      
      <InfoSection />
      <Footer  />
    </div>
  )
}

export default Home