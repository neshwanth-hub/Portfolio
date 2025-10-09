import { motion as Motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
// import "../src/tailwind.css";
// import "../src/global.css";

const github = "https://github.com/neshwanth-hub";
const linkedin = "https://www.linkedin.com/in/neshwanth";

function GitLinkedIn() {
  const [hoveredIcon, setHoveredIcon] = useState("");
  return (
    <aside
    //   className="fixed flex flex-col items-end gap-4 z-40"
    className=" fixed right-0 custom-style top-3/4 h-fit overflow-hidden hover:bg-blue-200 m-1 z-20"
      style={{
    //     left:  "100rem",
    //     // right: "0.5rem",
    //     alignItems: "right",
    //     zIndex: "-40",
    //     bottom: "8rem", // Adjust if your footer is taller/shorter
    //   }}
    // overflow: "hidden",
    justifyItems: "right",
    right: '0'
      }}
    >
      <Motion.a
        href={github}
        target="_blank"
        aria-label="GitHub"
        className="git-icon-btn "
        onMouseEnter={() => setHoveredIcon(github)}
        onMouseLeave={() => setHoveredIcon("")}
        animate={
          hoveredIcon === "github"
            ? { x: -16, scale: 1.18 }
            : { x: 0, scale: 1 }
        }
        transition={{ type: "spring", stiffness: 10, damping: 20 }}
      >
        <Motion.div
          className="p-3 rounded-full bg-gray-300 shadow-sw"
        >
          <FaGithub size={28} style={{ color: "#333" }} />
        </Motion.div>
        {hoveredIcon === "github" && (
          <span className="ml-3 text-base font-semibold text-gray-800 bg-white px-2 py-1 rounded shadow">
            GitHub
          </span>
        )}
      </Motion.a>
      <Motion.a
        href={linkedin}
        target="_blank"
        aria-label="LinkedIn"
        className="git-icon-btn"
        onMouseEnter={() => setHoveredIcon("linkedin")}
        onMouseLeave={() => setHoveredIcon("")}
        animate={
          hoveredIcon === "linkedin"
            ? { x: -16, scale: 1.18 }
            : { x: 0, scale: 1 }
        }
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Motion.div
          className="p-3 rounded-full bg-gray-300 shadow-md"
        >
          <FaLinkedin size={28} style={{ color: "#0077b5" }} />
        </Motion.div>
        {hoveredIcon === "linkedin" && (
          <span className="ml-3 text-base font-semibold text-blue-700 bg-white px-2 py-1 rounded shadow">
            LinkedIn
          </span>
        )}
      </Motion.a>
    </aside>
  );
}

export default GitLinkedIn;