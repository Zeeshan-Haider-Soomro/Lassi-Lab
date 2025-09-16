import React from 'react'
import Home from './pages/Home'
import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTopButton from './components/ScrollToTopButton'
import ScrollToTop from './components/ScrollToTop'
import OfferPopup from './components/OfferPopup'

const App = () => {
  return (
    <div>
         {/* ✅ ScrollToTop hamesha Router ke andar rakho */}
      <ScrollToTop />
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
       {/* ✅ WhatsApp floating button (shown on every page) */}
      <WhatsAppButton />
       <ScrollToTopButton /> {/* ✅ Scroll to top */}
        <OfferPopup /> {/* 👈 Last me add karo */}
    </div>
  )
}

export default App