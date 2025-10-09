// import { scale, transform } from 'framer-motion';
import "aos/dist/aos.css";
// import { useEffect } from 'react';
// import './../global.css';
import './../index.css';
import './../App.css';
import './Skills.css';
import { motion as Motion } from 'framer-motion';





// let Style = {
//   skillContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '20px',
//     backgroundColor: '#f5f5f5',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   skillTitle: {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     marginBottom: '10px',
//   },
//   skillList: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   skillItem: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: '10px',
//     padding: '10px',
//     backgroundColor: '#ffffff',
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease',
//   },
// }

export default function Skills() {


  const Skill = {
    frontend: {
     fr1: {
        src: "src/assets/html.png",
      alt: "HTML Logo",
      title: "HTML",
    },
    fr2: {
        src: "src/assets/css.png",
        // src: "fe/src/assets/css.png",
      alt: "CSS Logo",
      title: "CSS",
    },
    fr3: {
        src: "src/assets/react.svg",
      alt: "React Logo",
      title: "React",
    },
    fr4: {
        src: "src/assets/recoil.png",
      alt: "Recoil Logo",
      title: "Recoil",
    },
    fr5: {
        src: "src/assets/bootstrap.png",
      alt: "Bootstrap Logo",
      title: "Bootstrap",
    },
    fr6: {
        src: "src/assets/tailwind.png",
      alt: "Tailwind Logo",
      title: "Tailwind CSS",
    },
    fr7: {
        src: "src/assets/nextjs.png",
      alt: "NEXT JS Logo",
      title: "NEXT JS",
    },
    fr8: {
        src: "src/assets/framer.png",
      alt: "Framer Motion Logo",
      title: "Framer Motion",
    },

    },
backend: {
      // src: "https://nodejs.org/static/images/logo.svg",
      be1: {
        src: "src/assets/node.svg",
      alt: "NODE JS Logo",
      title: "Node.js",
      } ,
      // be2: {
      //   src: "../src/assets/node.svg",
      // alt: "NODE JS Logo",
      // title: "Node.js",
      // } ,
      be3: {
        src: "src/assets/express.png",
      alt: "Exprss JS Logo",
      title: "Express.js",
      } ,
      be4: {
        src: "src/assets/mongo.png",
      alt: "MongoDB Logo",
      title: "MongoDB",
      } ,
      be5: {
        src: "src/assets/sql.png",
      alt: "SQL Logo",
      title: "SQL.js",
      } ,

    },
    tools: {
      tl1: {
        src: "src/assets/git.png",
      alt: "GIT Logo",
      title: "git",
      },
      tl2: {
        src: "src/assets/github.png",
      alt: "GIT-HUB Logo",
      title: "GitHub",
      },
      tl3: {
        src: "src/assets/javascript.png",
      alt: "JavaScript Logo",
      title: "JavaScript",
      },
      tl4: {
        src: "src/assets/postman.png",
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
    className='mt-15em ml-[10%] pl-[10%] '
    >
    
    <div id="skills" className=" ml-[10%] h-auto">
      {/* Row 1: Full-width Title */}
      <div 
      style={{color :"blue", marginBottom:'1.2%', marginLeft:'8%'}}
       className="h-25 w-[90%] bg-blue-500  rounded-b-[12rem] pl-[10%] text-gray-950 text-4xl   border-8 rounded-bl-xl text-center  rounded-tl-[12rem]">
        <div style={{paddingTop:"2.5%", paddingBottom:'5%'}} className='pb-3 '>
        <h1 style={{paddingTop:"2px"}} className="text-red-500 ">Skills</h1>
        </div>
      </div>

      {/* Row 2: Responsive Grid */}
      <div style={{marginLeft:"9%",}} className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        {/* Column 1: Frontend */}
        <div className="bg-purple-500 p-9px text-center text-black rounded-xl border-green-600 border-10 h-[100%] w-[90%] order-1  md:order-1">
          <h2 style={{marginBottom:'2%', marginTop:'2%'}} className=" 
           text-gray-700 dark:text-red mt-5 tracking-tight w-[100%]
          text-xl font-bold mb-4
          ">Frontend</h2>
          <div style={{marginLeft:"5%"}} className=" ml-[10%] grid-cols-1 grid md:grid-cols-2 gap-3">
            {Object.values(Skill.frontend).map((item, index) => (
              <div key={index} style={{border:"2px solid "}} className=" hover:scale-120 w-[90%] h-[85%] shadow-lg shadow-cyan-500/50 bg-white rounded-xl border border-red-600  grid-cols-2 ">
                <img 
                // style={{marginLeft:"38%", marginTop:"2%"}}
                className=" mleft-35 mleft-36 w-[25%] h-[12%]  content-center" src={item.src} alt={item.alt}  />
                {/* width="50" height={30} */}
                <p className=" text-amber-300 decoration-red-200 hover:text-pink-600 font-bold" style={{marginBottom:"5%"}}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Backend */}
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className="bg-gray-500  p-[25] text-center text-black rounded-xl border border-gray-300 h-[135%] hight-60 md:h-[50%] mt-[10%] sm:[200%] w-[90%] order-2 md:order-2 "
        >
          <h2 style={{marginBottom:'2%', marginTop:'2%'}} className="text-xl font-bold ">Backend</h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-3 w-[85%]  md:ml-[3%]" style={{marginLeft:"7%"}}>
            {Object.values(Skill.backend).map((item, index) => (
              <div key={index} className="m-[2%]  bg-gray-600 hover:scale-110 hover:rotate-280 rounded-xl border border-gray-300 p-3 shadow-lg shadow-cyan-500/50">
                <img 
                // style={{marginLeft:"38%", marginTop:"5%"}}
                 className=" pl-[18] ml-[20%] w-[25%] mb-2 box-border size-12 border-4 mleft-30 mleft-38 mleft-35 " src={item.src} alt={item.alt} width="25" />
                <p className="text-lime-900 hover:text-rose-200 ml-[34]  font-bold">{item.title}</p>
              </div>
            ))}
          </div>
        </Motion.div>

        {/* Column 3: Tools && Languages */}
        <div className="bg-gray-600 p-3 text-center text-black rounded-xl border border-gray-300 w-[85%] sm:mt-[10%] md:h-[70%] h-[105%]  xl:h-[100%] hight-100 hight-90 order-3 md:order-3">
          {/* bac */}
          <h2 style={{marginBottom:'2%', marginTop:'2%'}} className="text-xl font-bold mb-4">Tools && Languages</h2>
          <div style={{marginLeft:"9.5%"}} className='ml-5px h-[80%] '>
          <div className="grid grid-cols-1  w-[85%] text-ellipsis text-[94%] md:grid-cols-2 gap-3">
            
            {Object.values(Skill.tools).map((item, index) => (
              <div key={index} className="m-2 bg-white rounded-xl border border-gray-300 w-[100%] p-3 shadow-lg shadow-cyan-500/50 hover:scale-105 ml-60% transition-transform">
                <img 
                // style={{ marginTop:"5%", marginLeft:"30%"}}
                 className=" mleft-30  mleft-36  w-[45%] mb-2" src={item.src} alt={item.alt} width="50" />
                {/* bac1 */}
                <p className=" text-black hover:text-green-400
                
                 font-bold">{item.title}</p>
              </div>
              
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Motion.div>
  );
}
