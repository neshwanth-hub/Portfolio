
import './App.css'
import GitLinkedIn from '../components/GitLinkedIn'
// import GitLinkedin from '../components/Navbar'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'

import Contact from '../components/Contact'
import Experiance from '../components/Experiance'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

import Footer from '../components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar  />
      
      <Home id='home' />
      <About id='about' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" />
      
      <Experiance />
      <Projects id="projects" />
      <Skills />
      <Contact />
      {/* <Footer /> */}
      <Footer />
      {/* <Footer /> */}
      <GitLinkedIn classname='row-reverse' />
        
        </>
  )
}

export default App
