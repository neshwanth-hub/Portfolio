// import Link from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaPhone , FaEnvelope , FaFacebook } from "react-icons/fa";
import GitLinkedIn from "./GitLinkedIn";


const socialLinks = [
	{
		href: "https://github.com/neshwanth-hub",
		label: "GitHub",
		icon: <FaGithub size={24} />,
		color: "text-gray-800",
	},
	{
		href: "https://linkedin.com/in/NeshwanthReddy",
		label: "LinkedIn",
		icon: <FaLinkedin size={24} />,
		color: "text-blue-700",
	},
	{
		href: "https://x.com/NeshwanthReddy",
		label: "Twitter",
		icon: <FaTwitter size={24} />,
		color: "text-blue-500",
	},
	{
		href: "https://facebook.com/NeshwanthReddy",
		label: "Facebook",
		icon: <FaFacebook size={24} />,
		color: "text-blue-600",
	},
];

const quickLinks = [
	{ href: "/", text: "Home" },
	{ href: "/experience", text: "Experience" },
	{ href: "/about", text: "About Me" },
	{ href: "/projects", text: "Projects" },
	{ href: "/contact", text: "Contact" },
];

const Footer  = () => {
	return (
  <footer id="footer"  className="footer-outer rounded-4xl">
    <div className="footer-inner">
      {/* Social Media */}
      <div className="footer-section">
        <h2 className="footer-title">Connect with me</h2>
        <div className="footer-social-row">
          {socialLinks.map(({ href, label, icon, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`footer-social-icon ${color}`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="footer-section">
        <h2 className="footer-title">Quick Links</h2>
        <div className="footer-links-row">
          {quickLinks.map(({ href, text }) => (
            <a
              key={text}
              to={href}
              className="footer-link"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {text}
            </a>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="footer-section grid-cols-1">
        <h2 className="footer-title">Contact Information</h2>
        <div className="footer-contact-row grid grid-cols-1">
          <div>
            <span className="grid grid-cols-4 w-50 h-40%">
            <div className="col-span-1 ..."><FaEnvelope className="footer-contact-icon col-span-1 items-end-safe" /></div>
            <div className="col-span-3 ..."><a href="mailto:neshwanth.k123@gmail.com" className="footer-contact-link col-span-2 items-start ">
              neshwanth.k123@gmail.com
            </a></div>
          </span>
          </div>
          <div>
            <span className="mt-2 grid grid-cols-4 w-50 h-40%">
            <div className="col-span-1 ..."><FaPhone className="footer-contact-icon  items-end-safe" /></div>
            <div className="col-span-3 ..." ><a href="tel:+917013136657" className=" col-span-2">
              +91 7013136657
            </a></div>
            
          </span>
          </div>
          {/* <div className="..."></div> */}
        </div>
      </div>

      {/* Back to Top */}
      <div className="footer-section">
        <button
          className="footer-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top
        </button>
        
      </div>

      {/* Copyright */}
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Neshwanth Reddy. All rights reserved.
      {/* <div  className="footer-git-linkedin">
        <GitLinkedIn /> 
        </div> */}
        </p> 
    </div>
  </footer  >
);
};

export default Footer;