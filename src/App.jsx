import './App.css'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import About from './components/pages/about'
import CallToAction from './components/pages/callToAction'
import Header from './components/pages/header'
import Prices from './components/pages/prices'
import Projects from './components/pages/projects'
import { useState } from 'react'


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      
   <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
   <Header />
   <Projects isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
   <About/>
   <CallToAction />
   <Prices />
  <Footer />
     
    </>
  )
}

export default App
