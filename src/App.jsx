
import './App.css'
import GitLinkedIn from './components/GitLinkedIn'
// import GitLinkedin from '../components/Navbar'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

import Contact from './components/Contact'
import Experiance from './components/Experiance'
import Projects from './components/Projects'
// import Skills from './components/Skills'

import Footer from './components/Footer'

function App() {
  

  return (
    <>
      
      <Navbar  />
      
      <Home  />
      <About />
      <Experiance />
      <Projects />
      {/* <Skills /> */}
      <Contact />
      <Footer />
      <GitLinkedIn  />
        
        </>
  )
}

export default App
