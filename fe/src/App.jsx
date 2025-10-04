
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
      
      <Home  />
      <About  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" />
      <Experiance />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <GitLinkedIn classname='row-reverse' />
        
        </>
  )
}

export default App
