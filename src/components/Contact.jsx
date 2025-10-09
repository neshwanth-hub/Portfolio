// import { motion as Motion } from "framer-motion";
// // import Aos from "aos";
// // import { useEffect } from "react";
// // import "aos/dist/aos.css";
// // import  "./../global.css";
// import "./../index.css";
// // import "./../assets/Nesh.png";
// import "./../App.css";
// // import  {motion } from "framer-motion";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
// import { useEffect, useState } from "react";
// // import { BsFillPersonLinesFill } from "react-icons/bs";
// // import Nesh from "../src/assets/Nesh.jpg"; // Adjust the path as necessary
// // import "tailwindcss/tailwind.css"; // Import Tailwind CSS

//  export default function Contact ()  {
// 	const [showGri, setShowGri] = useState(false);
	

//   useEffect(() => {
//     function handleResize() {
//       const width = window.innerWidth;
//       setShowGri(width >= 360 && width <= 400);
//     }
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
// 	const Nesh = "src/assets/Nesh.png";
// 	  return (
	
// 	<Motion.div 
// 	initial={{ opacity: 0, y: -50 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			exit={{ opacity: 0, y: -50 }}
// 			transition={{ duration: 0.6, ease: "easeOut" }}
// 			className={`backgr-box `}
// 			id='contact'
			
// 	>
// 		<div 
// 		// dep-aos="fade-down fade-right"
// 		 style={{display:"flex", justifyContent:"center",
// 			gridTemplateColumns: "1fr 1fr 1fr", alignItems:"center", flexDirection:"column", gap:"2rem",
// 		 }} className="fl mleft gap-8">
// 		<div style={{ height:'80rem'}} className="text-center lg:text-left text-gray-200 grid grid-cols-1  space-y-6">
// 			<h2 style={{color:"blue", border: "2px", borderRadius: "20px 30px red ",marginTop: "4vh", fontSize: "2rem"}}
// 			 className="backgr-box1 h2 ha2"
// 			 >Let's We Connect</h2>
// 			<div>
// 				<p  className="text-lg ha2 text-gr">
// 					I'm always open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out!
// 				</p>
// 			<div  className={` flex-col grid grid-cols-2 gap-4 col-span-1/2 space-y-4`}>
// 			<div style={{display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column",gap:"1rem"}} className="gri flex-col space-y-4">
				
// 						{[
// 							{
// 								icon: <MdEmail size={24} />,
// 								text: "neshwanth.k123@gmail.com",
// 								link: "mailto:neshwanth.k123@gmail.com",
// 							},
// 							{
// 								icon: <FaGithub size={24} />,
// 								text: "github.com/neshwanth-hub",
// 								link: "https://github.com/neshwanth-hub",
// 							},
// 							{
// 								icon: <FaLinkedin size={24} />,
// 								text: "linkedin.com/in/neshwanth",
// 								link: "https://www.linkedin.com/in/neshwanth",
// 							},
// 							{
// 								icon: <MdPhone size={24} />,
// 								text: "+91 7013136657",
// 								link: "tel:+917013136657",
// 							},
// 							{
// 								icon: <MdLocationOn size={24} />,
// 								text: "Hyderabad, India",
// 								link: "https://maps.google.com",
// 							},
// 						].map((item, index) => (
// 							<Motion.a
// 								whileHover={{ scale: 1.05 }}
// 								whileTap={{ scale: 0.95 }}
// 								href={item.link}
// 								target="_blank"
// 								// rel="noopener noreferrer"
// 								key={index}
// 								className="mt-[3em] fl can11"
// 								// style={{ flexDirection: "row", textAlign:'center', marginLeft:'3rem', display: "flex",justifyContent: "center", alignItems: "center", border: "1px solid #ccc", borderRadius: "10px", width: "60%",  height: "5rem" }}
// 								// className="a1"
// 								>
// 								<ul className=" ml-3.5 grid-cols-1 md:grid md:grid-cols-4 place-items-center-safe mt-[50%] text-xl border-collapse text-pink-400 hover:text-green-300">
// 									{/* flex:1, height:'5em', width:'60vw', */}
// 									<div className="ml-[2em] md:col-span-1 ...">
// 								<li style={{ bottom:'0px', marginTop:'130%', textDecoration:"none"}} className=" place-items-center-safe hi2 h-[7%] ml-[2em] li textDec">{item.icon} </li> 
// 								</div>
// 								<div className=" mr-[2em] md:col-span-3 ...">
// 								 <li className=" ml-[2%]">{item.text}</li> 
// 								 {/* mt-[40%] */}
// 								 </div> 
// 								 {/* <div className=" mr-[2em] ...">
// 								 <li className="..."></li>
// 								 </div> */}
// 								</ul>
// 								{/* <span className="text-white text-lg font-medium">
// 									{item.text}
// 								</span> */}
// 							</Motion.a>
// 						))}
// 					</div>
// 					</div>
// 				</div>
// 		{/* Image with gradient circle */}
// 				<div  className="r-1 col-span-1/1 p-1">
// 					{/* can2 */}
// 					<div className="br">
						
