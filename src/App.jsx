import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Mission from './components/Mission'
import Products from './components/Products'
import JoinUs from './components/JoinUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const topRef = useRef(null)
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div id="home" ref={topRef} className="font-[Manrope] bg-[#FFF8F0] text-[#5A3E2B]">
      <Navbar />
      <Hero onBuy={() => scrollTo('#products')} onJoin={() => scrollTo('#join')} onContact={() => scrollTo('#contact')} />
      <Story />
      <Mission />
      <Products />
      <JoinUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
