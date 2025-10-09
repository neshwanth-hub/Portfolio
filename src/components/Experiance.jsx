
import { motion as Motion } from "framer-motion";


const Experiance = () => {
  return (
    <>
    <Motion.div
	initial={{ x:100 , opacity: 0 }}
	animate={{x: 0, y: 0, opacity: 1 }}
	transition={{ duration: 0.1 }}	
	viewport={{ once: true, amount: 0.2 }}
	
	 className="bg fl1 p-8 rounded-xl shadow-lg mx-auto">
			{/* Header */}
			{/* COLOR BLUE
			Experience - thick blue
			 Freelance - thick blue
			 Lead the Frontend Development: - blue
			 Technologies Used:  - blue
			 Enhanced User Experience:
			 Worked on HexVibe: - blue
			 Responsibilities: - blue
			 Technologies Used: - blue
			 View Project - thick blue
			
			
			*/}
			<div>
			<h1 className=" exp1 blue-1">
				Experience
			</h1>

			{/* Experience Details */}
			<div className="">
				<div className="w-full mx-auto">
					<div className="mb-8">
						<h2 className=" mb-2">
							Frontend Developer |{" "}
							<span className="blue-2">Freelance</span>
						</h2>
						<p className="mb-1">June 2024 - Present</p>
						<ul className="">
							<li>
								<strong className="blue-1">
									Lead the Frontend Development:
								</strong>{" "}
								Directed the creation of the frontend for Rolan Plast's web
								applications.
							</li>
							<li>
								<strong className="blue-1">Technologies Used:</strong>{" "}
								Utilized <span className="">React.js</span>,{" "}
								<span className="mb-1">Recoil</span>, and{" "}
								<span className="">Tailwind CSS</span>.
							</li>
							<li>
								<strong className="">
									Enhanced User Experience:
								</strong>{" "}
								Integrated{" "}
								<span className="">Framer Motion</span> for
								smooth animations.
							</li>
						</ul>
						<a
							href="https://rolanplast.netlify.app"
							className="blue-2"
							target="_blank"
							rel="noopener noreferrer">
							View Project
						</a>
					</div>

					<div
      
      className="mb-8">
						<h2 className="" style={{marginTop:'1em'}}>
							Intern | Entri Elevate (MERN Stack)
						</h2>
						<p className="">March 2024 - June 2024</p>
						<ul className="" style={{listStyle:'disc', marginLeft:40}}>
							<li>
								<strong className="blue-2">Worked on HexVibe:</strong>{" "}
								Developed an Instagram-inspired application with Next.js,
								Express.js, and MongoDB.
							</li>
							<li>
								<strong className="blue-2">Responsibilities:</strong>{" "}
								Implemented user authentication, posts, and real-time
								interactions.
							</li>
							<li>
								{/* <strong className="blue-2">Technologies Used:</strong>{" "}
								Next.js, Express.js, MongoDB, Recoil, and Tailwind CSS. */}
								<strong className="blue-2">Technologies Used:</strong>{" "}
								Utilized <span className="purple">React.js</span>,{" "}
								<span className="purple">Recoil</span>, and{" "}
								<span className="purple">Tailwind CSS</span>.
							</li>
						</ul>
						<a
							href="https://hexvibe.vercel.app/"
							className="blue-1"
							target="_blank"
							rel="noopener noreferrer">
							View Project
						</a>
					</div>
				</div>
				</div>
			</div>
		</Motion.div>
    </>
  )
}

export default Experiance