// 					</div>
					
// 					<div style={{ border:"5px dotted #fff", borderRadius: "50rem", marginLeft:'0px', width:300, height:340, marginTop:"10%", 
					
// 				}}
					
// 					   >
// 						<div
// 						 style={{width:300, zIndex:-1, height:300,background:"blue",margin:"1vw", marginLeft:'15px',  borderRadius: "50em",  padding: "0.1rem",
// 							//  animation:"rotate-spark 2s linear ",
// 							}}
// 						//  className="ab-1 -z-10 w-64 h-64 rounded-full bg-gradient-to-r  opacity-50" 
// 						>
// 							<div className="-z-5">
// 					<Motion.img
// 						src={Nesh}
// 						// width={256}
// 						// style={{ zIndex:1, borderRadius: "50%",  margin: "1px",}}
// 						alt="nesh"
						
// 						className="  w-[82%] m-1 h-auto rounded-full br-[50%] z-1"
// 						whileHover={{ scale: 1.05 }}
// 						whileTap={{ scale: 0.95 }}
// 						initial={{ scale: 0.8 }}
// 						animate={{ scale: 1 }}
// 						transition={{ duration: 0.5 }}
						
// 					/>
// 					</div>
// 					<div className="-z-1">
// 					<Motion.hr className="border-10 mb[100%]  border-cyan-400 h-[120%] w-[100%]  duration-300  -z-5 "
// 						 style={{ zIndex:-1,border:"10px  dashed #055fff",  borderRadius:"50%", width:"100%", marginBottom:"60rem", height:"100%", marginTop:"-70%", animation:"rotate-spark 2s  infinite" }}
// 						 />
// 						 </div>
// 					</div>
// 				</div>	
				
// 				</div>
// 				</div>
// 			<div className={`${showGri ? "gri1" : "gri2"}`}></div>
// 			</div>
// 		</Motion.div>
	
// 	)
// } 

// import { motion as Motion } from "framer-motion";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
// // import { useEffect, useState } from "react";
// import "./Contact.css";

// export default function Contact() {
// //   const [showGri, setShowGri] = useState(false);

// //   useEffect(() => {
// //     function handleResize() {
// //       const width = window.innerWidth;
// //       setShowGri(width >= 360 && width <= 400);
// //     }
// //     handleResize();
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

//   const Nesh = "src/assets/Nesh.png";

//   return (
//     <Motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       id="contact"
//     >
//       <div className="contact-container">
//         {/* Part 1: Header and Info */}
//         <div className="text-center lg:text-left text-gray-200 space-y-6">
//           <h2 className="contact-header">Let's We Connect</h2>
//           <p className="contact-text">
//             I'm always open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out!
//           </p>
//         </div>

//         {/* Part 2: Contact + Image */}
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Part 2.1: Contact Details */}
//           <div className="contact-links">
//             {[
//               {
//                 icon: <MdEmail size={24} />,
//                 text: "neshwanth.k123@gmail.com",
//                 link: "mailto:neshwanth.k123@gmail.com",
//               },
//               {
//                 icon: <FaGithub size={24} />,
//                 text: "github.com/neshwanth-hub",
//                 link: "https://github.com/neshwanth-hub",
//               },
//               {
//                 icon: <FaLinkedin size={24} />,
//                 text: "linkedin.com/in/neshwanth",
//                 link: "https://www.linkedin.com/in/neshwanth",
//               },
//               {
//                 icon: <MdPhone size={24} />,
//                 text: "+91 7013136657",
//                 link: "tel:+917013136657",
//               },
//               {
//                 icon: <MdLocationOn size={24} />,
//                 text: "Hyderabad, India",
//                 link: "https://maps.google.com",
//               },
//             ].map((item, index) => (
//               <Motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href={item.link}
//                 target="_blank"
//                 key={index}
//                 className="contact-item"
//               >
//                 {item.icon}
//                 <span>{item.text}</span>
//               </Motion.a>
//             ))}
//           </div>

