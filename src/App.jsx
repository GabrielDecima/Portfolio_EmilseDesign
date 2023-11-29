import './App.css'
import Navbar from './components/navbar/navbar'
import About from './components/pages/about'
import CallToAction from './components/pages/callToAction'
import Header from './components/pages/header'
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
  
     
    </>
  )
}

export default App
