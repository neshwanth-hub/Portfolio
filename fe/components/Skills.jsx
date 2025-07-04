import '../src/assets/bootstrap.png'; // Assuming you have a CSS file for styles
// import { scale, transform } from 'framer-motion';
import { motion as Motion } from 'framer-motion';
// import AOS from "aos"; // Problematic line
// import "aos/dist/aos.css";
// import { useEffect } from 'react';



export default function Skills() {
// useEffect(() => {
//     AOS.init();
//   }, []);

  const Skill = {
    frontend: {
     fr1: {
        src: "./src/assets/html.png",
      alt: "HTML Logo",
      title: "HTML",
    },
    fr2: {
        src: "./src/assets/css.png",
      alt: "CSS Logo",
      title: "CSS",
    },
    fr3: {
        src: "./src/assets/react.svg",
      alt: "React Logo",
      title: "React",
    },
    fr4: {
        src: "./src/assets/recoil.png",
      alt: "Recoil Logo",
      title: "Recoil",
    },
    fr5: {
        src: "./src/assets/bootstrap.png",
      alt: "Bootstrap Logo",
      title: "Bootstrap",
    },
    fr6: {
        src: "./src/assets/tailwind.png",
      alt: "Tailwind Logo",
      title: "Tailwind CSS",
    },
    fr7: {
        src: "./src/assets/nextjs.png",
      alt: "NEXT JS Logo",
      title: "NEXT JS",
    },
    fr8: {
        src: "./src/assets/framer.png",
      alt: "Framer Motion Logo",
      title: "Framer Motion",
    },
    // fr9: {
    //     src: "./src/assets/framer.png",
    //   alt: "Framer Motion Logo",
    //   title: "Framer Motion",
    // },
    },
backend: {
      // src: "https://nodejs.org/static/images/logo.svg",
      be1: {
        src: "./src/assets/node.svg",
      alt: "NODE JS Logo",
      title: "Node.js",
      } ,
      // be2: {
      //   src: "./src/assets/node.svg",
      // alt: "NODE JS Logo",
      // title: "Node.js",
      // } ,
      be3: {
        src: "./src/assets/express.png",
      alt: "Exprss JS Logo",
      title: "Express.js",
      } ,
      be4: {
        src: "./src/assets/mongo.png",
      alt: "MongoDB Logo",
      title: "MongoDB",
      } ,
      be5: {
        src: "./src/assets/sql.png",
      alt: "SQL Logo",
      title: "SQL.js",
      } ,
      
    },
    tools: {
      tl1: {
        src: "./src/assets/git.png",
      alt: "GIT Logo",
      title: "git",
      },
      tl2: {
        src: "./src/assets/github.png",
      alt: "GIT-HUB Logo",
      title: "GitHub",
      },
      tl3: {
        src: "./src/assets/javascript.png",
      alt: "JavaScript Logo",
      title: "JavaScript",
      },
      tl4: {
        src: "./src/assets/postman.png",
      alt: "Postman Logo",
      title: "Postman",
      },
       tl5: {
         src: "./src/assets/python.png",
       alt: "Python Logo",
       title: "Python",
       },
       tl6: {
         src: "./src/assets/typescript.png",
       alt: "TypeScript Logo",
       title: "TypeScript",
       },
    },
  }
  return (
    <Motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.2 }}
    >
    
    <div id="skills" className="colors" style={{ width: '100%' }}>
      {/* Row 1: Full-width Title */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px',
          background: 'blue',
          color: 'black',
          fontSize: '2rem',
          border: "8px", 
          borderRadius: "5px 90px  "
        }}
      >
        <h1 style={{border: "2px", borderRadius: "20px 2px 30px  "}}>Skills</h1>
      </div>

      {/* Row 2: 3-column Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '20px',
          padding: '20px',
          

        }}
      >
        {/* Column 1: Frontend */}
        
        <div 
        // data-aos-easing="linear" data-aos-duration="1500"
         style={{ background: 'rgb(138, 84, 138)',  padding: '5px', textAlign: 'center', color: 'black', height: '43rem', borderRadius:"15px", border:"1px solid #ccc", width:"100%" }}>
          <div><h2>Frontend</h2></div>
          
          <div  style={{ display: 'grid',  gridTemplateColumns: '1fr 1fr ' , flexDirection:"initial 2"}}>
           {Object.values(Skill.frontend).map((item, index) => (
            <div className='scale' key={index} style={{ margin: '10px', background: '#fff', borderRadius:"15px", border:"1px solid #ccc" , boxShadow:"rgb(15, 22, 87)3px 3px 3px 3px,rgb(20, 15, 97)3px 3px 3px 3px,rgb(24, 16, 95)3px 3px 3px 3px,rgb(24, 15, 100)3px 3px 3px 3px " ,}}>
              <img className='ma' style={{marginTop: "2vh", marginBottom: "0vh"}} src={item.src} alt={item.alt} width="50"  />
              <p style={{ fontFamily: 'sans-serif',fontSize: '18px', fontStyle: 'bold', marginTop: "0.5vh", marginBottom: "0vh"  }}>{item.title}</p>
            </div>
          ))}
          </div>
        </div>
        
        {/* // Column 2: Backend */}
        <Motion.div
          initial={{ opacity: 0, y: 50 }} // starts hidden & pushed down
      whileInView={{ opacity: 1, y: 0 }} // animates up & fades in
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }} // triggers once when 20% is in view
   >

           <div
            // dep-aos='fade-down fade-right'
            style={{width:"100%", height: '26rem', background: 'rgb(114, 108, 108)',  padding: '5px', textAlign: 'center', color: 'black' , borderRadius:"15px", border:"1px solid #ccc",  }}>
          <div><h2>Backend</h2></div>
          
          <div style={{ display: 'grid',  gridTemplateColumns: '1fr 1fr ' }}>
            
           {Object.values(Skill.backend).map((item, index) => (
            <div 
            id='skill' className='scale'
            key={index}  style={{ margin: '10px', background: '#fff', borderRadius:"15px", border:"1px solid #ccc", boxShadow:"rgb(15, 22, 87)0px 6px 6px 0px  ,rgb(20, 15, 97)0px 6px 6px 0px ,rgb(24, 16, 95)0px 6px 6px 0px  ,rgb(24, 15, 100)0px 6px 6px 0px   " , }}>
              <img className='ma' style={{marginTop: "2vh", marginBottom: "0vh"}} src={item.src} alt={item.alt} width="50"  />
              <p style={{ fontFamily: 'sans-serif',fontSize: '18px', fontStyle: 'bold', marginTop: "0.5vh", marginBottom: "0vh" }}>{item.title}</p>
            </div>
          ))}
          
          </div>
        </div>
    </Motion.div>

        {/* Column 3: Tools && Languages */}
         <div  style={{ width:"100%", height: '34rem',borderRadius:"15px", border:"1px solid #ccc",  padding: '5px', textAlign: 'center', color: 'black', paddingRight:"10px" }}>
          <div><h2 className='text-42px'>Tools && Loanguages</h2></div>
          
          <div  style={{ display: 'grid',  borderRadius: "15px",gap: '10px', gridTemplateColumns: '1fr 1fr ' }}>
           {Object.values(Skill.tools).map((item, index) => (
            <div key={index} className='scale skill' style={{ margin: '5px 5px',boxShadow:"rgb(114, 108, 108)3px 3px 3px 3px, rgb(114, 108, 108)3px 3px 3px 3px, rgb(114, 108, 108)3px 3px 3px 3px, rgb(114, 108, 108)3px 3px 3px 3px" , background: '#fff', borderRadius:"15px", border:"1px solid #ccc"}}>
              <img className='ma' style={{marginTop: "2vh", marginBottom: "0vh"}} src={item.src} alt={item.alt} width="50"  />
              <p style={{ fontFamily: 'sans-serif',fontSize: '18px', fontStyle: 'bold', marginTop: "0.5vh", marginBottom: "0vh"  }}>{item.title}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
    </Motion.div>
  );
}
