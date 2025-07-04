
import './App.css'
import GitLinkedIn from '../components/GitLinkedIn'
// import GitLinkedin from '../components/Navbar'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'

import Contact from '../components/Contact'
import Experiance from '../components/Experiance'
import Projects from '../components/Projects'

import Footer from '../components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar  />
      
      <Home/>
      <About data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" />
      
      <Experiance />
      <Projects />
     
      <Contact />
      {/* <Footer /> */}
      <Footer />
      {/* <Footer /> */}
      <GitLinkedIn classnam='row-reverse' />
        
        </>
  )
}

export default App
