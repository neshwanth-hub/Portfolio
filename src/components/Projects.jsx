
import "./../index.css"

import { motion as Motion } from "framer-motion";
// import "./../tailwind.css";
// import "./../global.css";
// import "./../pro.css"


const projectData = [
  {
    title: "Rolan Plast Business Website",
    description: `A dynamic website for a plastic manufacturing company.
    Technologies Used: React.js, Tailwind CSS, Recoil, Framer Motion.
    Key Features:
    - Designed a visually appealing and responsive user interface with Tailwind CSS.
    - Managed global state efficiently using Recoil.
    - Added smooth animations and transitions with Framer Motion to enhance user engagement.`,
    image: "./src/assets/Nesh.png",
    alt: "Rolan Plast Business Website",
    link: "https://rolanplast.netlify.app/",
  },
  {
    title: "Jaaaga Coworking Space",
    description: `A sleek and modern coworking space website built with Next.js and TypeScript.
    Features an interactive homepage with workspace listings, responsive design, and smooth animations.
    Includes dynamic routing, optimized performance, and a visually appealing UI for an enhanced user experience.`,
    // image: "./assets/javascript.png",
    image: './src/assets/javascript.png',
    alt: "Jaaaga Coworking Space Website",
    link: "https://jaaaga.space/",
  },
  {
    title: "Independence Day Theme Website",
    description: `Celebrates Independence Day with vibrant colors and historical elements.
    Built with HTML, CSS, JavaScript, Tailwind CSS, and Framer Motion.
    Features a freedom fighters carousel using Slick Carousel and a Hero Banner with a countdown.
    Includes a Gallery, responsive design, and easy navigation.
    Balanced traditional and modern design with subtle gradients and animations.`,
    image: "./src/assets/recoil.png",
    alt: "Independence Day Themed Website",
    link: "https://independence78.netlify.app/",
  },
  {
    title: "E-Commerce Platform",
    description: `Developed a responsive eCommerce platform using React.js and Tailwind CSS.
    Integrated product listing, cart management, and payment processing.
    Utilized Framer Motion for smooth transitions and user interactions.
    Implemented Slick Carousel for featured product displays.
    Managed state efficiently with Recoil for seamless user experience.`,
    image: "./src/assets/typescript.png",
    alt: "E-Commerce Platform",
    link: "https://hexaclothes.netlify.app/",
  },
  {
    title: "HexVibe",
    description: `A full-stack Instagram-inspired social media platform.
    Technologies Used: Next.js, Express.js, MongoDB, Recoil, Tailwind CSS.
    Key Features:
    - User authentication, profile management, and real-time interactions.
    - Scalable and optimized for performance with security best practices.
    - Designed to provide a smooth and engaging user experience similar to Instagram.`,
    image: "./src/assets/python.png",
    alt: "HexVibe Project",
    link: "https://hexvibe.vercel.app/",
  },
];

const Projects = () => {
  
   return (
    <div id="projects" className="projects-container ml-30 ... mb-20 ...">
      <h1 className="projects-title ">
        OUR PROJECTS
      </h1>
      <div className="projects-list">
        {projectData.map((item, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", marginBottom: "2rem", marginLeft:"5rem", marginRight:"5rem" }}
            className="project-box rounded-2xl p-6 pb-[100%] box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 grid  grid-cols-1 md:grid-cols-4 gap-6 items-center ml-5 ... mb-12"
          >
            {/* Image Left */}
            <div className="project-image ml-[30em] col-span-1">
              <div className="ml-10 p-[20px] ...  w-[100%]">
              <img
                src={item.image}
                alt={item.alt}
                style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", marginLeft:"5%" }}
                className="project-img ml-20 ... rounded-2xl w-[45%] "
              />
              </div>
            </div>
            {/* Text Right */}
            <div className="project-content mr-6 col-span-3 ...">
              <h2 className="project-title">{item.title}</h2>
              <p className="project-desc">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link text-amber-200 hover:text-blue-200"
              >
                View Project
              </a>
            </div>
          </Motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
