// Navigation Component
// import Button from './Button'; // Assuming you have a Button component
// import React from 'react';
// import global from '../global.css'; // Assuming you have a global config file
// import React from 'react';
import './../index.css';
// import '../src/global.css'; // Assuming you have a CSS file for Navbar styles
export default function Navbar() {

 

  return (
    <>
      <nav className="nav mt-[5px]" style={{ left:0, gap: '0', position: 'fixed', height: '10%', zIndex: 1000, top: '0', width: '100%' , boxShadow: '10px 2px 4px rgba(51, 51, 51, 0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
          <div className='margin1 text-[20px]'>Neshwanth Reddy</div>
          </div>
          <div className='margin2' style={{ display: 'flex', gap:'4vw', justifyContent: 'right', color:"red", alignItems: 'center' , justifyItems:'flex-end'}}>
            <div ><a href="#home"  >Home</a></div>
            <div><a className='text-red-200' href="#about">About</a></div>
            <div><a href="#skills">Skills</a></div>
            <div><a href="#projects">Projects</a></div>
            <div><a href="#contact">Contact</a></div>
          </div>
        </div>
      </nav>
      {/* <progress value="0" max="100" style={{top:"10%", left:"0", position:"fixed", zIndex:'1000', width:'100%'}}>100%</progress> */}
    </>
  );
};