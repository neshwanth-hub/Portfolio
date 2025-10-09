// import React from 'react';
import { motion as Motion } from 'framer-motion';
// import '../src/global.css';
// import '../src/index.css';
import Skills from './Skills';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// import "../src/pro.css"
// import { FaBeer } from 'react-icons/fa';
// import { SiComma } from "react-icons/si";


function About() {
  return (
    <div id='about' className="about-outer">
      <div className="about-inner">
        {/* Left Column - About Me */}
        <div className="about-title">
          About Me
        </div>
        {/* Right Column - Description */}
        <div className="about-desc">
          <p>
            Enrolled in Entri Elevate as a{' '}
            <b className="about-highlight-blue">MERN stack developer</b>, where I'm building a solid foundation in programming and
            problem-solving. My education is equipping me with the technical
            knowledge and analytical skills necessary to excel in the fast-paced
            world of software development.
          </p>
          <p className="about-freelance">
            With hands-on experience in freelancing, I've worked on projects like the{' '}
            <b className="about-highlight-blue">Photography Website</b> project, focusing on real-time frontend development using Recoil. My
            work spans both frontend and backend technologies, including{' '}
            <b className="about-highlight-green">React, Express.js</b>, and more. Whether working independently or collaborating in teams,
            I've consistently delivered robust and user-friendly solutions.
          </p>
        </div>
      </div>

      {/* Internship Experience Section */}
      <div className="about-internship">
        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="about-internship-title"
        >
          Internship Experience
        </Motion.h2>

        <Motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="about-internship-desc"
        >
          I had the opportunity to intern as a{" "}
          <span className="about-highlight-blue">Full Stack Developer</span>{" "}
          at{" "}
          <span className="about-highlight-lightblue">Entri Elevate Institute</span>
          , where I worked on building and optimizing web applications. During
          my internship, I:
        </Motion.p>

        <ul className="about-list">
          <Motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="about-list-item about-list-sky"
          >
            Developed and maintained frontend features using{" "}
            <span className="about-highlight-lightblue">React.js</span> and{" "}
            <span className="about-highlight-lightblue">Tailwind CSS</span>.
          </Motion.li>

          <Motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="about-list-item about-list-pink"
          >
            Implemented RESTful APIs using{" "}
            <span className="about-highlight-lightblue">Express.js</span> and{" "}
            <span className="about-highlight-lightblue">MongoDB</span>.
          </Motion.li>

          <Motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="about-list-item about-list-blue"
          >
            Gained experience with state management using{" "}
            <span className="about-highlight-sky">Recoil</span> for
            smoother user interactions.
          </Motion.li>
        </ul>
      </div>

      {/* Skills Component */}
      <div className="about-skills">
        <Skills />
      </div>
    </div>
  );
}

export default About;
