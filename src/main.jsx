import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import './global.css'
import "aos/dist/aos.css";
// import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
// import './src/assets/Nesh.png';
// import '.src/assets/*.png';
// import '.src/assets/*.svg';
// import '.src/assets/*.jpg';
// import '.src/assets/*.jpeg';
// import '.src/assets/*.pdf';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
