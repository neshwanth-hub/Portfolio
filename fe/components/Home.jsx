
import '/src/assets/img1.jpg'; // Assuming you have an image in the assets folder

import '../src/global.css'; // Assuming you have a CSS file for global styles

import { useTypewriter } from 'react-simple-typewriter';
import  "../src/assets/Neshwanth_resume.pdf"; // Adjust the path to your resume file


const Src = "src/assets/img1.jpg";

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
    <div className="home-outer">
      <div className="home-inner">
        {/* Left Content */}
        <div className="home-left">
          <h2 className="home-name">
            I am, <b className="home-name-highlight">Neshwanth Reddy K</b>
          </h2>
          <h1 className="home-stack">
            {Typewriter} <b>|</b>
          </h1>
          <p className="home-desc">
            A passionate MERN stack developer with expertise in Tailwind CSS, crafting seamless web experiences using modern technologies like React, Next.js, Node.js, and MongoDB. My journey is fueled by curiosity and a drive to build innovative solutions that make an impact.
          </p>
          <div className="home-actions">
            <button className="but home-contact-btn">
              Contact Me
            </button>
            <a download="Neshwanth_resume.pdf" href="../src/assets/Neshwanth_resume.pdf">
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
              src={Src}
              alt="Neshwanth Reddy K"
              className="home-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
  );

  // return (
    
    
  //   <div
  //     style={{ width: '100%', zIndex: 10, marginLeft:'5vw', marginTop: '10vh' }}
  //     className="flex flex-col items-center shade justify-center min-h-screen bg-gradient-to-r from-purple-100 via-blue-100 to-green-100"
  //   >
      
  //     <div id='home'
  //       className="margin3 grid-cols-2"
  //       style={{
  //         width: '200%',
  //         maxWidth: 1200,
  //         display: 'flex',
  //         minHeight: '25vh',
  //         left:0,
  //         minWidth: "100%",
  //         // overflow: 'hidden',
  //         zIndex: -1,
  //         alignItems: 'center',
  //       }}
  //     >
  //       {/* Left Content */}
  //       <div
  //         className="grad left grad2"
  //         style={{
  //           flex: 1,
  //           boxShadow: '10px 30px 20px 30px rgba(116, 114, 114, 0.2)',
  //           minWidth: 0,
  //           width: '100%',
  //           padding: '2rem 1.5rem',
  //           display: 'flex',
  //           // left: 0,
  //           flexDirection: 'column',
  //           justifyContent: 'center',
  //           borderRadius: '20px',
  //         border: '5px solid #ccc',
  //           height: '35em',
  //         }}
  //       >
  //         <h2 style={{ display: 'flex', alignItems: 'left', fontSize: '2rem',marginTop:'1rem', marginBottom: '1rem' }}>
  //           I am ,
  //           <b style={{ color: 'red', fontWeight: 900, marginLeft: 8 }}>Neshwanth Reddy K</b>
  //         </h2>
  //         <h1 className="stack" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
  //           {Typewriter} <b>|</b>
  //         </h1>
          
  //         <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: '#ff556' }}>
  //           A passionate MERN stack developer with expertise in Tailwind CSS, crafting seamless web experiences using modern technologies like React, Next.js, Node.js, and MongoDB. My journey is fueled by curiosity and a drive to build innovative solutions that make an impact.
  //         </p>
  //         <div style={{flex:2,marginLeft:"5vw"}} className="mt-6  flex gap-4">
            
  //           <button style={{marginBottom:'4em',height:'3.1rem', textAlign:'center', fontSize:'18px', fontFamily:'"Harlow Solid Italic"'}} className="but ">
  //             Contact Me
  //           </button>
            
  //           <a download={"Neshwanth_resume.pdf"} href="../src/assets/Neshwanth_resume.pdf">
  //           <button  style={{marginLeft:"1vw",width:"16rem", opacity:100, fontSize:'18px' }} className="but ">
  //             Download Resume
  //           </button>
  //           </a>
            
  //         </div>
  //       </div>
  //       {/* Right Content */}
  //       <div
  //         className="grad1 right card shadow"
  //         style={{
  //           flex: 1,
  //           width: '30%',
  //           right: 10,
            
  //           left: 1,
  //           // minWidth: 0,
  //           display: 'flex',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           height: '100%',
  //         }}
  //       >
  //         <div style={{ position: 'relative'}} 
  //         className=" shadow"
  //         >
  //           <img 
  //             // onMouseOver={Style}
  //             src={Src}
  //             alt="Neshwanth Reddy K"
  //             height={280}
  //             width={220}
  //             style={{left:'2rem'}}
              
  //             className="  pro"
             
  //           />
                        
  //         </div>
  //       </div>
  //     </div>
  //   </div>
    
   
  // );
};





export default Home;