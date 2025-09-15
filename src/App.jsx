import React from 'react'
import Home from './pages/Home'
import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTopButton from './components/ScrollToTopButton'

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
       {/* ✅ WhatsApp floating button (shown on every page) */}
      <WhatsAppButton />
       <ScrollToTopButton /> {/* ✅ Scroll to top */}
    </div>
  )
}

export default App