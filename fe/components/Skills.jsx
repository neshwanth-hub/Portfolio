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
        src: "../src/assets/html.png",
      alt: "HTML Logo",
      title: "HTML",
    },
    fr2: {
        src: "../src/assets/css.png",
      alt: "CSS Logo",
      title: "CSS",
    },
    fr3: {
        src: "../src/assets/react.svg",
      alt: "React Logo",
      title: "React",
    },
    fr4: {
        src: "../src/assets/recoil.png",
      alt: "Recoil Logo",
      title: "Recoil",
    },
    fr5: {
        src: "../src/assets/bootstrap.png",
      alt: "Bootstrap Logo",
      title: "Bootstrap",
    },
    fr6: {
        src: "../src/assets/tailwind.png",
      alt: "Tailwind Logo",
      title: "Tailwind CSS",
    },
    fr7: {
        src: "../src/assets/nextjs.png",
      alt: "NEXT JS Logo",
      title: "NEXT JS",
    },
    fr8: {
        src: "../src/assets/framer.png",
      alt: "Framer Motion Logo",
      title: "Framer Motion",
    },

    },
backend: {
      // src: "https://nodejs.org/static/images/logo.svg",
      be1: {
        src: "../src/assets/node.svg",
      alt: "NODE JS Logo",
      title: "Node.js",
      } ,
      // be2: {
      //   src: "../src/assets/node.svg",
      // alt: "NODE JS Logo",
      // title: "Node.js",
      // } ,
      be3: {
        src: "../src/assets/express.png",
      alt: "Exprss JS Logo",
      title: "Express.js",
      } ,
      be4: {
        src: "../src/assets/mongo.png",
      alt: "MongoDB Logo",
      title: "MongoDB",
      } ,
      be5: {
        src: "../src/assets/sql.png",
      alt: "SQL Logo",
      title: "SQL.js",
      } ,

    },
    tools: {
      tl1: {
        src: "../src/assets/git.png",
      alt: "GIT Logo",
      title: "git",
      },
      tl2: {
        src: "../src/assets/github.png",
      alt: "GIT-HUB Logo",
      title: "GitHub",
      },
      tl3: {
        src: "../src/assets/javascript.png",
      alt: "JavaScript Logo",
      title: "JavaScript",
      },
      tl4: {
        src: "../src/assets/postman.png",
      alt: "Postman Logo",
      title: "Postman",
      },
       tl5: {
         src: "../src/assets/python.png",
       alt: "Python Logo",
       title: "Python",
       },
       tl6: {
         src: "../src/assets/typescript.png",
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
    
    <div id="skills" className="w-full">
      {/* Row 1: Full-width Title */}
      <div className="flex justify-center items-center h-24 bg-blue-500 text-black text-2xl border-8 rounded-tl-lg rounded-br-3xl">
        <h1 className="border-2 rounded-tl-2xl rounded-br-3xl px-4 py-2">Skills</h1>
      </div>

      {/* Row 2: Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        {/* Column 1: Frontend */}
        <div className="bg-purple-500 p-3 text-center text-black rounded-xl border border-gray-300 h-auto order-3 md:order-1">
          <h2 className="text-xl font-bold mb-4">Frontend</h2>
          <div className="grid grid-cols-2 gap-3">
            {Object.values(Skill.frontend).map((item, index) => (
              <div key={index} className="m-2 bg-white rounded-xl border border-gray-300 p-3 shadow-lg">
                <img className="mx-auto mb-2" src={item.src} alt={item.alt} width="50" />
                <p className="font-sans text-lg font-bold">{item.title}</p>
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
          className="bg-gray-500 p-3 text-center text-black rounded-xl border border-gray-300 h-auto order-2 md:order-2"
        >
          <h2 className="text-xl font-bold mb-4">Backend</h2>
          <div className="grid grid-cols-2 gap-3">
            {Object.values(Skill.backend).map((item, index) => (
              <div key={index} className="m-2 bg-white rounded-xl border border-gray-300 p-3 shadow-lg">
                <img className="mx-auto mb-2" src={item.src} alt={item.alt} width="50" />
                <p className="font-sans text-lg font-bold">{item.title}</p>
              </div>
            ))}
          </div>
        </Motion.div>

        {/* Column 3: Tools && Languages */}
        <div className="bg-gray-600 p-3 text-center text-black rounded-xl border border-gray-300 h-auto">
          <h2 className="text-xl font-bold mb-4">Tools && Languages</h2>
          <div className="grid grid-cols-2 gap-3">
            {Object.values(Skill.tools).map((item, index) => (
              <div key={index} className="m-2 bg-white rounded-xl border border-gray-300 p-3 shadow-lg hover:scale-105 transition-transform">
                <img className="mx-auto mb-2" src={item.src} alt={item.alt} width="50" />
                <p className="font-sans text-lg font-bold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Motion.div>
  );
}
