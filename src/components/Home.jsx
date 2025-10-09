
import img from './../assets/img1.jpg'; // Assuming you have an image in the assets folder

import './../global.css'; // Assuming you have a CSS file for global styles
import './../pro.css'
import { useTypewriter } from 'react-simple-typewriter';
import './../index.css';
import resume from './../assets/Neshwanth_resume.pdf'; // Adjust the path to your resume file


const Home = () => {
  // const resume = "../src/assets/Neshwanth_resume.pdf";
  
  // Typewriter effect for the text
  const [Typewriter] = useTypewriter({
    words: ['Full Stack Developer', 'JavaScript Developer', 'MERN Stack Developer'],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 50,
    // delaySpeed: 1000,
  })
  return ( 
    (
    <div id='home' className="home-outer">
      <div className="home-inner">
        {/* Left Content */}
        <div className="home-left">
          <h2 className="home-name">
            I am, <b className="home-name-highlight hover:text-rose-300">Neshwanth Reddy K</b>
          </h2>
          <h1 className="home-stack">
            {Typewriter} <b>|</b>
          </h1>
          <p className="home-desc dark:md:hover:bg-fuchsia-600">
            A passionate MERN stack developer with expertise in Tailwind CSS, crafting seamless web experiences using modern technologies like React, Next.js, Node.js, and MongoDB. My journey is fueled by curiosity and a drive to build innovative solutions that make an impact.
          </p>
          <div className="home-actions">
            <button  className="but home-contact-btn"><a href="#contact">
              Contact Me </a>
            </button>
            <a download="Neshwanth_resume.pdf" href={resume}>
              <button className="but home-resume-btn">
                Download Resume
              </button>
            </a>
          </div>
        </div>
        {/* Right Content */}
        <div className="home-right">
          <div className="home-img-wrapper">
            <img
              src={img}
              alt="Neshwanth Reddy K"
              className="home-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
  );
};





export default Home;