//           {/* Part 2.2: Image with rotating dashed circle */}
//           <div className="contact-image-wrapper">
//             <div className="contact-image-inner">
//               <Motion.img
//                 src={Nesh}
//                 alt="nesh"
//                 className="contact-image"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.5 }}
//               />
//               <Motion.hr className="rotating-circle" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Motion.div>
//   );
// }

// import { motion as Motion } from "framer-motion";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
// // import { useEffect, useState } from "react";
// import "./Contact.css";

// export default function Contact() {
//   const [showGri, setShowGri] = useState(false);

//   useEffect(() => {
//     function handleResize() {
//       const width = window.innerWidth;
//       setShowGri(width >= 360 && width <= 400);
//     }
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const Nesh = "src/assets/Nesh.png";

//   const contactItems = [
//     {
//       icon: <MdEmail size={24} />,
//       text: "neshwanth.k123@gmail.com",
//       link: "mailto:neshwanth.k123@gmail.com",
//     },
//     {
//       icon: <FaGithub size={24} />,
//       text: "github.com/neshwanth-hub",
//       link: "https://github.com/neshwanth-hub",
//     },
//     {
//       icon: <FaLinkedin size={24} />,
//       text: "linkedin.com/in/neshwanth",
//       link: "https://www.linkedin.com/in/neshwanth-reddy-kandhamalla-302bbb13a/",
//     },
//     {
//       icon: <MdPhone size={24} />,
//       text: "+91 7013136657",
//       link: "tel:+917013136657",
//     },
//     {
//       icon: <MdLocationOn size={24} />,
//       text: "Hyderabad, India",
//       link: "https://maps.google.com",
//     },
//   ];

//   return (
//     <Motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -50 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       id="contact"
//     >
//       {/* Top Layer */}
//       <div className="contact-top">
//         <h2 className="contact-header">Let's We Connect</h2>
//         <p>
//           I'm always open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out!
//         </p>
//       </div>

//       {/* Second Layer */}
//       <div className="contact-body">
//         {/* Left 60%: Contact Details */}
//         <div className="contact-left">
//           {contactItems.map((item, index) => (
//             <Motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href={item.link}
//               target="_blank"
//               key={index}
//               className="contact-item"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//             >
//               {item.icon}
//               <span>{item.text}</span>
//             </Motion.a>
//           ))}
//         </div>

//         {/* Right 30%: Circle with Image */}
//         <div className="contact-right">
//           <div className="image-wrapper">
//             <div className="image-inner">
//               <Motion.img
//                 src={Nesh}
//                 alt="nesh"
//                 className="contact-image"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 initial={{ scale: 0.8 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.5 }}
//               />
//               <Motion.div className="rotating-circle" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Motion.div>
//   );
// }

import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
// import { useEffect, useState } from "react";
import "./Contact.css";

export default function Contact() {
// //   const [showGri, setShowGri] = useState(false);

//   useEffect(() => {
//     function handleResize() {
//       const width = window.innerWidth;
//       setShowGri(width >= 360 && width <= 400);
//     }
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

  const Nesh = "src/assets/Nesh.png";

  const contactItems = [
    {
      icon: <MdEmail size={24} />,
      text: "neshwanth.k123@gmail.com",
      link: "mailto:neshwanth.k123@gmail.com",
    },
    {
      icon: <FaGithub size={24} />,
      text: "github.com/neshwanth-hub",
      link: "https://github.com/neshwanth-hub",
    },
    {
      icon: <FaLinkedin size={24} />,
      text: "linkedin.com/in/neshwanth",
      link: "https://www.linkedin.com/in/neshwanth",
    },
    {
      icon: <MdPhone size={24} />,
      text: "+91 7013136657",
      link: "tel:+917013136657",
    },
    {
      icon: <MdLocationOn size={24} />,
      text: "Hyderabad, India",
      link: "https://maps.google.com",
    },
  ];

  return (
    <Motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="contact"
    >
      {/* Top Layer */}
      <div className="contact-top">
        <h2 className="contact-header">Let's We Connect</h2>
        <p>
          I'm always open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out!
        </p>
      </div>

      {/* Second Layer */}
      <div className="contact-body">
        {/* Left 60%: Contact Details */}
        <div className="contact-left">
          {contactItems.map((item, index) => (
            <Motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={item.link}
              target="_blank"
              key={index}
              className="contact-item"
              style={{ "--order": index }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {item.icon}
              <span>{item.text}</span>
            </Motion.a>
          ))}
        </div>

        {/* Right 30%: Circle with Image */}
        <div className="contact-right">
          <div className="image-wrapper">
            <div className="image-inner">
              <Motion.img
                src={Nesh}
                alt="nesh"
                className="contact-image"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <Motion.div className="rotating-circle" />
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
}
