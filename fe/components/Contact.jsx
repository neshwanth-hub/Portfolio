import { motion as Motion } from "framer-motion";
import Aos from "aos";
// import { useEffect } from "react";
import "aos/dist/aos.css";
// import  "./src/global.css";
// import  {motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import Nesh from "../src/assets/Nesh.jpg"; // Adjust the path as necessary
// import "./App.css";
// import "tailwindcss/tailwind.css"; // Import Tailwind CSS

 export default function Contact ()  {
	const Nesh = "../src/assets/Nesh.png"
	  return (
	
	
	<Motion.div 
	initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className={`backgr-box `}
			

	>
		<div dep-aos="fade-down fade-right" style={{display:"flex", justifyContent:"center"}} className="fl gap-8">
		<div style={{ height:'80rem'}} className="text-center lg:text-left text-gray-200 space-y-6">
			<h2 style={{color:"blue", border: "2px", borderRadius: "20px 30px red ",marginTop: "4vh", fontSize: "2rem"}} className="backgr-box1 h2 ha2">Let's We Connect</h2>
			<div>
				<p  className="text-lg ha2 text-gr">
					I'm always open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out!
				</p>
			
			<div style={{display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column",gap:"1rem"}} className=" flex-col space-y-4">
						{[
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
						].map((item, index) => (
							<Motion.a
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								href={item.link}
								target="_blank"
								// rel="noopener noreferrer"
								key={index}
								style={{ flexDirection: "row", textAlign:'center', marginLeft:'3rem', display: "flex",justifyContent: "center", alignItems: "center", border: "1px solid #ccc", borderRadius: "10px", width: "60%",  height: "5rem" }}
								// className="a1"
								>
									<ul>
								<li style={{flex:1, height:'10vh', width:'60vw', bottom:'0px',paddingTop:'4vh',textDecoration:"none"}} className=" li textDec">{item.icon}     {item.text}</li>
								</ul>
								{/* <span className="text-white text-lg font-medium">
									{item.text}
								</span> */}
							</Motion.a>
						))}
					</div>
					</div>
				</div>
		{/* Image with gradient circle */}
				<div  className="r-1 p-1">
					<div className="br">
						
					</div>
					<div style={{ border:"5px dotted #fff", borderRadius: "50rem", marginLeft:'0px', width:300, height:340, marginTop:"60%"}}>
						<div
						 style={{width:300, height:300,background:"blue",margin:"1vw", marginLeft:'15px',  borderRadius: "50em",  padding: "0.1rem",}}
						 className="ab-1 -z-10 w-64 h-64 rounded-full bg-gradient-to-r  opacity-50" >
					<Motion.img
						src={Nesh}
						width={256}
						style={{ borderRadius: "50%",  margin: "1px",}}
						alt="nesh"
						
						className=" w-64 h-auto rel z-10"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						initial={{ scale: 0.8 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.5 }}
						
					/>
					</div>
				</div>	
				</div>
			</div>
		</Motion.div>
	
	)
}